import { FFmpegKit, ReturnCode } from 'ffmpeg-kit-react-native';
import * as FileSystem from 'expo-file-system';

export const cropVideo = async (inputUri, startTime, duration) => {
    console.log('Video kırpma işlemi başlıyor...');

    const inputPath = inputUri.replace('file://', '');
    const outputPath = `${FileSystem.cacheDirectory}cropped_${Date.now()}.mp4`.replace('file://', '');

    const command = `-i "${inputPath}" -ss ${startTime} -t ${duration} -c copy "${outputPath}"`;

    console.log('FFmpeg komutu:', command);

    const session = await FFmpegKit.execute(command);
    const returnCode = await session.getReturnCode();

    if (ReturnCode.isSuccess(returnCode)) {
        console.log('Video başarıyla kırpıldı:', outputPath);
        return outputPath;
    } else {
        const failStackTrace = await session.getFailStackTrace();
        console.error('Video kırpma işlemi başarısız oldu:', failStackTrace);
        throw new Error('Video kırpma işlemi başarısız oldu.');
    }
};
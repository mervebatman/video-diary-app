import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useVideoStore } from '../src/store/useVideoStore';
import { cropVideo } from '../src/utils/ffmpegUtils';
import VideoPlayer from '../src/components/VideoPlayer';
import MetadataForm from '../src/components/MetadataForm';

export default function VideoCropScreen() {
   const [startTime, setStartTime] = useState(0);
    const [videoDuration, setVideoDuration] = useState(0);
    const [isCropping, setIsCropping] = useState(false);
    const [progress, setProgress] = useState("");
    
    const { videoUri, setVideoUri } = useVideoStore();
    const router = useRouter();

    const handleCrop = async () => {
        if (!videoUri) {
            alert("Video bulunamadı!");
            return;
        }

        setIsCropping(true);
        setProgress("Video kırpma işlemi başlatıldı...");

        try {
            const croppedUri = await cropVideo(videoUri, startTime, 5);
            setProgress("Kırpma tamamlandı!");
            setVideoUri(croppedUri);

            setTimeout(() => {
                setIsCropping(false);
                router.push('/'); 
            }, 1000);
        } catch (error) {
            setProgress("Kırpma başarısız oldu!");
            console.error(error);
            setIsCropping(false);
        }
    };

    const handleLoad = (playbackStatus) => {
        if (playbackStatus.durationMillis) {
            setVideoDuration(playbackStatus.durationMillis / 1000);
        }
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <VideoPlayer uri={videoUri} onLoad={handleLoad} startTime={startTime} />
            <Text>Başlangıç Zamanı: {startTime.toFixed(2)} sn</Text>
            <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={0}
                maximumValue={Math.max(0, videoDuration - 5)}
                value={startTime}
                onValueChange={setStartTime}
            />
            <TouchableOpacity onPress={handleCrop} style={{ marginTop: 10, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Kırpmaya Başla</Text>
            </TouchableOpacity>

            {isCropping && (
                <View style={{ marginTop: 20 }}>
                    <ActivityIndicator size="large" color="blue" />
                    <Text>{progress}</Text>
                </View>
            )}
        </View>
    );
}
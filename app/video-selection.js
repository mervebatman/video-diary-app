import { View, Text, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useVideoStore } from '../src/store/useVideoStore';

export default function VideoSelectionScreen() {
    const router = useRouter();
    const { setVideoUri } = useVideoStore();

    const pickVideo = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Galeri erişimi için izin vermelisiniz!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: false,
            quality: 1,
        });
        console.log(result.assets[0].uri, "result")

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const videoUri = result.assets[0].uri;
            setVideoUri(videoUri);
            // router.push(`/video-crop?uri=${videoUri}`);
            router.push(`/video-crop`);


            console.log('Selected Video URI:', videoUri);
        } else {
            console.log('Video seçimi iptal edildi veya hata oluştu.');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24 }}>Video Seç</Text>
            <Button title="Galeriden Video Seç" onPress={pickVideo} />
        </View>
    );
}

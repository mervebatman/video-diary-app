import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { useVideoStore } from '../src/store/useVideoStore';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const { videos } = useVideoStore();
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: videos.length === 0 ? 'center' : 'flex-start', alignItems: 'center', padding: 20 }}>
      {videos.length === 0 ? (
        <TouchableOpacity onPress={() => router.push('/video-selection')}>
          <Text className="text-xl text-blue-400">Video Ekle</Text>
        </TouchableOpacity>
      ) : (
        <>
          <FlatList
            data={videos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => router.push(`/details/${item.uri}`)}>
                <Text style={{ fontSize: 18, marginVertical: 10 }}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
          <Button title="Yeni Video Ekle" onPress={() => router.push('/video-selection')} />
        </>
      )}
    </View>
  );
}
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useVideoStore = create((set) => ({
  videos: [],
  addVideo: (video) => {
    set((state) => {
      const newVideos = [...state.videos, video];
      AsyncStorage.setItem('videos', JSON.stringify(newVideos)); 
      return { videos: newVideos };
    });
  },

  videoUri: null,
  setVideoUri: (uri) => set({ videoUri: uri }),
}));
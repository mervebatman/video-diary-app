import React, { useRef, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';

export default function VideoPlayer({ uri, onLoad, startTime }) {

    if (!uri) {
        console.error('VideoPlayer: uri prop is missing or invalid.');
        return null;
    }

    return (
        <View style={{ width: 320, height: 200, backgroundColor: 'black' }}>
            <Video
            source={{ uri }}
            style={{ width: '100%', height: '100%' }} 
            onLoad={(playbackStatus) => onLoad?.(playbackStatus)}
            positionMillis={startTime * 1000}
            shouldPlay
            useNativeControls
            resizeMode="contain"
            onError={(error) => console.error('VideoPlayer hata:', error)}
            />
        </View>
    );
}
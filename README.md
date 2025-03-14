# Video Cropping Feature Documentation

## Overview

This feature allows users to upload a video, select a starting point, and crop a 5-second segment from the video. The process includes selecting the video, setting the start time, and cropping the video using FFmpeg. The app is built with React Native and Expo, and Zustand is used for state management.

## Features

- **Pick Video**: Users can select a video from their device's gallery or record a new video.
- **Set Start Time**: Once a video is selected, users can pick a start time using a slider.
- **Crop Video**: After selecting the start time, users can crop a 5-second segment from the video.
- **State Management**: Zustand is used to manage the video URI, start time, and cropped video URI, allowing for seamless state handling across components.

## Technologies Used

- **React Native**: Framework used to build the mobile app.
- **Expo**: Simplifies development with various built-in tools like video playback and image picking.
- **Zustand**: State management library for handling global state.
- **FFmpeg Kit**: A tool used to process and crop videos.
- **React Native Community Slider**: Used for selecting the start time for video cropping.

## User Flow

1. **Navigate to the Video Page**:
   The user is presented with a button to add a video. Upon clicking, they are redirected to a video page where they can pick a video from their device or record a new one.

2. **Select Video and Choose Start Time**:
   After selecting a video, the user can preview it, and a slider allows them to select the start time in seconds.

3. **Crop the Video**:
   Once the user has selected the start time, they can crop a 5-second segment from that point in the video. The cropping operation is performed using FFmpeg.

4. **State Management**:
   Zustand is utilized to manage the app's state. The selected video, start time, and cropped video URI are stored in the Zustand store, which can be accessed across different parts of the app.

## Libraries Used

- `@react-native-async-storage/async-storage`: For local storage management.
- `@react-native-community/slider`: For the slider component to set the start time.
- `@tanstack/react-query`: For handling API requests and managing server state.
- `expo-av`: For video playback functionality.
- `expo-image-picker`: For picking videos from the gallery or camera.
- `expo-router`: To handle navigation within the app.
- `expo-video`: For video-related components.
- `ffmpeg-kit-react-native`: For processing and cropping videos.
- `zustand`: For global state management.

## How It Works

### 1. **Video Selection**:
   When the user clicks on the "Add Video" button, they are redirected to the video selection page. Here, they can choose a video from their gallery or record a new video.

### 2. **Setting the Start Time**:
   The selected video is displayed in a video player, and a slider allows the user to choose the start time of the video. The position of the slider corresponds to the time in seconds.

### 3. **Cropping the Video**:
   Once the user selects the start time, they can crop the video. The video is processed using FFmpeg to extract a 5-second segment starting from the selected time.

### 4. **Managing State with Zustand**:
   Zustand is used for managing the state related to the video. This includes the video URI, the start time selected by the user, and the URI of the cropped video. Zustand ensures that the video data can be accessed and updated throughout the app.

## Conclusion

This feature offers an intuitive and user-friendly way to crop videos within the app. With the power of React Native, Expo, Zustand, and FFmpeg, users can easily select a video, choose a start time, and crop the desired segment for use in the app. This process is seamless and efficient, providing a smooth experience for the users.

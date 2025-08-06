import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as VideoThumbnails from 'expo-video-thumbnails';
import { execute } from 'react-native-ffmpeg';

export default function App() {
  const [videoUri, setVideoUri] = useState(null);
  const [thumbnailUri, setThumbnailUri] = useState(null);
  const [compressing, setCompressing] = useState(false);

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    });

    if (!result.cancelled) {
      setVideoUri(result.uri);
      const { uri } = await VideoThumbnails.getThumbnailAsync(result.uri);
      setThumbnailUri(uri);
    }
  };

  const compressVideo = async () => {
    setCompressing(true);

    const outputPath = `${RNFS.DocumentDirectoryPath}/compressed_video.mp4`;

    const command = `-i ${videoUri} -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k ${outputPath}`;

    execute(command)
      .then((result) => {
        console.log('FFmpeg process completed successfully:', result);
        setCompressing(false);
      })
      .catch((error) => {
        console.log('FFmpeg process failed:', error);
        setCompressing(false);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={pickVideo}>
        {videoUri ? (
          <Video
            source={{ uri: videoUri }}
            style={{ width: 320, height: 240 }}
            controls={true}
          />
        ) : (
          <View style={{ backgroundColor: '#ccc', width: 320, height: 240 }} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={compressVideo} disabled={!videoUri}>
        <View
          style={{
            backgroundColor: '#1e90ff',
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
        >
          {compressing ? (
            <Text style={{ color: '#fff', fontSize: 16 }}>Compressing...</Text>
          ) : (
            <Text style={{ color: '#fff', fontSize: 16 }}>Compress Video</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

    /**
     * Sample React Native App
     * https://instamobile.io
     *
     * @format
     * @flow strict-local
     */
    import React from 'react';
    import {View, Button} from 'react-native';
    import {launchImageLibrary} from 'react-native-image-picker';
    const CompressionTest = () => {
      const openImageLibrary = () => {
        launchImageLibrary(
          {
            mediaType: 'photo',
          },
          (response) => {
            compressVideo(response.uri);
          },
        );
      };
      const compressVideo = (sourceUri) => {
        console.log('  compressVideo  ++++', sourceUri);
        RNFFmpeg.execute(`-i ${sourceUri} -c:v mpeg4 resultimage.\mp4`).then(
          (result) => {
            console.log(result);
          },
        );
      };
      return (
        <View style={styles.container}>
          <Button onPress={openImageLibrary} title="Pick Image" color="#841584" />
        </View>
      );
    };
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    });
    export default CompressionTest;
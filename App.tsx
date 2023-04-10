/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

function App(): JSX.Element {
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.front;

  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermission();
      await Camera.requestMicrophonePermission();
    })();
  }, []);

  if (device == null) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <Camera style={{flex: 1}} device={device} isActive={true} />
    </SafeAreaView>
  );
}
export default App;

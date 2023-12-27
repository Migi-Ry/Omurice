import React from 'react';
import { StatusBar, SafeAreaView, View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';

const CameraScreen = ({ navigation }) => {
  navigation = useNavigation();
  const [camera, setCamera] = React.useState("");

  const takePhoto = () => {
    console.log('Button Pressed');
    if (this.camera) {
      console.log('Taking photo');
      const options = {
        quality: 1,
        base64: true,
        fixOrientation: true,
        exif: true
      };

      this.camera.takePictureAsync(options).then(photo => {
        photo.exif.Orientation = 1;         
      });
    }
  }

  onPictureSaved = photo => {
    console.log(photo);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"}/>
    
      <Camera 
        autoFocus
        style={styles.camera}
        ref={(ref) => { this.camera = ref }}
        zoom={1}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.captureBtn} onPress={takePhoto}>
          </TouchableOpacity>
        </View>
      </Camera>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: "2.5%",
    // paddingVertical: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    width:"100%",
    borderRadius: 15,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  captureBtn: {
    bottom: "5%",
    backgroundColor: "white", //test
    width: 60,
    height: 60,
    borderRadius: 70,
  },
});

export default CameraScreen;

// UploadScreen.jsx
import React from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const CameraScreen = ({ navigation }) => {
  navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: "5%",
  },
});

export default CameraScreen;

// UploadScreen.jsx
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const UploadScreen1 = ({ navigation }) => {
  navigation = useNavigation();

  const handleNextPress = () => {
    navigation.navigate('UploadScreen2');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.progressText}>1/2</Text>
      </View>

      {/* Image Upload */}
      <View style={styles.imageUploadContainer}>
        <TouchableOpacity>
          <View style={styles.imageBox}>
            <FontAwesomeIcon icon={faImage} size={45} color='#FF6A00' />
            <Text style={styles.imageText}>Add Cover Photo</Text>
            <Text style={styles.requireImageText}>(up to 12MB)</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        {/* Food Name */}
        <View style={styles.formField}>
          <Text style={styles.labelText}>Food Name</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Enter food name"
            placeholderTextColor="#9FA5C0"
          />
        </View>

        {/* Description */}
        <View style={styles.formField}>
          <Text style={styles.labelText}>Description</Text>
          <TextInput
            style={[styles.inputText, { height: 100, borderRadius: 15, }]} // Adjust the height as needed
            placeholder="Tell a little about your food"
            placeholderTextColor="#9FA5C0"
            multiline
          />
        </View>

        {/* Cooking Duration */}
        <View style={styles.formField}>
          <Text style={styles.labelText}>Cooking Duration</Text>
          <TextInput
            style={styles.inputText}
            placeholder="In minutes"
            placeholderTextColor="#9FA5C0"
          />
        </View>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: "5%",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelText: {
    color: '#FF6A00',
    fontFamily: "MulishBold",
    fontSize: 18,
  },
  progressText: {
    color: 'black',
    fontFamily: "MulishBold",
    fontSize: 16,
  },
  imageUploadContainer: {
    borderBottomColor: '#F1F1F1',
    paddingBottom: 20,
  },
  imageBox: {
    height: 190,
    borderWidth: 2,
    borderColor: '#9FA5C0',
    borderStyle: 'dashed',
    padding: 16,
    alignItems: 'center',
    marginTop: "5%",
    borderRadius: 20,
    justifyContent: 'center'
  },
  imageText: {
    fontFamily: "MulishMedium",
    fontSize: 16,
    marginTop: "5%",
  },
  requireImageText: {
    fontSize: 14,
    color: '#9FA5C0',
  },
  formContainer: {
    marginTop: "3%",
  },
  formField: {
    marginBottom: "5%",
    gap: 10
  },
  labelText: {
    color: '#FF6A00',
    fontFamily: "MulishBold",
    fontSize: 16,
  },
  inputText: {
    paddingVertical: "2%",
    borderColor: '#9FA5C0',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: "5%",
    textAlignVertical: 'top',
    paddingTop: "5%",
    fontFamily: "MulishMedium",
    fontSize: 14,
  },
  nextButton: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
    padding: 10
  },
  nextButtonText: {
    color: '#FF6A00',
    fontFamily: "MulishBold",
    fontSize: 18,
  },
});

export default UploadScreen1;

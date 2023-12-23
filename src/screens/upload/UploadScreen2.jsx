import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGripVertical, faPlus } from '@fortawesome/free-solid-svg-icons';


const UploadScreen2 = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleFinishPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('HomeScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.progressText}>2/2</Text>
        </View>

        {/* Ingredients Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Ingredients</Text>
            <TouchableOpacity>
              <Text style={styles.sectionButton}>＋ Group</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ingredientsRow}>
            <FontAwesomeIcon
              icon={faGripVertical}
              color="#9FA5C0"
              style={styles.gripIcon}
            />
            <TextInput
              style={styles.ingredientsInputText}
              placeholder="Enter ingredient"
              placeholderTextColor="#9FA5C0"
            />
          </View>

          <View style={styles.ingredientsRow}>
            <FontAwesomeIcon
              icon={faGripVertical}
              color="#9FA5C0"
              style={styles.gripIcon}
            />
            <TextInput
              style={styles.ingredientsInputText}
              placeholder="Enter ingredient"
              placeholderTextColor="#9FA5C0"
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.addButton}>＋ Ingredient</Text>
          </TouchableOpacity>
        </View>

        {/* Steps Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeaderText}>Steps</Text>
          
          <View style={styles.stepContainer}>
            <Text style={styles.stepNumber}>1</Text>
            <TextInput
              style={[styles.stepInputText, { height: 100 }]}
              placeholder="Tell a little about your food"
              placeholderTextColor="#9FA5C0"
              multiline
            />
          </View>

          <TouchableOpacity style={styles.addStepsButton}>
            <FontAwesomeIcon icon={faPlus} size={22} color="#FF6A00" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    
      {/* Back & Finish Button */}
      <HideWithKeyboard>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.finishButton}
            onPress={handleFinishPress}
          >
            <Text style={styles.finishButtonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      </HideWithKeyboard>

      {/* Modal */}
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContainer}>
          <Image
            source={require("../../../assets/images/Modal.png")}
            style={styles.modalImage}
          />
          <Text style={styles.modalTitle}>Upload Success!</Text>
          <Text style={styles.modalText}>
            Your recipe has been uploaded, you can see it on your profile
          </Text>
          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.modalButton}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    marginBottom: "5%",
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
  finishButton: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
    padding: 10,
  },
  finishButtonText: {
    color: '#FF6A00',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContainer: {
    borderBottomWidth: 5,
    borderBottomColor: '#F1F1F1',
    paddingBottom: 40,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionHeaderText: {
    color: '#2E3E5C',
    fontFamily: "MulishBold",
    fontSize: 18,
  },
  sectionButton: {
    color: '#FF6A00',
    fontFamily: "MulishMedium",
    fontSize: 16,
  },
  ingredientsRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#9FA5C0'
  },
  gripIcon: {
    marginRight: "3%",
    color: '#9FA5C0'
  },
  ingredientsInputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#9FA5C0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 10,
    borderRadius: 30,
    fontFamily: "MulishMedium",
  },
  addButton: {
    color: '#FF6A00',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#9FA5C0',
    top: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  stepContainer: {
    marginTop: "2%",
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stepNumber: {
    width: 25,
    height: 25,
    marginRight: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#2e3e5c',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    borderRadius: 50,
  },
  stepInputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#9FA5C0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: "3%",
    borderRadius: 15,
    fontFamily: "MulishMedium",
  },
  addStepsButton: {
    color: '#FF6A00',
    backgroundColor: '#F4F5F7',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 15,
    textAlign: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 60,
    bottom: "2%",
  },
  backButton: {
    flex: 1,
    backgroundColor: '#F4F5F7',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  finishButton: {
    color: 'white',
    flex: 1,
    backgroundColor: '#FF6A00',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FF6A00',
    fontFamily: "MulishBold",
    fontSize: 16,
    textAlignVertical: 'center',
  },
  finishButtonText: {
    color: 'white',
    fontFamily: "MulishBold",
    fontSize: 16,
    textAlignVertical: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 250,
    height: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontFamily: "MulishBold",
    fontSize: 20,
    marginBottom: "2%",
  },
  modalText: {
    fontFamily: "MulishMedium",
    fontSize: 14,
    color: '#9FA5C0',
    marginBottom: "10%",
    textAlign: 'center',
  },
  modalImage: {
    width: 120,
    height: 120
  },
  modalButton: {
    backgroundColor: '#1fcc79',
    paddingVertical: "6%",
    paddingHorizontal: "10%",
    color: 'white',
    borderRadius: 30,
    fontFamily: "MulishBold",
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10
  },
});

export default UploadScreen2;

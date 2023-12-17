import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus, faFaceKissWinkHeart, faGripVertical } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-native-modal';

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
    <View style={styles.container}>
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
            <FontAwesomeIcon icon={faGripVertical} color='#9FA5C0' style={styles.gripIcon} />
            <TextInput
              style={styles.inputText}
              placeholder="Enter ingredient"
              placeholderTextColor="#9FA5C0"
            />
          </View>
          <View style={styles.ingredientsRow}>
            <FontAwesomeIcon icon={faGripVertical} color='#9FA5C0' style={styles.gripIcon} />
            <TextInput
              style={styles.inputText}
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
              style={[styles.inputText, { height: 100 }]}
              placeholder="Tell a little about your food"
              placeholderTextColor="#9FA5C0"
              multiline
            />
          </View>
          <TouchableOpacity style={styles.addStepsButton}>
            <FontAwesomeIcon icon={faCirclePlus} size={22} color='#FF6A00' />
          </TouchableOpacity>
        </View>

        {/* Next Button */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.finishButton} onPress={handleFinishPress}>
            <Text style={styles.finishButtonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContainer}>
          <Image source={require('../../../assets/images/Modal.png')} style={styles.modalImage} />
          <Text style={styles.modalTitle}>Upload Success!</Text>
          <Text style={styles.modalText}>Your recipe has been uploaded, you can see it on your profile</Text>
          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.modalButton}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cancelText: {
    color: '#FF6A00',
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  nextButton: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
    padding: 10,
  },
  nextButtonText: {
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
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  sectionButton: {
    color: '#FF6A00',
    fontSize: 18,
    fontWeight: 'bold'
  },
  ingredientsRow: {
    top: 3,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#9FA5C0'
  },
  gripIcon: {
    marginRight: 10,
    color: '#9FA5C0'
  },
  inputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#9FA5C0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 10,
    borderRadius: 20,
  },
  addButton: {
    color: '#FF6A00',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#9FA5C0',
    top: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  stepContainer: {
    top: 10,
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
    borderRadius: 50
  },
  addStepsButton: {
    color: '#FF6A00',
    backgroundColor: '#F1F1F1',
    top: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 70,
    marginTop: 120
  },
  backButton: {
    flex: 1,
    backgroundColor: '#F1F1F1',
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
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  finishButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    color: '#9FA5C0',
    marginBottom: 20,
    textAlign: 'center'
  },
  modalImage: {
    width: 120,
    height: 120
  },
  modalButton: {
    backgroundColor: '#1fcc79',
    padding: 16,
    width: 120,
    color: 'white',
    borderRadius: 30,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
});

export default UploadScreen2;

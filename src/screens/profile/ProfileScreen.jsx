import React, { useState, useCallback } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Modal, TextInput, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';
import { faCamera, faCog, faBell, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import recipes from './mockData';

const ProfileScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Recipes');
  const [selectedNavItem, setSelectedNavItem] = useState('Home');
  const [isModalUserNameVisible, setModalUserNameVisible] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [isModalUserDescriptionVisible, setModalUserDescriptionVisible] = useState(false);
  const [newUserDescription, setNewUserDescription] = useState('');

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  const handleNavPress = (navItem) => {
    setSelectedNavItem(navItem);
  
    if (navItem === 'Upload') {
      navigation.navigate('UploadScreen1');
    } else if (navItem === 'Home') {
      navigation.navigate('HomeScreen');
    } else if (navItem === 'Profile') {
      navigation.navigate('ProfileScreen');
    } else if (navItem === 'Notification') {
      navigation.navigate('NotiScreen');
    }
  };

  const renderRecipeItem = ({ item }) => (
    <View style={styles.recipeItem}>
      <Image source={item.image} style={styles.recipeImage} />
      <Text style={styles.recipeName}>{item.name}</Text>
      <View style={styles.recipeInfo}>
        <Text style={styles.categoryInfo}>{item.category}</Text>
      </View>
    </View>
  );

  const openModalUserName = () => {
    setModalUserNameVisible(true);
  };

  const closeModalUserName = () => {
    setModalUserNameVisible(false);
  };

  const openModalUserDescription = () => {
    setModalUserDescriptionVisible(true);
  };

  const closeModalUserDescription = () => {
    setModalUserDescriptionVisible(false);
  };

  const handleUsernameChange = () => {
    console.log('New username:', newUsername);
    closeModalUserName();
  };

  const handleDescriptionChange = () => {
    console.log('New description:', newUserDescription);
    closeModalUserDescription();
  };

  useFocusEffect(
    useCallback(() => {
      setSelectedNavItem('Profile'); 
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.settingsIcon}
          onPress={() => navigation.navigate('SettingsScreen')} // Navigate to SettingsScreen
        >
          <FontAwesomeIcon icon={faCog} size={20} color="#FF6A00" />
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <View style={styles.userInfoContainer}>
        <Image source={require('../../../assets/images/Avatar1.png')} style={styles.avatar} />
        <TouchableOpacity onPress={openModalUserName}>
          <Text style={styles.userName}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openModalUserDescription}>
          <Text style={styles.userDescription}>Food lover | Cooking enthusiast</Text>
        </TouchableOpacity>

        {/* Grid */}
        <View style={styles.gridContainer}>
          <View style={styles.gridItem}>
            <Text style={styles.gridNumber}>20</Text>
            <Text style={styles.gridLabel}>Recipes</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridNumber}>54</Text>
            <Text style={styles.gridLabel}>Following</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridNumber}>1,503</Text>
            <Text style={styles.gridLabel}>Followers</Text>
          </View>
        </View>

        {/* Border Line */}
        <View style={styles.borderLine} />

        {/* Tabs */}
        <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabItem, selectedTab === 'Recipes' && styles.selectedTabItem]}
          onPress={() => handleTabPress('Recipes')}
        >
          <Text style={[styles.tabText, selectedTab === 'Recipes' && styles.selectedTabText]}>Recipes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, selectedTab === 'Likes' && styles.selectedTabItem]}
          onPress={() => handleTabPress('Likes')}
        >
          <Text style={[styles.tabText, selectedTab === 'Likes' && styles.selectedTabText]}>Likes</Text>
        </TouchableOpacity>
      </View>
      </View>

      {/* Recipe List */}
      <FlatList
        data={recipes}
        renderItem={renderRecipeItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.recipeList}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Home')}
        >
          <FontAwesomeIcon icon={faHouse} size={20} color={selectedNavItem === 'Home' ? '#FF6A00' : '#9FA5C0'} />
          <Text style={[styles.navText, { color: selectedNavItem === 'Home' ? '#FF6A00' : '#9FA5C0' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Upload')}
        >
          <FontAwesomeIcon icon={faPenToSquare} size={20} color={selectedNavItem === 'Upload' ? '#FF6A00' : '#9FA5C0'} />
          <Text style={[styles.navText, { color: selectedNavItem === 'Upload' ? '#FF6A00' : '#9FA5C0' }]}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Camera')}
        >
          <View style={styles.cameraIcon}>
            <FontAwesomeIcon icon={faCamera} size={20} color={selectedNavItem === 'Camera' ? 'white' : '#F1F1F1'} />
          </View>
          <Text style={[styles.navText, { color: selectedNavItem === 'Camera' ? '#FF6A00' : '#9FA5C0' }]}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Notification')}
        >
          <FontAwesomeIcon icon={faBell} size={20} color={selectedNavItem === 'Notification' ? '#FF6A00' : '#9FA5C0'} />
          <Text style={[styles.navText, { color: selectedNavItem === 'Notification' ? '#FF6A00' : '#9FA5C0' }]}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Profile')}
        >
          <FontAwesomeIcon icon={faUser} size={20} color={selectedNavItem === 'Profile' ? '#FF6A00' : '#9FA5C0'} />
          <Text style={[styles.navText, { color: selectedNavItem === 'Profile' ? '#FF6A00' : '#9FA5C0' }]}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Change Username Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalUserNameVisible}
        onRequestClose={closeModalUserName}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModalUserName}>
              <FontAwesomeIcon icon={faXmark} color='white' />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Enter new username"
              placeholderTextColor="#FF6A00"
              onChangeText={(text) => setNewUsername(text)}
            />
            <TouchableOpacity style={styles.okButton} onPress={handleUsernameChange}>
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Change UserDescription Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalUserDescriptionVisible}
        onRequestClose={closeModalUserDescription}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModalUserDescription}>
              <FontAwesomeIcon icon={faXmark} color='white' />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Enter new description"
              placeholderTextColor="#FF6A00"
              onChangeText={(text) => setNewUserDescription(text)}
            />
            <TouchableOpacity style={styles.okButton} onPress={handleDescriptionChange}>
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    marginTop: 10,
  },
  settingsIcon: {
    marginRight: 10,
  },
  userInfoContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginBottom: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
  },
  userDescription: {
    color: '#9FA5C0',
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  gridItem: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  gridNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  gridLabel: {
    color: '#9FA5C0',
  },
  borderLine: {
    width: '100%',
    height: 8,
    backgroundColor: '#F1F1F1',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginTop: 16,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabText: {
    fontSize: 18,
    color: '#9FA5C0',
  },
  selectedTabItem: {
    borderBottomColor: '#FF6A00',
  },
  selectedTabText: {
    color: 'black',
    fontWeight: 'bold',
  },
  recipeList: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    gap: 4,
  },
  recipeItem: {
    width: 150,
    marginLeft: 16,
    marginBottom: 16,
    marginRight: 10,
  },
  recipeImage: {
    width: 150,
    height: 150,
    marginVertical: 16,
    borderRadius: 20
  },
  recipeName: {
    color: '#FF6A00',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  recipeInfo: {
    marginTop: 4,
  },
  categoryInfo: {
    color: '#9FA5C0',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F1F1F1',
    paddingVertical: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    color: '#9FA5C0',
    fontSize: 12,
    top: 5,
  },
  cameraIcon: {
    position: 'absolute',
    top: -49,
    backgroundColor: '#FF6A00',
    borderRadius: 50,
    padding: 8,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '100%', // Adjusted to span from left to right
    paddingVertical: 100,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 20,
    color: 'white',
  },
  input: {
    height: 40,
    borderBottomColor: '#FF6A00', // Set border color for bottom only
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%', // Adjusted to span from left to right
    color: 'white',
    textAlign: 'center'
  },
  okButton: {
    width: 100,
    height: 40,
    backgroundColor: '#FF6A00',
    marginTop: 16,
    borderRadius: 20, 
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  okButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';
import { faCamera, faMagnifyingGlass, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import recipes from './mockData';

const HomeScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedNavItem, setSelectedNavItem] = useState('Home');

  const handleFilterPress = (filter) => {
    setSelectedFilter(filter);
  };

  const handleNavPress = (navItem) => {
    setSelectedNavItem(navItem);
  
    if (navItem === 'Upload') {
      navigation.navigate('UploadScreen1');
    } else if (navItem === 'Profile') {
      navigation.navigate('ProfileScreen');
    }
  };


  const renderRecipeItem = ({ item }) => (
    <View style={styles.recipeItem}>
      <View style={styles.userContainer}>
        <Image source={item.avatar} style={styles.avatarContainer} />
        <Text style={styles.userName}>{item.userName}</Text>
      </View>
      <Image source={item.image} style={styles.recipeImage} />
      <Text style={styles.recipeName}>{item.name}</Text>
      <View style={styles.recipeInfo}>
        <Text style={styles.categoryInfo}>{item.category}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>Omurice</Text>
        <View style={styles.headerRight}>
          <Text style={styles.exploreText}>EXPLORE</Text>
          <Text style={styles.justForYouText}>JUST FOR YOU</Text>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <FontAwesomeIcon icon={faMagnifyingGlass} color='#9FA5C0' />
        <TextInput
          style={styles.searchTextInput}
          placeholder="Search"
          placeholderTextColor="#9FA5C0"
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
        />
      </View>

      {/* Filters */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterItem,
            selectedFilter === 'All' && styles.selectedFilter,
          ]}
          onPress={() => handleFilterPress('All')}
        >
          <Text style={[styles.filterText, selectedFilter !== 'All' && styles.unselectedFilterText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterItem,
            selectedFilter === 'Food' && styles.selectedFilter,
          ]}
          onPress={() => handleFilterPress('Food')}
        >
          <Text style={[styles.filterText, selectedFilter !== 'Food' && styles.unselectedFilterText]}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterItem,
            selectedFilter === 'Drinks' && styles.selectedFilter,
          ]}
          onPress={() => handleFilterPress('Drinks')}
        >
          <Text style={[styles.filterText, selectedFilter !== 'Drinks' && styles.unselectedFilterText]}>Drinks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterItem,
            selectedFilter === 'Dessert' && styles.selectedFilter,
          ]}
          onPress={() => handleFilterPress('Dessert')}
        >
          <Text style={[styles.filterText, selectedFilter !== 'Dessert' && styles.unselectedFilterText]}>Dessert</Text>
        </TouchableOpacity>
      </View>

      {/* Recipe Scroll */}
      <TouchableOpacity>
        
      </TouchableOpacity>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 30,
  },
  appName: {
    color: '#FF6A00',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
  },
  exploreText: {
    color: '#FF6A00',
    marginRight: 8,
  },
  justForYouText: {
    color: '#9FA5C0',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    paddingLeft: 16,
    backgroundColor: '#F1F1F1',
    height: 40,
    borderRadius: 20,
  },
  searchTextInput: {
    marginLeft: 8,
    color: '#9FA5C0',
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 16,
    alignItems: 'center'
  },
  selectedFilter: {
    backgroundColor: '#FF6A00',
  },
  unselectedFilterText: {
    color: '#9FA5C0',
  },
  filterItem: {
    padding: 8,
    borderRadius: 30,
    marginHorizontal: 10,
    width: 76,
    height: 40,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
  },
  filterText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500'
  },
  recipeItem: {
    width: 150,
    marginLeft: 16,
    marginBottom: 16,
    marginRight: 10
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 15
  },
  userName: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500'
  },
  recipeImage: {
    width: 150,
    height: 150,
    marginVertical: 16,
    borderRadius: 20
  },
  recipeName: {
    color: '#FF6A00',
    fontSize: 20,
    fontWeight: 'bold'
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
  recipeList: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    gap: 4,
  },
});

export default HomeScreen;

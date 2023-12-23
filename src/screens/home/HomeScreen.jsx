import React, { useState } from 'react';
import { StatusBar, View, Text, Image, StyleSheet, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
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

    // Chuyển hướng đến trang Upload khi nhấn vào item nav Upload
    if (navItem === 'Upload') {
      navigation.navigate('UploadScreen1');
    }

    // Chuyển hướng đến trang Camera khi nhấn vào item nav Camera
    if (navItem === 'Camera') {
      navigation.navigate('CameraScreen');
    }
  };

  const renderRecipeItem = ({ item }) => (
    <View style={styles.recipeItem}>
      <TouchableOpacity
        onPress={() => {}}
        style={styles.userContainer}
      >
        <Image source={item.avatar} style={styles.avatarContainer} />
        <Text style={styles.userName} numberOfLines={1}>{item.userName}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <Image source={item.image} style={styles.recipeImage} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.recipeName}>{item.name}</Text>
      </TouchableOpacity>
      
      <View style={styles.recipeInfo}>
        <Text style={styles.categoryInfo}>{item.category}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={'dark-content'}/>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>Omurice</Text>
        
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Text style={styles.exploreText}>EXPLORE</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.justForYouText}>JUST FOR YOU</Text>
          </TouchableOpacity>
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
      <FlatList
        data={recipes}
        renderItem={renderRecipeItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.recipeList}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Home')}
        >
          <FontAwesomeIcon icon={faHouse} size={20} color={selectedNavItem === 'Home' ? '#FF6A00' : '#9FA5C0'} />
          <Text
            style={[styles.navText, { color: selectedNavItem === 'Home' ? '#FF6A00' : '#9FA5C0' }]}
            numberOfLines={1}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Upload')}
        >
          <FontAwesomeIcon icon={faPenToSquare} size={20} color={selectedNavItem === 'Upload' ? '#FF6A00' : '#9FA5C0'} />
          <Text
            style={[styles.navText, { color: selectedNavItem === 'Upload' ? '#FF6A00' : '#9FA5C0' }]}
            numberOfLines={1}
          >
            Upload
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Camera')}
        >
          <View style={styles.cameraIcon}>
            <FontAwesomeIcon icon={faCamera} size={20} color={selectedNavItem === 'Camera' ? 'white' : '#F1F1F1'} />
          </View>
          <Text style={[styles.navText, { color: selectedNavItem === 'Camera' ? '#FF6A00' : '#9FA5C0', marginTop: "29%" }]}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Notification')}
        >
          <FontAwesomeIcon icon={faBell} size={20} color={selectedNavItem === 'Notification' ? '#FF6A00' : '#9FA5C0'} />
          <Text
            style={[styles.navText, { color: selectedNavItem === 'Notification' ? '#FF6A00' : '#9FA5C0' }]}
            numberOfLines={1}
          >
            Notification
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Profile')}
        >
          <FontAwesomeIcon icon={faUser} size={20} color={selectedNavItem === 'Profile' ? '#FF6A00' : '#9FA5C0'} />
          <Text
            style={[styles.navText, { color: selectedNavItem === 'Profile' ? '#FF6A00' : '#9FA5C0' }]}
            numberOfLines={1}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: "5%",
    marginTop: "-2%",
  },
  appName: {
    color: '#FF6A00',
    fontFamily: "Pacifico",
    fontSize: 20,
  },
  headerRight: {
    flexDirection: 'row',
  },
  exploreText: {
    color: '#FF6A00',    
    marginRight: "3%",
  },
  justForYouText: {
    color: '#9FA5C0',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: "5%",
    paddingLeft: "5%",
    backgroundColor: '#F1F1F1',
    paddingVertical: "3%",
    borderRadius: 50,
  },
  searchTextInput: {
    flex: 1,
    marginLeft: 8,
    color: '#9FA5C0',
    fontFamily: "MulishMedium",
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: "5%",
    alignItems: 'center',
  },
  selectedFilter: {
    backgroundColor: '#FF6A00',
  },
  unselectedFilterText: {
    color: '#9FA5C0',
  },
  filterItem: {
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    padding: "3%",
    borderRadius: 30,
    width: 72,
    height: 40,
  },
  filterText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: "MulishMedium",
  },
  recipeList: {
    // backgroundColor: "#ff0", // test
    justifyContent: 'space-between',
    marginHorizontal: "5%",
    gap: 5,
  },
  recipeItem: {
    width: 150,
    marginBottom: 16,
    marginLeft: "1.5%",
    marginRight: "2%",
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
    flex: 1,
    color: '#2E3E5C',
    fontFamily: "MulishMedium",
    fontSize: 14,
  },
  recipeImage: {
    width: 150,
    height: 150,
    marginVertical: "8%",
    borderRadius: 20
  },
  recipeName: {
    color: '#FF6A00',
    fontFamily: "MulishBold",
    fontSize: 20,
  },
  recipeInfo: {
    color: "#9FA5C0",
    fontFamily: "MulishLight",
  },
  categoryInfo: {
    color: "#9FA5C0",
    fontFamily: "MulishMedium",
    fontSize: 12,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingVertical: "3%",
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    color: '#9FA5C0',
    fontFamily: "MulishMedium",
    fontSize: 12,
    top: "7%",
  },
  cameraIcon: {
    position: 'absolute',
    top: "-105%",
    backgroundColor: '#FF6A00',
    borderRadius: 50,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

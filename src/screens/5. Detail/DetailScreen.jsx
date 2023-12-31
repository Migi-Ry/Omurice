import React from "react";
import { StatusBar, StyleSheet, View, } from "react-native";

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={'dark-content'} />
    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default DetailScreen;

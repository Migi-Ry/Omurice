import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Onboarding1 from '../../screens/onboardings/onboarding1';
import Onboarding2 from '../../screens/onboardings/onboarding2';
import Onboarding3 from '../../screens/onboardings/onboarding3';
import HomeScreen from '../../screens/home/HomeScreen';
import UploadScreen1 from '../../screens/upload/UploadScreen1';
import UploadScreen2 from '../../screens/upload/UploadScreen2';
import CameraScreen from '../../screens/camera/camera';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import SettingsScreen from '../../screens/profile/SettingsScreen';
import AboutScreen from '../../screens/profile/AboutScreen';
import NotiScreen from '../../screens/noti/NotiScreen';

const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      {/* <Tabs.Navigator screenOptions={{headerShown: false}}>
        <Tabs.Screen name="HomeScreen" component={HomeScreen} />
        <Tabs.Screen name="UploadScreen" component={UploadScreen1} />
        <Tabs.Screen name="CameraScreen" component={CameraScreen} />
      </Tabs.Navigator> */}
      <Stack.Navigator initialRouteName="Onboarding1" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="UploadScreen1" component={UploadScreen1} />
        <Stack.Screen name="UploadScreen2" component={UploadScreen2} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="NotiScreen" component={NotiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

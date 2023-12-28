import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Onboarding1 from './../../screens/onboardings/onboarding1';
import Onboarding2 from './../../screens/onboardings/onboarding2';
import Onboarding3 from './../../screens/onboardings/onboarding3';
import LoginScreen from '../../screens/authentication/Login';
import PasswordRecoveryScreen from '../../screens/authentication/PasswordRecovery';
import PasswordVerificationScreen from '../../screens/authentication/PasswordVerification';
import NewPasswordScreen from '../../screens/authentication/NewPassword';
import RegisterScreen from '../../screens/authentication/Register';
import HomeScreen from '../../screens/home/HomeScreen';
import SearchScreen from '../../screens/search/SearchScreen';
import UploadScreen1 from '../../screens/upload/UploadScreen1';
import UploadScreen2 from '../../screens/upload/UploadScreen2';
import CameraScreen from '../../screens/camera/CameraScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import SettingsScreen from '../../screens/profile/SettingsScreen';
import AboutScreen from '../../screens/profile/AboutScreen';
import NotiScreen from '../../screens/noti/NotiScreen';

const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding1" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="PasswordRecoveryScreen" component={PasswordRecoveryScreen} />
        <Stack.Screen name="PasswordVerificationScreen" component={PasswordVerificationScreen} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
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

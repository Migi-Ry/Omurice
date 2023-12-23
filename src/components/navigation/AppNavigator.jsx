import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Onboarding1 from '../../screens/onboardings/onboarding1';
import Onboarding2 from '../../screens/onboardings/onboarding2';
import Onboarding3 from '../../screens/onboardings/onboarding3';
import HomeScreen from '../../screens/home/HomeScreen';
import UploadScreen1 from '../../screens/upload/UploadScreen1';
import UploadScreen2 from '../../screens/upload/UploadScreen2';
import ProfileScreen from '../../screens/profile/ProfileScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding1" headerMode="none">
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="UploadScreen1" component={UploadScreen1} />
        <Stack.Screen name="UploadScreen2" component={UploadScreen2} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

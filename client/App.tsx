/* eslint-disable react/no-children-prop */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import HomeScreen from './src/screens/HomeScreen'; 
import PlaidScreen from './src/screens/PlaidScreen'; 

import OnboardingScreen from './src/components/OnboardingScreen'
// import FontAwesome from 'react-native-vector-icons/fontawesome';
import {View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <NavigationContainer>
      <Tab.Navigator initialRouteName="OnboardingScreen" > 
        <Tab.Screen name="Onboarding" component={OnboardingScreen}/>
      <Tab.Screen
            name="Home"
            component={HomeScreen}
            // options={{
            //   tabBarIcon: () => (
            //   // <FontAwesome name="home" color="#ff0000" size={20} />
            //   ),
            // }}
          /><Tab.Screen
          name="Plaid"
          component={PlaidScreen}
          // options={{
          //   tabBarIcon: () => (
          //   // <FontAwesome name="home" color="#ff0000" size={20} />
          //   ),
          // }}
        />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const App = () => {
  return <SafeAreaProvider><AppNavigator /></SafeAreaProvider>
};

export default App;

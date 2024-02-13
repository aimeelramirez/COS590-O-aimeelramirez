/* eslint-disable react/no-children-prop */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen'; // Correct import path
import Icon from 'react-native-vector-icons/FontAwesome'; // Choose the icon set you want to use

import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <View style={{ backgroundColor: 'pink', flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                // Your custom icon component or an Image
                <Icon name="star" size={30} color="gold" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const App: React.FC = () => {
  return <AppNavigator />;
};

export default App;

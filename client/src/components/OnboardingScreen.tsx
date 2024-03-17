// OnboardingScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import {PlaidLinkScreen } from './PlaidLinkScreen';
interface OnboardingScreenProps {
  navigation: any;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const handleContinue = () => {
    // Perform any navigation or state updates as needed
    navigation.navigate('HomeScreen');
  };

  return (
    <View>
      <Text>Welcome to the Onboarding Screen!</Text>
<PlaidLinkScreen/>    
</View>
  );
};

export default OnboardingScreen;

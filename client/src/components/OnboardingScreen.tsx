// OnboardingScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, NativeTouchEvent } from 'react-native';
import {commonStyles}  from '../styles/globalStyles';

interface OnboardingScreenProps {
  navigation: any;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const handleContinue = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      
      <Text style={commonStyles.text}>Welcome to the Onboarding Screen!</Text>
      <Button title="Go Home"  color={commonStyles.button.backgroundColor} onPress={handleContinue}/>
</View>
  );
};

export default OnboardingScreen;

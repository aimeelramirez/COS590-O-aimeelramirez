// OnboardingScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

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
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
};

export default OnboardingScreen;

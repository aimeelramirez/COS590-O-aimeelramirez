// PlaidScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlaidLinkScreen from './PlaidLinkScreen';

const PlaidScreen: React.FC = () => {
  const [token, setToken] = React.useState('');

  const test = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/create_link_token', {
        method: 'POST',
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        return { paymentInitiation: false };
      }

      setToken(data.link_token);
    } catch (error) {
      console.error('Error fetching link token:', error);
    }
  };

  React.useEffect(() => {
    test();
    console.log(token)
  }, []);

  return (
    <View style={styles.container}>
      <PlaidLinkScreen token={token} />
      <Text style={{ color: 'black' }}>Test Plaid Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
});

export default PlaidScreen;

import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlaidLinkScreen from './PlaidLinkScreen';
import { LinkExit, LinkSuccess } from 'react-native-plaid-link-sdk';

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
    console.log(token);
  }, []);

  const handleSuccess = useCallback(
    async (success: LinkSuccess) => {
      console.log(success);

      try {
        const response = await fetch(`http://localhost:8000/api/exchange_public_token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ public_token: success.publicToken }),
        });

        if (!response.ok) {
          console.log('Error exchanging public token:', response.statusText);
        } else {
          console.log('Public token exchanged successfully');
        }
      } catch (err) {
        console.error('Error exchanging public token:', err);
      }
    },
    [] // Dependency array is empty as there are no dependencies
  );

  return (
    <View style={styles.container}>
      <PlaidLinkScreen
        token={token}
        publicToken
        onSuccess={handleSuccess}
        onExit={(response: LinkExit) => {
          console.log(response);
        }}
      />
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

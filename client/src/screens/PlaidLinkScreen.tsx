import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const PlaidLinkScreen = ({ token }) => {
  const [linkOpened, setLinkOpened] = useState(false);

  const handleOpenLink = () => {
    setLinkOpened(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PlaidLinkScreen {token}</Text>

      {!linkOpened && (
        <TouchableOpacity style={styles.button} onPress={handleOpenLink}>
          <Text style={styles.buttonText}>Open Link</Text>
        </TouchableOpacity>
      )}

      {linkOpened && (
        <WebView
        source={{
          uri: `https://cdn.plaid.com/link/v2/stable/link.html?key=42aceb2dfa35c163a919f307b56ff4&token=${token}`,
        }}
        style={{ flex: 1 }}
        onLoadStart={(event) => console.log('WebView loading started', event.nativeEvent)}
        onError={(event) => console.error('WebView error:', event.nativeEvent)}
        javaScriptEnabled={true}
        domStorageEnabled={true
        }useWebView2={true} 
      />
      
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'white', // Add background color
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10, // Add margin-top for separation
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PlaidLinkScreen;

import React, { useState, useRef, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinkSuccess } from 'react-native-plaid-link-sdk';
import { WebView, WebViewMessageEvent } from 'react-native-webview';


const SuccessView = ({ metadata }:any) => {
  const {
    institution,
    accounts,
    public_token,
    link_session_id,
  } = metadata;

  const accountInfo = accounts[0];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plaid Link Success!</Text>
      <Text style={styles.text}>Institution: {institution.name}</Text>
      <Text style={styles.text}>Account Name: {accountInfo.name}</Text>
      <Text style={styles.text}>Account Type: {accountInfo.type}</Text>
      <Text style={styles.text}>Masked Account Number: {accountInfo.mask}</Text>
      <Text style={styles.text}>Public Token: {public_token}</Text>
      <Text style={styles.text}>Link Session ID: {link_session_id}</Text>
    </View>
  );
};



const PlaidLinkScreen = ({ token, publicToken }: any) => {
  const [linkOpened, setLinkOpened] = useState(false);
  const [successMetadata, setSuccessMetadata] = useState<any>(null);
  const [stateData, setStateData] = useState<any>(null);

  const webViewRef = useRef<any>(null);

  const handleOpenLink = () => {
    setLinkOpened(true);
  };

  const onMessage = (event: WebViewMessageEvent) => {
    const data = event.nativeEvent.data;

    console.log('Received raw data:', data);

    try {
      const parsedData = JSON.parse(data);
      if (typeof parsedData === 'object' && parsedData !== null) {
        console.log('Parsed data:', parsedData);
        // Continue with your logic here
        if (parsedData.action === "plaid_link-undefined::connected") {
          const metadata = parsedData.metadata;
  
          console.log('Plaid Link opened:', metadata);
          // Handle the "OPEN" event as needed
  
          publicToken = metadata.public_token;
          console.log('Received public_token:', publicToken);
          setStateData(publicToken)
          setSuccessMetadata(metadata);
  
          const onsuccess = async (publicToken: any) => {
            try {
              const response = await fetch(`http://localhost:8000/api/exchange_public_token`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ public_token: publicToken }),
              });
              const result = await response.json();
              console.log(result);
  
              // Set the access token or handle other logic as needed
  
              if (!response.ok) {
                console.log('Error exchanging public token:', response.statusText);
              } else {
                console.log('Public token exchanged successfully', response);
              }
            } catch (err) {
              console.error('Error exchanging public token:', err);
            }
          }
  
          // Handle the public_token as needed (e.g., send it to your server)
          onsuccess(publicToken);
  
          // Optionally, you can stop loading the WebView after capturing the public_token
          if (webViewRef.current) {
            webViewRef.current.stopLoading();
          }
        }
      } else {
        console.error('Invalid JSON format:', data);
      }
  

    
    } catch (error) {
      if (data.includes('setImmedia')) {
        return;
      }
  
      console.error('Error parsing message data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PlaidLinkScreen {token}</Text>
      <Text style={styles.title}>Getting Public token after success:  {stateData}</Text>

      {!linkOpened && (
        <TouchableOpacity style={styles.button} onPress={handleOpenLink}>
          <Text style={styles.buttonText}>Open Link</Text>
        </TouchableOpacity>
      )}

      {linkOpened && !successMetadata && (
        <WebView
          ref={webViewRef}
          source={{
            uri: `https://cdn.plaid.com/link/v2/stable/link.html?key=42aceb2dfa35c163a919f307b56ff4&token=${token}`,
          }}
          style={{ flex: 1 }}
          onLoadStart={(event) => console.log('WebView loading started', event.nativeEvent)}
          onError={(event) => console.error('WebView error:', event.nativeEvent)}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          onMessage={onMessage}
          useWebView2={true}
        />
      )}

      {successMetadata && (
        <SuccessView metadata={successMetadata} />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'white',
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
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black',
  },
});

export default PlaidLinkScreen;

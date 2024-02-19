import React, { useEffect, useState } from 'react';
import { View, Text, Linking } from 'react-native';
import { Button, Note } from 'plaid-threads';

import { ErrorDataItem } from '../../../dataUtilities';

const errorPaths: { [key: string]: string } = {
  ITEM_ERROR: 'item',
  INSTITUTION_ERROR: 'institution',
  API_ERROR: 'api',
  ASSET_REPORT_ERROR: 'assets',
  BANK_TRANSFER_ERROR: 'bank-transfers',
  INVALID_INPUT: 'invalid-input',
  INVALID_REQUEST: 'invalid-request',
  INVALID_RESULT: 'invalid-result',
  OAUTH_ERROR: 'oauth',
  PAYMENT_ERROR: 'payment',
  RATE_LIMIT_EXCEEDED: 'rate-limit-exceeded',
  RECAPTCHA_ERROR: 'recaptcha',
  SANDBOX_ERROR: 'sandbox',
};

const Error = ({ error }: { error: ErrorDataItem }) => {
  const [path, setPath] = useState('');

  useEffect(() => {
    const errorType = error.error_type!;
    const errorPath = errorPaths[errorType];

    setPath(
      `https://plaid.com/docs/errors/${errorPath}/#${error.error_code?.toLowerCase()}`
    );
  }, [error]);

  return (
    <>
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#000', width: '90%' }} />
      <View style={{ flexDirection: 'row', width: '100%', fontSize: 14, marginTop: 16 }}>
        <Note error style={{ marginHorizontal: 16 }}>
          {error.status_code ? error.status_code : 'error'}
        </Note>
        <View style={{ margin: 16, flex: 1 }}>
          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontWeight: 'bold' }}>Error code: </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontFamily: 'monospace', letterSpacing: 0.25 }}>
                {error.error_code}
              </Text>
              <View
                style={{
                  position: 'absolute',
                  top: '50%',
                  height: 6,
                  width: '100%',
                  backgroundColor: '#FADDD5', // Assuming $red200 is a light pink color
                  zIndex: -1,
                }}
              />
            </View>
          </View>
          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontWeight: 'bold' }}>Type: </Text>
            <Text style={{ fontFamily: 'monospace', lineHeight: 20 }}>
              {error.error_type}
            </Text>
          </View>
          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontWeight: 'bold' }}>Message: </Text>
            <Text style={{ lineHeight: 20 }}>
              {error.display_message == null ? error.error_message : error.display_message}
            </Text>
          </View>
        </View>
        <Button
          small
          wide
          style={{ margin: 16, marginLeft: 3 * 16, width: '70%' }}
          onPress={() => Linking.openURL(path)}
        >
          Learn more
        </Button>
      </View>
    </>
  );
};

export default Error;

import React, { useEffect, useContext } from 'react';
import { PlaidLink, usePlaidEmitter } from 'react-native-plaid-link-sdk';
import { TouchableOpacity, Text } from 'react-native';

import Context from '../../Context';

const Link = () => {
  const { linkToken, isPaymentInitiation, dispatch } = useContext(Context);

  const onSuccess = (successPayload:any) => {
    const { public_token } = successPayload;

    // If the access_token is needed, send public_token to server
    const exchangePublicTokenForAccessToken = async () => {
      try {
        const response = await fetch('/api/set_access_token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: `public_token=${public_token}`,
        });

        if (!response.ok) {
          dispatch({
            type: 'SET_STATE',
            state: {
              itemId: 'no item_id retrieved',
              accessToken: 'no access_token retrieved',
              isItemAccess: false,
            },
          });
          return;
        }

        const data = await response.json();

        dispatch({
          type: 'SET_STATE',
          state: {
            itemId: data.item_id,
            accessToken: data.access_token,
            isItemAccess: true,
          },
        });
      } catch (error) {
        console.error('Error exchanging public_token for access_token:', error);
      }
    };

    // 'payment_initiation' products do not require the public_token to be exchanged for an access_token.
    if (!isPaymentInitiation) {
      exchangePublicTokenForAccessToken();
    }

    dispatch({ type: 'SET_STATE', state: { linkSuccess: true } });
  };

  const config = {
    token: linkToken,
    onSuccess,
  };

  const { open, ready } = usePlaidEmitter(config);

  useEffect(() => {
    if (ready) {
      open();
    }
  }, [ready, open]);

  return (
    <TouchableOpacity onPress={() => open()} disabled={!ready}>
      <Text>
        Launch Link
      </Text>
    </TouchableOpacity>
  );
};

Link.displayName = 'Link';

export default Link;

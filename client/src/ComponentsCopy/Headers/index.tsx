import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import Callout from 'plaid-threads/Callout';
import Button from 'plaid-threads/Button';
import InlineLink from 'plaid-threads/InlineLink';

import Link from '../Link';
import Context from '../../Context';

const Header = () => {
  const {
    itemId,
    accessToken,
    linkToken,
    linkSuccess,
    isItemAccess,
    backend,
    linkTokenError,
    isPaymentInitiation,
  } = useContext(Context);

  return (
    <View style={styles.grid}>
      <Text style={styles.title}>Plaid Quickstart</Text>

      {!linkSuccess ? (
        <>
          <Text style={styles.subtitle}>
            A sample end-to-end integration with Plaid
          </Text>
          <Text style={styles.introPar}>
            The Plaid flow begins when your user wants to connect their bank
            account to your app. Simulate this by clicking the button below to
            launch Link - the client-side component that your users will
            interact with to link their accounts to Plaid and allow you to
            access their accounts via the Plaid API.
          </Text>
          {/* message if backend is not running and there is no link token */}
          {!backend ? (
            <Callout warning>
              Unable to fetch link_token: please make sure your backend server
              is running and that your .env file has been configured with your
              PLAID_CLIENT_ID and PLAID_SECRET.
            </Callout>
          ) : /* message if backend is running and there is no link token */
          linkToken == null && backend ? (
            <Callout warning>
              <View>
                Unable to fetch link_token: please make sure your backend server
                is running and that your .env file has been configured
                correctly.
              </View>
              <View>
                If you are on a Windows machine, please ensure that you have
                cloned the repo with{' '}
                <InlineLink
                  href="https://github.com/plaid/quickstart#special-instructions-for-windows"
                  target="_blank"
                >
                  symlinks turned on.
                </InlineLink>{' '}
                You can also try checking your{' '}
                <InlineLink
                  href="https://dashboard.plaid.com/activity/logs"
                  target="_blank"
                >
                  activity log
                </InlineLink>{' '}
                on your Plaid dashboard.
              </View>
              <View>Error Code: {linkTokenError.error_code}</View>
              <View>
                Error Type: {linkTokenError.error_type}{' '}
              </View>
              <View>Error Message: {linkTokenError.error_message}</View>
            </Callout>
          ) : linkToken === '' ? (
            <View style={styles.linkButton}>
              <Button large disabled>
                Loading...
              </Button>
            </View>
          ) : (
            <View style={styles.linkButton}>
              <Link />
            </View>
          )}
        </>
      ) : (
        <>
          {isPaymentInitiation ? (
            <>
              <Text style={styles.subtitle}>
                Congrats! Your payment is now confirmed.
                {'\n\n'}
                <Callout>
                  You can see information about all your payments in the{' '}
                  <InlineLink
                    href="https://dashboard.plaid.com/activity/payments"
                    target="_blank"
                  >
                    Payments Dashboard
                  </InlineLink>
                  .
                </Callout>
              </Text>
              <Text style={styles.requests}>
                Now that the 'payment_id' is stored on your server, you can use
                it to access payment information:
              </Text>
            </>
          ) : /* If not using the payment_initiation product, show the item_id and access_token information */ (
            <>
              {isItemAccess ? (
                <Text style={styles.subtitle}>
                  Congrats! By linking an account, you have created an{' '}
                  <InlineLink
                    href="http://plaid.com/docs/quickstart/glossary/#item"
                    target="_blank"
                  >
                    Item
                  </InlineLink>
                  .
                </Text>
              ) : (
                <Text style={styles.subtitle}>
                  <Callout warning>
                    Unable to create an item. Please check your backend server
                  </Callout>
                </Text>
              )}
              <View style={styles.itemAccessContainer}>
                <View style={styles.itemAccessRow}>
                  <Text style={styles.idName}>item_id</Text>
                  <Text style={styles.tokenText}>{itemId}</Text>
                </View>

                <View style={styles.itemAccessRow}>
                  <Text style={styles.idName}>access_token</Text>
                  <Text style={styles.tokenText}>{accessToken}</Text>
                </View>
              </View>
              {isItemAccess && (
                <Text style={styles.requests}>
                  Now that you have an access_token, you can make all of the
                  following requests:
                </Text>
              )}
            </>
          )}
        </>
      )}
    </View>
  );
};

Header.displayName = 'Header';

const styles = {
  grid: {
    marginBottom: 2 * 16, // Assuming $unit is 16
  },
  title: {
    marginTop: 9 * 16, // Assuming $unit is 16
    marginBottom: 0,
    height: 6 * 16, // Assuming $unit is 16
  },
  subtitle: {
    marginTop: 0,
    marginBottom: 3 * 16, // Assuming $unit is 16
  },
  introPar: {
    fontSize: 2 * 16, // Assuming $unit is 16
    margin: 2 * 16, // Assuming $unit is 16
  },
  linkButton: {
    marginTop: 3 * 16, // Assuming $unit is 16
  },
  itemAccessContainer: {
    borderRadius: 2,
  },
  itemAccessRow: {
    margin: 0,
  },
  idName: {
    flex: 1,// You can replace with an appropriate monospace font // Assuming $black1000 is a color variable
  },
  tokenText: {
    flex: 5,
    fontFamily: 'monospace', // You can replace with an appropriate monospace font
  },
  requests: {
    fontSize: 2, // Assuming $unit is 16
  },
};

export default Header;

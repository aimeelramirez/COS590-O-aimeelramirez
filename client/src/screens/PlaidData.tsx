// PlaidData.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PlaidDataProps {
  plaidData: {
    accounts: Array<{
      account_id: string;
      balances: {
        available: number;
        current: number;
        iso_currency_code: string;
        limit: null | number;
        unofficial_currency_code: null | string;
      };
      mask: string;
      name: string;
      official_name: string;
      persistent_account_id: string;
      subtype: string;
      type: string;
    }>;
    item: {
      available_products: string[];
      billed_products: string[];
      consent_expiration_time: null | string;
      error: null | string;
      institution_id: string;
      item_id: string;
      products: string[];
      update_type: string;
      webhook: string;
    };
    numbers: {
      ach: Array<{
        account: string;
        account_id: string;
        routing: string;
        wire_routing: string;
      }>;
      bacs: any[]; // You might want to define the correct type for these arrays
      eft: any[];
      international: any[];
    };
    request_id: string;
  };
}

const PlaidData: React.FC<PlaidDataProps> = ({ plaidData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Accounts:</Text>
      {plaidData.accounts.map((account) => (
        <View key={account.account_id} style={styles.accountContainer}>
            {/* todo: get ids to  https://plaid.com/docs/api/products/transfer/#transferauthorizationcreate*/}
         <Text style={styles.accountName}>{account.official_name}</Text>
         <Text style={styles.accountSubtype}>id: {account.account_id}</Text>

          <Text style={styles.accountType}>Type: {account.type}</Text>
          <Text style={styles.accountSubtype}>Subtype: {account.subtype}</Text>
          <Text style={styles.accountBalance}>Current Balance: {account.balances.current} {account.balances.iso_currency_code}</Text>
        </View>
      ))}

      <Text style={styles.sectionHeader}>Item:</Text>
      <View style={styles.itemContainer}>
        <Text style={styles.institutionId}>Institution ID: {plaidData.item.institution_id}</Text>
        <Text style={styles.itemId}>Item ID: {plaidData.item.item_id}</Text>
      </View>

      <Text style={styles.sectionHeader}>Numbers:</Text>
      <View style={styles.numbersContainer}>
        <Text style={styles.achAccount}>ACH Account: {plaidData.numbers.ach[0].account}</Text>
        <Text style={styles.achRouting}>ACH Routing: {plaidData.numbers.ach[0].routing}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  accountContainer: {
    marginBottom: 15,
  },
  accountName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  accountType: {
    fontSize: 14,
    color: '#666',
  },
  accountSubtype: {
    fontSize: 14,
    color: '#666',
  },
  accountBalance: {
    fontSize: 14,
    color: '#333',
  },
  itemContainer: {
    marginBottom: 15,
  },
  institutionId: {
    fontSize: 14,
    color: '#333',
  },
  itemId: {
    fontSize: 14,
    color: '#333',
  },
  numbersContainer: {
    marginBottom: 15,
  },
  achAccount: {
    fontSize: 14,
    color: '#333',
  },
  achRouting: {
    fontSize: 14,
    color: '#333',
  },
});

export default PlaidData;

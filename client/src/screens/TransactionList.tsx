// TransactionList.tsx
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

interface TransactionListProps {
  transactions: Array<{
    account_id: string;
    amount: number;
    date: string;
    name: string;
    category: string[] | null;
    transaction_type: string;
    personal_finance_category_icon_url: string;
  }>;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => { 
console.log(transactions)
  const renderTransactionItem = ({ item }: { item: any }) => (
    <View style={styles.transactionItem}>
      <Image source={{ uri: item.personal_finance_category_icon_url }} style={styles.categoryIcon} />
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionAmount}>{item.amount} USD</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.transaction_id}
      renderItem={renderTransactionItem}
    />
  );
};

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  transactionAmount: {
    fontSize: 14,
    color: '#333',
  },
  transactionDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default TransactionList;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  children?: React.ReactNode | Array<React.ReactNode>;
  productType: string;
}

const TypeContainer: React.FC<Props> = (props) => (
  <View style={styles.container}>
    <Text style={styles.header}>{props.productType}</Text>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000', // Replace with your desired color or use a variable
    borderRadius: 2,
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 0,
    marginBottom: 3 * 16, // Replace with your desired value or use a variable
  },
  header: {
    width: '100%',
    borderBottomWidth: 0,
    height: 13 * 16, // Replace with your desired value or use a variable
    fontWeight: '800',
    paddingTop: 5 * 16, // Replace with your desired value or use a variable
    paddingLeft: 5 * 16, // Replace with your desired value or use a variable
    marginTop: 0,
    marginBottom: 0,
  },
});

TypeContainer.displayName = 'TypeContainer';

export default TypeContainer;

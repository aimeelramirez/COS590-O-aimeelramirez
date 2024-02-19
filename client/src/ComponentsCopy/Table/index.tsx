import React from "react";
import { View, Text, ScrollView } from "react-native";
import { DataItem, Categories } from "./../../../dataUtilities";
import Identity from "./Identity";




// Assuming you have styles from the plaid-threads library
// Replace this with the actual plaid-threads styles you want to use
const plaidThreadsStyles = {
  headerField: {
    // Define your styles for headerField
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 1.2,
    paddingBottom: 1,
    paddingLeft: 1,
  },
  dataRows: {
    height: 6,
    borderBottomWidth: 1,
    paddingTop: 2,
    paddingLeft: 1,
  },
  dataField: {
    maxWidth: 25
  },
};

interface Props {
  data: Array<DataItem>;
  categories: Array<Categories>;
  isIdentity: boolean;
}

const Table = (props: Props) => {
  const maxRows = 15;

  const headers = props.categories.map((category, index) => (
    <Text key={index} style={plaidThreadsStyles.headerField}>
      {category.title}
    </Text>
  ));

  const rows = props.data
    .map((item: DataItem | any, index) => (
      <View key={index} style={plaidThreadsStyles.dataRows}>
        {props.categories.map((category: Categories, index) => (
          <Text key={index} style={plaidThreadsStyles.dataField}>
            {item[category.field]}
          </Text>
        ))}
      </View>
    ))
    .slice(0, maxRows);

  return props.isIdentity ? (
    <Identity data={props.data} categories={props.categories} />
  ) : (
    <ScrollView horizontal>
      <View>
        <View style={plaidThreadsStyles.dataRows}>{headers}</View>
        {rows}
      </View>
    </ScrollView>
  );
};

Table.displayName = "Table";

export default Table;

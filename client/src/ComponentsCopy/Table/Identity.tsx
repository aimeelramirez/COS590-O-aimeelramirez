import React from "react";

import { DataItem, Categories } from "./../../../dataUtilities";

import { View, Text, ScrollView } from "react-native";

interface Props {
  data: Array<DataItem>;
  categories: Array<Categories>;
}

const Identity = (props: Props) => {
  const identityHeaders = props.categories.map((category, index) => (
    <Text key={index} style={styles.identityHeader}>
      {category.title}
    </Text>
  ));

  const identityRows = props.data.map((item: DataItem | any, index) => (
    <View key={index} style={styles.identityDataRow}>
      {props.categories.map((category: Categories, index) => (
        <Text key={index} style={styles.identityDataField}>
          {item[category.field]}
        </Text>
      ))}
    </View>
  ));

  return (
    <ScrollView horizontal>
      <View style={styles.identityTable}>
        <View style={styles.identityHeadersRow}>{identityHeaders}</View>
        <View style={styles.identityDataBody}>{identityRows}</View>
      </View>
    </ScrollView>
  );
};

Identity.displayName = "Identity";

const styles = {
  identityTable: {
  },
  identityHeadersRow: {
  },
  identityHeader: {
    padding: 16,
  },
  identityDataBody: {
  },
  identityDataRow: {
  },
  identityDataField: {
    flex: 1,
    padding: 16,
    borderBottomWidth: 1,
  },
};

export default Identity;

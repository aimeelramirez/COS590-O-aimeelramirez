import React, { useState } from 'react';
import { View, Text, Button as RNButton, ViewStyle, TextStyle } from 'react-native';

import Table from '../Table';
import Error from '../Error';
import { DataItem, Categories, ErrorDataItem, Data } from '../../../dataUtilities';

interface Styles {
  endpointContainer: ViewStyle;
  post: TextStyle;
  endpointContents: ViewStyle;
  endpointHeader: ViewStyle;
  endpointName: TextStyle;
  schema: TextStyle;
  endpointDescription: TextStyle;
  buttonsContainer: ViewStyle;
  sendRequest: ViewStyle;
  pdf: ViewStyle;
}

const styles: Styles = {
  endpointContainer: {
    flexDirection: 'row',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
  post: {
    margin: 16,
  },
  endpointContents: {
    margin: 16,
  },
  endpointHeader: {
    marginBottom: 8,
  },
  endpointName: {
    fontWeight: 'bold',
    fontSize: 28,
    paddingRight: 8,
  },
  schema: {
    fontSize: 28,
    fontFamily: 'monospace',
    // No direct equivalent for letterSpacing in React Native
  },
  endpointDescription: {
    fontSize: 14,
    lineHeight: 32,
  },
  buttonsContainer: {
    flexDirection: 'column',
  },
  sendRequest: {
    margin: 16,
    width: '70%',
  },
  pdf: {
    margin: 16,
    width: '70%',
  },
};

interface Props {
  endpoint: string;
  name?: string;
  categories: Array<Categories>;
  schema: string;
  description: string;
  transformData: (arg: any) => Array<DataItem>;
}

const Endpoint = (props: Props) => {
  const [showTable, setShowTable] = useState(false);
  const [transformedData, setTransformedData] = useState<Data>([]);
  const [pdf, setPdf] = useState<string | null>(null);
  const [error, setError] = useState<ErrorDataItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const response = await fetch(`/api/${props.endpoint}`, { method: 'GET' });
    const data = await response.json();
    if (data.error != null) {
      setError(data.error);
      setIsLoading(false);
      return;
    }
    setTransformedData(props.transformData(data));
    if (data.pdf != null) {
      setPdf(data.pdf);
    }
    setShowTable(true);
    setIsLoading(false);
  };

  return (
    <>
      <View style={styles.endpointContainer}>
        <Text style={styles.post}>POST</Text>
        <View style={styles.endpointContents}>
          <View style={styles.endpointHeader}>
            {props.name != null && (
              <Text style={styles.endpointName}>{props.name}</Text>
            )}
            <Text style={styles.schema}>{props.schema}</Text>
          </View>
          <Text style={styles.endpointDescription}>{props.description}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <RNButton
            title={isLoading ? 'Loading...' : 'Send request'}
            onPress={getData}
            disabled={isLoading}
          />
          {pdf != null && (
            <RNButton
              title="Download PDF"
              onPress={() => {
                // Handle PDF download logic here
              }}
            />
          )}
        </View>
      </View>
      {showTable && (
        <Table
          categories={props.categories}
          data={transformedData}
          isIdentity={props.endpoint === 'identity'}
        />
      )}
      {error != null && <Error error={error} />}
    </>
  );
};

Endpoint.displayName = 'Endpoint';

export default Endpoint;

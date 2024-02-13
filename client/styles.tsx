import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Theme {
  colors: {
    charcoal: string;
    azureweb: string;
    persiangreen: string;
    chamoisee: string;
    blush: string;
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
  fontSizes: {
    small: number;
    medium: number;
    large: number;
  };
  fontWeights: {
    regular: string;
    bold: string;
  };
  spacing: {
    small: number;
    medium: number;
    large: number;
  };
}

const theme: Theme = {
  colors: {
    charcoal: '#353a47ff',
    azureweb: '#e6fafcff',
    persiangreen: '#1b998bff',
    chamoisee: '#a7754dff',
    blush: '#e54f6dff',
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#ecf0f1',
    text: '#2c3e50',
    accent: '#e74c3c',
  },
  fontSizes: {
    small: 14,
    medium: 16,
    large: 18,
  },
  fontWeights: {
    regular: '300',
    bold: '700',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
};

interface GlobalStyles {
  container: ViewStyle;
  text: TextStyle;
  heading: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
}

const globalStyles: GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
  },
  text: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.charcoal,
    fontWeight: theme.fontWeights.regular as 'normal',
  },
  heading: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.text,
    fontWeight: theme.fontWeights.bold as 'bold',
    marginBottom: theme.spacing.medium,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: theme.fontSizes.medium,
    fontWeight: theme.fontWeights.bold as 'bold',
  },
  body: {
    flex: 1,
    paddingHorizontal: 32,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  baseText: {
    fontSize: 16,
    marginTop: 8,
    color: '#4B4B4B',
    textAlign: 'left',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 36,
    marginHorizontal: 10,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 32,
    paddingBottom: 32,
  },
  buttonContainer: {
    elevation: 4,
    backgroundColor: '#000',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

export {theme, globalStyles};

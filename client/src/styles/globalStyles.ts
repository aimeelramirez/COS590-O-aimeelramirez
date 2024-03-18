// globalStyles.ts
export const colors = {
    primary: '#3498db',
    secondary: '#2ecc71',
    text: '#333',
  };
  
  export const fonts = {
    regular: 'Arial, sans-serif',
    bold: 'Arial-BoldMT, sans-serif',
  };
  
  export const commonStyles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary,
    },
    text: {
      color: colors.text,
      fontFamily: fonts.regular,
      fontSize: 16,
    },
    button: {
      elevation: 8,
      backgroundColor: '#2196F3',
      width: '90%',
      margin: 4,
      paddingVertical: 4,
      fontSize: 16,
      textAlign: 'center',
      color: 'white',
      borderRadius: 4,
      alignSelf: 'center',
      textTransform: 'uppercase',
      overflow: 'hidden',
    },
    input: {
      height: 40,
      margin: 12,
      width: '90%',
      alignSelf: 'center',
      borderWidth: 1,
      padding: 10,
      borderColor: 'black',
    },
    embedded: {
      width: '95%',
      alignSelf: 'center',
      height: 360,
    },
  };
  
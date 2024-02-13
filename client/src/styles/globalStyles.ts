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
  };
  
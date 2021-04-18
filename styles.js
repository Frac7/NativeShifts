import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginVertical: 48,
    },
    divider: {
      borderBottomColor: 'gainsboro',
      borderBottomWidth: 1,
      width: '75%',
      alignItems : 'center',
    },
    h1: {
      fontSize: 36,
      textAlign: 'center'
    },
    h2: {
      fontSize: 24,
      textAlign: 'center'
    },
    h3: {
      fontSize: 16,
      textAlign: 'center'
    },
    section: {
      margin: 16,
    },
    subsection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 4
    },
    badge: {
      backgroundColor: 'firebrick',
      color: 'white',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4
    }
  });
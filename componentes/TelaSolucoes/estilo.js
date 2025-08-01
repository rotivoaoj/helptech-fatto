import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 0.95,
      paddingTop: 10,
      alignItems: 'center',
      backgroundColor: '#f8fafc',
    },
    titulo: {
      fontSize: 16,
      fontWeight: 'bold',
      color: "#ffffff",
      marginBottom: 20,
      backgroundColor: '#cf0b0b',
      padding: 10,
      borderRadius: 12,
    },
    card: {
      backgroundColor: '#c8c8c8',
      borderRadius: 16,
      padding: 20,
      marginHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    solucao: {
      fontSize: 16,
      color: '#1e293b',
      textAlign: 'center',
    },
  });
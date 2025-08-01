import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#ffffff',
    },
    titulo: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#ffffff',
      textAlign: 'center',
      backgroundColor: '#cf0b0b',
      padding: 10,
      borderRadius: 12,
    },
    card: {
      backgroundColor: '#979797',
      padding: 20,
      borderRadius: 16,
      marginBottom: 16,
    },
    problema: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    },
    solucao: {
      fontSize: 14,
      color: '#475569',
      marginTop: 6,
    },
    anotacaoTitulo: {
      fontSize: 16,
      fontWeight: '600',
      marginTop: 20,
      marginBottom: 8,
      color: '#1e293b',
    },
    input: {
      backgroundColor: '#fff',
      borderColor: '#cbd5e1',
      borderWidth: 1,
      borderRadius: 8,
      padding: 12,
      minHeight: 100,
      textAlignVertical: 'top',
    },
  });
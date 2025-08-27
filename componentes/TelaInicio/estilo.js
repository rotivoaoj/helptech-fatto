import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 20,
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#1e293b',
      marginBottom: 20,
      textAlign: 'center',
    },
    texto: {
      fontSize: 18,
      fontWeight: 'normal',
      color: '#1e293b',
    },
    subtitulo: {
      fontSize: 16,
      color: '#979797',
      marginTop: 20,
      textAlign: 'center',
      justifyContent: 'flex-end',
    },
    logo: {
      width: 200,
      height: 60,
      resizeMode: 'contain',
    },
    sup: {
      width: 200,
      height: 180,
      resizeMode: 'contain',
      opacity: 0.3,
      marginTop: 60,
    },
    botao_cat: {
      backgroundColor: '#c20000',
      paddingVertical: 14,
      borderRadius: 10,
      width: '60%',
      alignItems: 'center',
      marginTop: 10,
    },
    botao_sac: {
      backgroundColor: '#c20000',
      paddingVertical: 14,
      borderRadius: 10,
      width: '60%',
      alignItems: 'center',
      marginTop: 10,
    },
    botao_tools: {
    backgroundColor: '#c00',
    padding: 15,
    borderRadius: 10,
    width: '60%',
    alignItems: 'center',
    marginTop: 47,
    },
    textoBotao: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
      fontFamily: 'Julius-Sans-One',
      textAlign: 'center',
    },
    fundo: {
      flex: 1,
    },
    suporte: {
      marginTop: 10,
      color: '#979797',
    },
    botao_rot: {
      backgroundColor: '#c20000',
      padding: 12,
      borderRadius: 8,
      marginTop: 10,
      alignItems: 'center',
      width: '60%',
    },
    logoff: {
      flexDirection: 'row', 
      justifyContent: 'flex-end', 
      alignItems: 'center', 
      padding: 10,
    }
});
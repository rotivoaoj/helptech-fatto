import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    padding: 20,
  },
  img: {
    width: 200,
    height: 200,
    marginTop: 90,
    marginBottom: 25,
    alignItems: 'center',
    resizeMode: 'contain',
  },
  titulo_preto: {
    color: '#000',
    fontWeight: 'normal',
    fontSize: 26,
    fontFamily: 'Montserrat-Bold',
  },
  titulo_verm: {
    color: '#ff3535',
    fontWeight: 'bold',
    fontSize: 26,
    fontFamily: 'Montserrat-Bold',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#b0b0b0',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    marginBottom: 10,
  },
  senhaContainer: {
    width: '80%',
    height: 50,
    backgroundColor: '#b0b0b0',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputSenha: {
    flex: 1,
    color: '#fff',
  },
  iconeOlho: {
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: '#c20000',
    paddingVertical: 14,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

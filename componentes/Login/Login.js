import React, { useState } from 'react';
import { Text, View, TextInput, Image, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import estilo from './estilo';
import Icon from '../../assets/helptech-icon.png';
import Logo from '../../assets/pimatec-solutions.png';
import { useFonts } from 'expo-font';


export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Roboto-Light': require('../../assets/fonts/Roboto-Light.ttf'),
  });

  const realizarLogin = async () => {
  try {
    const resposta = await fetch('http://192.168.15.8/helptech/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.trim(), senha: senha.trim() }),
    });

    const json = await resposta.json();

    if (json.status === 'sucesso') {
      navigation.navigate('Inicio', { nomeUsuario: json.nome });
    } else {
      Alert.alert('Erro', json.mensagem);
    }
  } catch (error) {
    Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
  }
};

  return (
    <View style={estilo.container}>
      <Image source={Icon} style={estilo.img} />

      <TextInput
        style={estilo.input}
        placeholder="Email"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <View style={estilo.senhaContainer}>
        <TextInput
          style={estilo.inputSenha}
          placeholder="Senha"
          placeholderTextColor="#fff"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!senhaVisivel}
        />
        <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
          <Feather
            name={senhaVisivel ? 'eye-off' : 'eye'}
            size={20}
            color="#fff"
            style={estilo.iconeOlho}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={estilo.botao} onPress={realizarLogin}>
        <Text style={estilo.textoBotao}>Entrar</Text>
      </TouchableOpacity>

    </View>
  );
}
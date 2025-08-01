import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, Alert, StatusBar} from 'react-native';
import { Feather } from '@expo/vector-icons';

import estilo from './estilo';

export default function Inicio({navigation, route}) {
  const { nomeUsuario } = route.params;
  

  return (
    
      <View style={estilo.container}>

      <Text style={estilo.titulo}>BEM-VINDO {nomeUsuario}! </Text>
      <Text style={estilo.texto}>Esse é o aplicativo de suporte técnico da Fatto Locker.</Text>


      <Text style={estilo.subtitulo}>Ir para o Menu Categorias</Text>
        
      <TouchableOpacity style={estilo.botao_cat} onPress={() => navigation.navigate('Categorias')}>
        <Text style={estilo.textoBotao}>Categorias</Text>
      </TouchableOpacity>

      <Text style={estilo.subtitulo}>Ver lista de Roteadores</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Roteadores')}
        style={estilo.botao_rot}>
      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Ver Roteadores</Text>
      </TouchableOpacity>
        
      <Image
        source={require('../../assets/sup.png')}
        style={estilo.sup}
      />

      <Text style={estilo.suporte}>Ainda precisa de ajuda? Clique aqui</Text>

      <TouchableOpacity style={estilo.botao_sac}>
        <Text style={estilo.textoBotao}>Contatar Suporte</Text>
      </TouchableOpacity>

    </View>
    
  );
}
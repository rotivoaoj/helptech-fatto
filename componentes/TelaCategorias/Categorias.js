import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import estilo from './estilo';

const categorias = [
  'ESTRUTURA',
  'ELÉTRICA',
  'WIFI',
  'SISTEMA(ANDROID, SOFTWARE)',
  'HARDWARE',
  'ELETRÔNICA',
];

export default function Categorias({ navigation }) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Categorias de Manutenção</Text>

      <ScrollView contentContainerStyle={estilo.scroll}>
        {categorias.map((categoria, index) => (
          <TouchableOpacity
            key={index}
            style={estilo.botao}
            onPress={() => navigation.navigate('Problemas', { categoria })}
          >
            <Text style={estilo.textoBotao}>{categoria}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
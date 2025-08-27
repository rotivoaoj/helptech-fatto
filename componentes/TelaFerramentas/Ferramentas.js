import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';

import estilo from './estilo';

const ferramentas = [
  { nome: 'Multímetro', imagem: require('../../assets/ferramentas/multimetro.png'), uso: 'Mede tensão, corrente e resistência elétrica.' },
  { nome: 'Chave Philips (Grande)', imagem: require('../../assets/ferramentas/chave-philips.jpg'), uso: 'Aperta ou solta parafusos com cabeça cruzada grandes.' },
  /*{ nome: 'Chave Philips (Pequena)', imagem: require('../../assets/ferramentas/chave-philips.jpg'), uso: 'Aperta ou solta parafusos com cabeça cruzada pequenos.' },*/
  { nome: 'Chave de Fenda (Grande)', imagem: require('../../assets/ferramentas/chave-fenda.png'), uso: 'Aperta ou solta parafusos de fenda grandes.' },
  /*{ nome: 'Chave de Fenda (Pequena)', imagem: require('../../assets/ferramentas/chave-fenda.jpg'), uso: 'Aperta ou solta parafusos de fenda pequenos.' },*/
  { nome: 'Alicate de Corte (Grande)', imagem: require('../../assets/ferramentas/alicate-de-corte-g.png'), uso: 'Corta fios e cabos grossos.' },
  { nome: 'Alicate de Corte (Pequeno)', imagem: require('../../assets/ferramentas/alicate-de-corte-p.png'), uso: 'Corta fios e cabos finos.' },
  /*{ nome: 'Alicate Universal', imagem: require('../../assets/ferramentas/alicate_universal.jpg'), uso: 'Aperta, corta e dobra fios.' },*/
  { nome: 'Alicate Decapador', imagem: require('../../assets/ferramentas/alicate-decapador.png'), uso: 'Remove a capa isolante de fios elétricos.' },
  { nome: 'Alicate Crimpador RJ45', imagem: require('../../assets/ferramentas/alicate-crimpador-rj45.png'), uso: 'Conecta conectores RJ45 em cabos de rede.' },
  { nome: 'Estilete', imagem: require('../../assets/ferramentas/estilete.png'), uso: 'Corta materiais diversos com precisão.' },
  { nome: 'Martelo de Borracha', imagem: require('../../assets/ferramentas/martelo-borracha.png'), uso: 'Ajusta peças sem danificar a superfície.' },
];

export default function Ferramentas() {
  return (
    <ScrollView contentContainerStyle={estilo.container}>
      {ferramentas.map((item, index) => (
        <View key={index} style={estilo.card}>
          <Image source={item.imagem} style={estilo.imagem} resizeMode="contain" />
          <Text style={estilo.nome}>{item.nome}</Text>
          <Text style={estilo.uso}>{item.uso}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

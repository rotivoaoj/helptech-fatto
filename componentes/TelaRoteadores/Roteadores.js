import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import estilo from './estilo';

export default function Roteadores() {
  const [roteadores, setRoteadores] = useState([]);
  const [carregando, setCarregando] = useState(true);

 useEffect(() => {
  async function carregarDados() {
    try {
      const resposta = await fetch('http://192.168.15.8/helptech/listar_roteadores.php');
      const dados = await resposta.json();
      setRoteadores(dados.dados); // <- aqui é o ajuste principal
    } catch (erro) {
      console.error('Erro ao buscar roteadores:', erro);
    } finally {
      setCarregando(false);
    }
  }

  carregarDados();
}, []);

  if (carregando) {
    return (
      <View style={estilo.container}>
        <ActivityIndicator size="large" color="#c00" />
      </View>
    );
  }

  return (
    <FlatList
      data={roteadores}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={estilo.lista}
      renderItem={({ item }) => (
        <View style={estilo.item}>
          <Text style={estilo.titulo}>{item.cliente}</Text>
          <Text style={estilo.campo}>Wifi: {item.nome_wifi}</Text>
          <Text style={estilo.campo}>Senha: {item.senha}</Text>
          <Text style={estilo.campo}>Senha Admin: {item.senha_admin}</Text>
          <Text style={estilo.campo}>Tipo: {item.tipo}</Text>
          <Text style={estilo.campo}>Modelo: {item.modelo}</Text>
          <Text style={estilo.campo}>Situação: {item.situacao}</Text>
        </View>
      )}
    />
  );
}
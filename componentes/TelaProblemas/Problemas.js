import React, { useState }from 'react';
import { View, Text, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import estilo  from './estilo';

const problemasPorCategoria = {
  ESTRUTURA: ['Porta desalinhada', 'Armário balançando', 'Porta emperrada', 'Porta não mantém fechada'],
  ELÉTRICA: ['Porta faz o som de disparo mas não abre', 'Touch piscando a tela', 'Fonte não acende o LED'],
  WIFI: ['Sem internet', 'Tablet travando', 'Locker Off-line', 'Sem Roteamento'],
  "SISTEMA(ANDROID, SOFTWARE)": ['Porta bloqueada', 'Teclado virtual não aparece', 'Locker Off-line', 'AnyDesk não conecta', 'Tela de início não é o Software'],
  HARDWARE: ['Touch travado', 'Roteador não liga', 'Caixa de som no volume baixo/sem som', 'Placa não liga', 'Placa não conecta no Wi-Fi'],
  ELETRÔNICA: ['Porta não abre','Porta não faz som de disparo e nem abre'],
};

export default function Problemas({route}) {

  const navigation = useNavigation();
  const { categoria } = route.params;
  const problemas = problemasPorCategoria[categoria] || [];
  const [anotacoes, setAnotacoes] = useState('');

  const salvarAnotacoes = () => {
    if (anotacoes.trim() === '') {
      Alert.alert('Aviso', 'Digite alguma anotação antes de salvar.');
      return;
    }

    Alert.alert('Sucesso', 'Anotações salvas com sucesso!');
    setAnotacoes('');
  };

  return (
    <ScrollView contentContainerStyle={estilo.container}>
      <Text style={estilo.titulo}>Problemas em: {categoria}</Text>

      {problemas.map((problema, index) => (
        <TouchableOpacity
          key={index}
          style={estilo.card}
          onPress={() => navigation.navigate('Solucoes', { problema })}
        >
          <Text style={estilo.problema}>{problema}</Text>
        </TouchableOpacity>
      ))}

    <TextInput
        style={estilo.input}
        multiline
        placeholder="Digite observações sobre o problema encontrado..."
        placeholderTextColor="#94a3b8"
        value={anotacoes}
        onChangeText={setAnotacoes}
    />

    <View style={{ backgroundColor: "#dd1212", marginTop: 16, borderRadius: 12 }}>
        <Button title="Salvar Anotações" onPress={salvarAnotacoes} color="#ffffff" />
    </View>

    </ScrollView>
  );
}
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './componentes/Login/Login.js';
import Inicio from './componentes/TelaInicio/Inicio.js';
import Roteadores from './componentes/TelaRoteadores/Roteadores';
import Categorias from './componentes/TelaCategorias/Categorias.js';
import Problemas from './componentes/TelaProblemas/Problemas.js';
import Solucoes from './componentes/TelaSolucoes/Solucoes.js';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Login" component = { Login } />
        <Stack.Screen name= "Inicio" component = { Inicio } />
        <Stack.Screen name="Roteadores" component={Roteadores} />
        <Stack.Screen name= "Categorias" component = { Categorias } />
        <Stack.Screen name= "Problemas" component= { Problemas }/>
        <Stack.Screen name="Solucoes" component={ Solucoes } />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

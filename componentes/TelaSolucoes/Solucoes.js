import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import estilo from './estilo';

const solucoesPorProblema = {

  //ESTRUTURA
  'Porta desalinhada': [
    'Mexer na regulagem do pézinho do armário e observar onde a porta está enroscando mais, se é na parte superior ou inferior.',
  ],
  
  'Armário balançando': [
    'Isso quer dizer que a regulagem do pézinho está errada. Observando o funcionamento da porta, regule de acordo com que a porta não fique travada ao abrir.',
    'Se na regulagem do pézinho o armário não ficar alinhado, utilize de calços para manter o alinhamento das portas e a estabilidade do armário.'
  ],
  
  'Porta emperrada': [
    'Verifique a regulagem do pézinho do ármario. Se a porta estiver travando a parte de baixo, levante mais a frente do armário. Se está pegando mais a parte de cima, levante a traseira do armário.',
    'Observe se os rebites estão pegando na porta e se estiver, a porta estará riscada onde ele está mais pegando. Com o auxílio de um martelo, bata nos rebites que estão travando a porta.',
    'Se as portas de uma coluna do armário estão abrindo e outras não, pode ser que algum cabo manga está impedindo que o varão faça seu percurso para acionar o pino da trava. Normalmente os cabos têm que estar paralelos à fechadura.',
  ],

  'Porta não mantém fechada': [
    'Se ao empurrar a porta para fechar ela não manter fechada, é porque o hook não está conseguindo o alcance necessário para acionar o gatilho da trava. Observe como está posicionada a fechadura eletrônica, se ela estiver recuada o hook não aciona a trava. Com o auxílio de uma chave philips, solte a fechadura eletrônica, traga ela mais para frente e aperte novamente os parafusos. Faça o teste.'
  ],

  //ELÉTRICA
  'Porta faz o som de disparo mas não abre': [
    'Se uma ou mais portas apresentarem esse problema é porque a bateria não está com carga suficiente para poder acionar o pino que abre a porta. Com um multímetro, confira a voltagem que está chegando na corrente contínua da fonte (DC), se estiver àbaixo da metade do recomendado (13.8V) o mecanismo de abertura não funcionará corretamente. Certifique-se que está chegando corrente no armário vindo da rede elétria do local.',
  ],

  'Tomada queimada': [
    'Desligar energia geral',
    'Trocar tomada com equipamento adequado',
    'Verificar disjuntor da área',
  ],

  //WIFI
  'Sem internet': [
    'Reiniciar o roteador',
    'Verificar conexão do cabo de rede',
    'Testar em outro dispositivo',
  ],

  'Tablet travando': [
    'Se o tablet estiver travando ao tentar entrar nas suas funções, é sinal que a conexão de wifi que ele está usando está ruim ou ele não esteja conectado em alguma rede. Verifique e troque o wifi.'
  ],

  'Locker Off-line': [
    'Esse erro indica que a placa não está conectada a nenhum Wifi ou ela ainda não subiu no sistema. Certifique-se que ela esteja conectada no Wifi do roteador do Locker. Se ela não estiver conectada em nenhuma rede, o nome do wifi da placa aparecerá na lista de redes disponíveis como LOCKER-X (Número da placa).'
  ],

  'Sem Roteamento': [
    'Quando essa mensagem aparece no touch é sinal que não tem nenhum sinal de wifi chegando até o roteador do Locker. Verifique se há algum cabo solto no roteador (cabo WAN ou da fonte) ou se há sinal no cabo ethernet.'
  ],

  //SISTEMA (ANDROID/SOFTWARE)
  'Porta bloqueada': [
    'Se ao verificar o sistema e alguma porta estiver marcada como BLOQUEADA é sinal que ocorreu algum mal-funcionamento em determinada porta. Uma carga baixa na bateria, pino de disparo da fechadura travado, armário desalinhado, podem ocasionar esse erro.'
  ],
  'Teclado virtual não aparece': [
    'Normalmente esse erro ocorre nos Lockers com o software de RFID, ele reconhece o leitor como um teclado físico e acaba "omitindo" o teclado virtual. Entre nas configurações e procure sobre Teclado virtual e ative a opção.'
  ],
  'Locker Off-line': [
    'Essa tela é exibida quando o wifi da placa (LOCKER-X) não está conectada à nenhuma rede e ele não sincroniza os dados com o sistema. Basta checar se a rede do Locker está conectada à algum wifi (preferencialmente ao próprio roteador do Locker)',
    'Outro problema que pode ocasionar esse erro é o endereço do MAC do device. Entre no sistema e confira se o MAC que está sendo exibido no touch é o mesmo que está descrito no sistema. Para acessar o menu de Devices, no sistema faça o caminho: Lockers -> Devices -> Procure pelo numero do device -> Edite o endereço MAC'
  ]
};

export default function Solucoes({ route }) {
  const { problema } = route.params;
  const solucoes = solucoesPorProblema[problema] || ['Sem soluções cadastradas.'];

  const largura = Dimensions.get('window').width;

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Soluções para: {problema}</Text>

      <FlatList
        data={solucoes}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[estilo.card, { width: largura - 40 }]}>
            <Text style={estilo.solucao}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}
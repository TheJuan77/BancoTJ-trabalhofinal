import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const TelaTransferencia = ({ navigation }) => {
  const [contaDestino, setContaDestino] = useState('');
  const [valorTransferencia, setValorTransferencia] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleTransferencia = () => {
    // Verifica se a conta de destino é válida
    if (contaDestino !== '575') {
      setMensagem('Conta de destino inválida. Verifique e tente novamente.');
      return;
    }

    // Verifica se a conta de destino é a mesma que está logada
    // Substitua 'numero_da_conta_logada' pelo número da conta do usuário logado
    if (contaDestino === 'numero da conta logada') {
      setMensagem('Não é possível transferir para a própria conta.');
      return;
    }

    // Verifica se o valor da transferência é válido
    if (!valorTransferencia || isNaN(Number(valorTransferencia)) || Number(valorTransferencia) <= 0) {
      setMensagem('Digite um valor de transferência válido.');
      return;
    }

    // Verifica se o valor da transferência é maior que o saldo disponível
    const saldoDisponivel = 2000.00; // Substitua pelo saldo real do usuário
    const valorTransferenciaFloat = parseFloat(valorTransferencia);
    if (valorTransferenciaFloat > saldoDisponivel) {
      setMensagem('Saldo insuficiente para a realização datransferência.');
      return;
    }

    // Processa a transferência
    // Coloque aqui a lógica para efetuar a transferência

    // Exibe uma mensagem de sucesso
    setMensagem(`Transferência de R$ ${valorTransferenciaFloat.toFixed(2)} para a conta ${contaDestino} realizada com sucesso.`);
    setContaDestino('');
    setValorTransferencia('');
  };

  return (
    <View>
      <Text>Número da conta de destino:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 5, marginBottom: 10 }}
        keyboardType="numeric"
        value={contaDestino}
        onChangeText={setContaDestino}
      />
      <Text>Valor da transferência:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 5, marginBottom: 10 }}
        keyboardType="numeric"
        value={valorTransferencia}
        onChangeText={setValorTransferencia}
      />
      <Button title="Transferir" onPress={handleTransferencia} />
      <Text>{mensagem}</Text>
      <Button title="Voltar para o menu" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TelaTransferencia;
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const TelaDeposito = ({ navigation }) => {
  const [valorDeposito, setValorDeposito] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleDeposito = () => {
    // Verifica se o valor do depósito é válido
    if (!valorDeposito || isNaN(Number(valorDeposito)) || Number(valorDeposito) <= 0) {
      setMensagem('Digite um valor de depósito válido.');
      return;
    }

    // Processa o depósito
    const valorDepositoFloat = parseFloat(valorDeposito);
    // Coloque aqui a lógica para efetuar o depósito

    // Exibe uma mensagem de sucesso
    setMensagem(`Depósito de R$ ${valorDepositoFloat.toFixed(2)} realizado com sucesso.`);
    setValorDeposito('');
  };

  return (
    <View>
      <Text>Valor do depósito:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 5, marginBottom: 10 }}
        keyboardType="numeric"
        value={valorDeposito}
        onChangeText={setValorDeposito}
      />
      <Button title="Depositar" onPress={handleDeposito} />
      <Text>{mensagem}</Text>
      <Button title="Voltar para o menu" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TelaDeposito;
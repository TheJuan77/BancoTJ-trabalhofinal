import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const TelaSaque = ({ navigation }) => {
  const [valorSaque, setValorSaque] = useState('');
  const [mensagem, setMensagem] = useState('');
  const saldoDisponivel = 2000.00; // Saldo disponível do usuário (exemplo)

  const handleSaque = () => {
    // Verifica se o valor do saque é válido
    if (!valorSaque || isNaN(Number(valorSaque)) || Number(valorSaque) <= 0) {
      setMensagem('Digite um valor de saque válido.');
      return;
    }

    const valorSaqueFloat = parseFloat(valorSaque);
    
    // Verifica se o saldo disponível é suficiente para o saque
    if (valorSaqueFloat > saldoDisponivel) {
      setMensagem('Saldo insuficiente para saque.');
      return;
    }

    // Coloque aqui a lógica para efetuar o saque

    // Exibe uma mensagem de sucesso
    setMensagem(`Saque de R$ ${valorSaqueFloat.toFixed(2)} realizado com sucesso.`);
    setValorSaque('');
  };

  return (
    <View>
      <Text>Valor do saque:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 5, marginBottom: 10 }}
        keyboardType="numeric"
        value={valorSaque}
        onChangeText={setValorSaque}
      />
      <Button title="Sacar" onPress={handleSaque} />
      <Text>{mensagem}</Text>
      <Button title="Voltar para o menu" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TelaSaque;
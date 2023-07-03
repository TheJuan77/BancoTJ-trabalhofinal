import React from 'react';
import { View, Text, Button } from 'react-native';

const TelaDesconectar = ({ navigation }) => {
  const handleDesconectar = () => {
    navigation.navigate('TelaLogin');
  };

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Desconectar</Text>
      <Text style={{ marginTop: 20 }}>Tem certeza de que deseja desconectar?</Text>
      <Button title="Sim" onPress={handleDesconectar} />
      <Button title="Não" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TelaDesconectar;
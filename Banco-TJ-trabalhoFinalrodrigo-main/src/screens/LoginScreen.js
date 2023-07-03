import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from '../../Estilos/estilos';
const TelaLogin = () => {
  const navigation = useNavigation();
  const [conta, setConta] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (conta === '20222017905' && password === 'thiago') {
        
        const loginData = { conta, password };
        navigation.navigate('Home', { loginData });
      } else {

        alert('Erro! Verifique e tente novamente!');
      }
  };

  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (

    <View style={estilos.Container}> 
    <Text style={estilos.Texto}> Thiago 20222017905 e Juan Pablo  </Text>
    <Image style={estilos.Image} source={require('./'logo.jpg)}/>
    <Text style={estilos.Texto}> Seu dinheiro rendendo muito!</Text>
    
    <TextInput
        style={estilos.input}
        placeholder="Digite o numero da conta"
        value={conta}
        onChangeText={setConta}
      />
      <TextInput
        style={estilos.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button style={estilos.Botao} 
      title="Acessar conta"
       onPress={handleLogin} />
    
  </View>


  )

}
export default TelaLogin;

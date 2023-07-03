import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import estilos from '../../Estilos/estilos';
import { useRoute,  useNavigation, StackActions } from '@react-navigation/native';
const TelaSaldo = ({ navigation }) => {
  
  const [saldo, setSaldo] = useState(2000.00);
  const route = useRoute();
  const loginData = route.params?.loginData;
  

  return (
    <View style={estilos.Container}>
      <Text style ={estilos.userDataText}>Saldo</Text>
     {loginData && <Text  style={estilos.Texto}>Saldo do usuario da conta : {loginData.conta}  </Text>}
     <Text style={estilos.welcomeText}>  R$ {saldo.toFixed(2)}</Text>
      <Text />


      <Button style ={estilos.button} 
      title="Voltar"
       onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TelaSaldo;
import React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import { useRoute, useNavigation, StackActions } from '@react-navigation/native';
import estilos from '../../Estilos/estilos';
function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const handleLogout = () => {
    navigation.dispatch(StackActions.replace('Login'));
  };

  const loginData = route.params?.loginData;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={estilos.Container}>
   
      <Text style={estilos.welcomeText}>Bem-vindo ao Banco TJ!</Text>

      {loginData && <Text style={estilos.userDataText}>Usuario da conta: {loginData.conta}</Text>}

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Ver Saldo"
          onPress={() => navigation.navigate('TelaSaldo', { loginData })}
          color="#000000"
        />

        <Button
          style={styles.button}
          title="Realizar Saque"
          onPress={() => navigation.navigate('TelaSaque')}
          color="#000000"
        />

        <Button
          style={styles.button}
          title="Realizar Depósito"
          onPress={() => navigation.navigate('TelaDeposito')}
          color="#000000"
        />

        <Button
          style={styles.button}
          title="Realizar Transferência"
          onPress={() => navigation.navigate('TelaTransferencia')}
          color="#000000"
        />

        <Button
          style={styles.button}
          title="Desconectar"
          onPress={() => navigation.navigate('TelaDesconectar')}
          color="#000000"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  userDataText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#666',
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%',
  },
  button: {
    marginBottom: 10,
    borderRadius: 20,
  },
});

export default HomeScreen;
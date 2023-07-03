import React from "react";
import { StyleSheet } from "react-native";

    export default StyleSheet.create({
    Container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
     
    },
    input:{
      backgroundColor:'#ffffff',
      width: '55%',
      padding:10,
      borderRadius: 30,
      marginBottom: 15,
      color: '#1C1C1C'
    },
   
    Texto:{
      color:'#1C1C1C',
      height: 50,
    fontStyle: 'arial',
    alignItems:'center'
    },
    Ex:{
        marginTop: 30,
        color:'#DCDCDC'
    
    },
    Image:{
        width:910,
        resizeMode:'center',
        marginBottom: -168
        
    },
    Botao:{
        backgroundColor:'#DCDCDC',
        color:'#000000',
        borderRadius: 50,
        width: '25%',
        padding:10,
        marginBottom:'auto'
        
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#1C1C1C'
      },
      userDataText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
        color: '#1C1C1C'
      },
      buttonContainer: {
        marginTop: 10,
        width: '40%',
        borderRadius: 50,
      },
      button: {
        marginBottom: 10,
        borderRadius: 50,
        }
      
  })
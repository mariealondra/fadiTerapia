import React, {useState, useEffect} from 'react';
import { Image, StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Global } from '../styles/Global';
import axios from 'axios';


const Login = ({navigation}) => {
    const [email, setEmail]= useState('');
    const [password, setPassw]= useState('');
   
    const pushHandler = () => {
        navigation.push('Home')
    };
    const data = ( email, password );

    const loginP = async () => {
        axios({
            method: "post",
            url: "http://localhost:3001/patients/login",
            data: {data},
            config: { headers: { "Content-Type": "multipart/form-data" } }
            })
            .then(response => {
            callback();
            })
            .catch(function(error) {
            console.log("hay en el catch de axios");
            console.log(error)
            });
    };
      

  return (
        <View style = {Global.container}>
            <Text style={{ fontWeight: 'bold'}}> Login</Text>
            
            <Image 
                source={require('../assets/fadiL.png')} 
                style= {{ width: 150, height: 150}}
                
            />
            <TextInput
                style= {estilo.input}
                onChangeText={(email) => setEmail (email)}
                value= {email}
                placeholder= 'Ingrese su email'
            />
            <TextInput
                style= {estilo.input}
                onChangeText= {(password) => setPassw (password)}
                value= {password}
                placeholder= 'Digite su contraseña'
            />
            <Text>  </Text>
            <TouchableOpacity onPress={loginP}>
                <Image
                    source= {require('../assets/inicio.png')}
                    style= {{width: 250, height: 50}}
                />
            </TouchableOpacity>
            <Text>  </Text>
            <TouchableOpacity onPress={pushHandler}>
                <Image
                    source= {require('../assets/homeB.png')}
                    style= {{width: 50, height: 50}}
                />
            </TouchableOpacity>
        </View>        
    );
};

const estilo = StyleSheet.create({
    input: {
        height: 50,
        width: '100%',
        fontSize: 20,
        borderWidth: 1.5,
        borderColor: '#777',
        margin: 10,
        padding: 5,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    }
});
export default Login;
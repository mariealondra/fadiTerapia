import React, {useState, useEffect} from 'react';
import { Image, StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Global } from '../styles/Global';
import Registro from '../screens/Registro';



const Login = ({navigation}) => {
    const [userN, setUserN]= useState('');
    const [email, setEmail]= useState('');
    const [passw, setPassw]= useState();
    const [errorMessage, setErrorMessage]= useState('');
    const [displayFormError, setDisplayFormError]= useState(false);
   
    const pushHandler = () => {
        navigation.push('Home')
    };
    const regAtras = () => {
        navigation.push('Decision')
    };
    const registrarse = () => {
        navigation.push('Registro');
    };
    function createUser(){
        
        }
    
  return (
        <View style = {Global.container}>
            <Text style={{ fontWeight: 'bold'}}>Login</Text>
            
            <Image 
                source={require('../assets/fadiL.png')} 
                style= {{ width: 150, height: 150}}
                
            />
            <TextInput
                style= {estilo.input}
                onChangeText={(val) => setEmail(val)}
                value= {email}
                keyboardType= 'email-address'
                placeholder= 'Ingrese su email'
                
            />

            <TextInput
                style= {estilo.input}
                onChangeText= {(val) => setPassw(val)}
                value= {passw}
                placeholder= 'Digite su contraseña'
                keyboardType= 'default'
            />
            
            <Text>  </Text>
            
            
            <TouchableOpacity>
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
        fontSize: 15,
        borderWidth: 1.5,
        borderColor: '#777',
        margin: 10,
        padding: 5,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    }
});
export default Login;
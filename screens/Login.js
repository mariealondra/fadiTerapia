import React, {useState, useEffect} from 'react';
import { Image, StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Global } from '../styles/Global';
import clienteAxios from '../config/clienteAxios'


const Login = ({navigation}) => {
    // const [email, setEmail]= useState('');
    // const [password, setPassw]= useState('');
    const [formData,setFormData] = useState({
        email: '',
        password: ''
    })
    const pushHandler = () => {
        navigation.push('Home')
    };
    const handleSubmit = async () => {

        try {
            const respuesta = await clienteAxios.post('/patients/login',formData);
            const data = await respuesta.data;
            console.log(data.data);
        } catch (error) {
            console.log(error)
        }
        
    };


      
const {email,password} = formData;
  return (
        <View style= {[Global.globalPadding,{ flex:1, backgroundColor: 'white'}]}>
           
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                      
                             
                <Image 
                    source={require('../assets/fadiL.png')} 
                    style= {{ width: 185, height: 185}}
                    
                />
                <TextInput
                    style= {estilo.input}
                    // onChangeText={(email) => setEmail (email)}
                    onChangeText={(label) => setFormData({...formData,email:label})}
                    name="email"
                    value= {email}
                    placeholder= 'Ingrese su email'
                />
                <TextInput
                    style= {estilo.input}
                    onChangeText={(label) => setFormData({...formData,password:label})}
                    name="password"
                    value= {password}
                    placeholder= 'Digite su contraseña'
                />
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent:'space-around'
                }}>
                    <Text> </Text>
                <TouchableOpacity onPress={handleSubmit}>
                    <Image
                        source= {require('../assets/inicio.png')}
                        style= {{width: 290, height: 50}}
                    />
                </TouchableOpacity>
                <Text> </Text>
                <TouchableOpacity onPress={pushHandler}>
                    <Image
                        source= {require('../assets/homeB.png')}
                        style= {{width: 50, height: 50}}
                    />
                </TouchableOpacity>
                </View>
                
                </View> 
            </View>      
    );
};

const estilo = StyleSheet.create({
    input: {
        height: 50,
        width: 290,
        fontSize: 20,
        borderWidth: 1.5,
        borderColor: '#777',
        margin: 10,
        padding: 5,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    fondo: {
        flex: 6,
        backgroundColor: '#000000',
        padding: 70,
        alignItems: 'center'
    },
});
export default Login;
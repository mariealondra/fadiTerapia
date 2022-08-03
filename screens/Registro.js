import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Global } from '../styles/Global';
import { Overlay } from 'react-native-elements';
import FormSuccess from '../componentes/FormSuccess';
import FormError from '../componentes/FormError';
import axios from 'axios';

const Registro = ({navigation}) => {

    const [userN, setUserN]= useState(null);
    const [lastname, setLastName] = useState(null);
    const [email, setEmail]= useState(null);
    const [passw, setPassw]= useState(null);
    const [confPassw, setConfPassw] = useState(null);
    const [age, setAge]= useState(null);
    const [address, setAddress] = useState(null);
    const [condition, setCondition]= useState(null);
    const [telephoneNumber, setTelephoneNumber] = useState(null);
    const [therapistId, setTherapistId] = useState(null);
    const [errorMessage, setErrorMessage]= useState('');
    const [successMessage, setSuccessMessage]= useState('');
    const [isLoading, setIsLoading]= useState();
    const [displayFormError, setDisplayFormError]= useState(false);
    

    const homePage = () => {
        navigation.push('Home')
    };
    
    function changeName(value){
        setUserN(value);
    };
    
    // const createUser= async() => {
        
    //     const response = await axios.post('http://localhost:3001/patients/registro', data)
    //     .then(()=>{
    //         setIsLoading(false);
    //         setSuccessMessage('Se ha registrado exitosamente');
    //     })
    //     .catch((err)=> {
    //         console.log(err)
    //         setIsLoading(false);
    //         setErrorMessage(err.message);
    //         setDisplayFormError(true);
    //     })
    // };
    const createUser = async() => {
        const data= {userN, lastname, email, passw, age, address, condition, telephoneNumber, therapistId}
        try {
            // const data = {userN, lastname, email, passw, age, address, condition, telephoneNumber, therapist}
            const response = await axios.post('http://localhost:3001/patients/registro', data);
            console.log(response);
        }
        catch (error) {
           //alert("Email, usuario o contraseña incorrecto");
           console.log(error);
        }
        
    }
    const validateForm = ()=>{
        var form_inputs = [userN, lastname, email, passw, confPassw, age, address, condition, telephoneNumber, therapistId];
        var password_match = passw == confPassw;

        if(form_inputs.includes('') || form_inputs.includes(undefined)) {
            setErrorMessage('Complete los espacios en blanco');
            return setDisplayFormError(true);
        }
        if(!password_match){
            setErrorMessage('Las contraseñas no coinciden');
            return setDisplayFormError(true); 
        
        }
        if(password_match) return createUser();
        
    }

  return (
        <ScrollView>
            <Image 
                    source={require('../assets/userEnt.png')} 
                    style= {{ width: 50, height: 50}}
                    
                />
            <View style = {Global.container}> 
                <Text style={{ fontWeight: 'bold' }}>Registrarse</Text>
                <Text> </Text>
                
                <TextInput
                    style= {estilo.input}
                    onChangeText= {changeName}
                    value= {userN}
                    placeholder= 'Digite su nombre'
                    keyboardType= 'default'
                    />
                <TextInput
                    style= {estilo.input}
                    onChangeText={setLastName}
                    value= {lastname}
                    keyboardType= 'visible-password'
                    placeholder= 'Digite apellido'
                    
                />
                <TextInput
                    style= {estilo.input}
                    onChangeText={setEmail}
                    value= {email}
                    keyboardType= 'email-address'
                    placeholder= 'Ingrese su email'
                    
                />
                
                <TextInput
                    style= {estilo.input}
                    onChangeText= {setPassw}
                    value= {passw}
                    placeholder= 'Digite su contraseña'
                    keyboardType= 'default'
                />
                
                <TextInput
                    style= {estilo.input}
                    onChangeText={setConfPassw}
                    value= {confPassw}
                    keyboardType= 'visible-password'
                    placeholder= 'Confirme su contraseña'
                    
                />
                <TextInput
                    style= {estilo.input}
                    onChangeText={setAge}
                    value= {age}
                    placeholder= 'Inserte edad'
                    
                />

                <TextInput
                    style= {estilo.input}
                    onChangeText={setAddress}
                    value= {address}
                    placeholder= 'Ingrese su dirección'
                    
                />
                
                <TextInput
                    style= {estilo.input}
                    onChangeText={setCondition}
                    value= {condition}
                    placeholder= 'Inserte condición'
                    
                />
                <TextInput
                    style= {estilo.input}
                    onChangeText={setTelephoneNumber}
                    value= {telephoneNumber}
                    placeholder= 'Digite su teléfono'
                    
                />
                <TextInput
                    style= {estilo.input}
                    onChangeText={setTherapistId}
                    value= {therapistId}
                    placeholder= 'Digite el id del terapista'
                    
                />
            
                <Text>  </Text>
                <TouchableOpacity onPress={validateForm}>
                    <Image
                        source= {require('../assets/registrarse.png')}
                        style= {{width: 290, height: 40}}
                    />
                
                </TouchableOpacity>
                <Text>  </Text>
                <TouchableOpacity onPress={homePage}>
                    <Image
                        source= {require('../assets/homeB.png')}
                        style= {{width: 65, height: 65}}
                    />
                
                </TouchableOpacity>
                {displayFormError == true?
                    <FormError hideErrOverlay = {setDisplayFormError} err= {errorMessage}/>
                    : 
                    null
                }
                {isLoading == true?
                    <FormSuccess onPress= {()=>props.hideErrOverlay(false)}/>
                    :
                    successMessage== 'Se ha registrado exitosamente'?
                        <FormSuccess successMessage={successMessage} close= {setSuccessMessage('')}/>
                    :
                    null
                }
            </View>
        </ScrollView>
    );
   
};
const estilo = StyleSheet.create({
    input: {
        height: 50,
        width: 250,
        fontSize: 20,
        borderWidth: 1.5,
        borderColor: '#777',
        margin: 10,
        padding: 10       
    }

});

export default Registro;
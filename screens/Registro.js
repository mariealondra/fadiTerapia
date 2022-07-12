import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Global } from '../styles/Global';
import { Overlay } from 'react-native-elements';
import FormSuccess from '../componentes/FormSuccess';
import FormError from '../componentes/FormError';

const Registro = ({navigation}) => {

    const [userN, setUserN]= useState('');
    const [email, setEmail]= useState('');
    const [errorMessage, setErrorMessage]= useState('');
    const [successMessage, setSuccessMessage]= useState('');
    const [isLoading, setIsLoading]= useState()
    const [passw, setPassw]= useState();
    const [confPassw, setConfPassw] = useState();
    const [displayFormError, setDisplayFormError]= useState(false);
    

    const homePage = () => {
        navigation.push('Home')
    };
    function changeName(value){
        setUserN(value);
    };
    function createUser(){
        setIsLoading(true);
        prisma = new PrismaClient(email,passw)
        .then(()=>{
            setIsLoading(false);
            setSuccessMessage('Se ha registrado exitosamente');
        })
        .catch((err)=> {
            setIsLoading(false);
            setErrorMessage(err.message);
            setDisplayFormError(true);
        })
    };
    const validateForm = ()=>{
        var form_inputs = [userN, email, passw, confPassw];
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
        <View style = {Global.container}>
                
            <Text style={{ fontWeight: 'bold' }}>Registrarse</Text>
            <Text> </Text>
            
            <Image 
                source={require('../assets/userEnt.png')} 
                style= {{ width: 50, height: 50}}
                
            />
            <TextInput
                style= {estilo.input}
                onChangeText= {changeName}
                value= {userN}
                placeholder= 'Digite su usuario'
                keyboardType= 'default'
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
            
            <TextInput
                style= {estilo.input}
                onChangeText={(val) => setConfPassw(val)}
                value= {confPassw}
                keyboardType= 'visible-password'
                placeholder= 'Confirme su contraseña'
                
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

export default Registro;
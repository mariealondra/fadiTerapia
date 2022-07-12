import React from 'react'
import { StyleSheet, View, Text, Button, Image, Linking  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Global } from '../styles/Global';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


const Terapeuta = ({navigation}) => { 
        
    const pushHandler = () => {
        navigation.push('Home')
    };
        

    return (
        <View style = {Global.container}>
            <Text>Click en la imagen y el enlace para más información</Text>
            <Text> </Text>
            <ScrollView>
                <TouchableOpacity onPress={()=> Linking.openURL('https://res.cloudinary.com/mariealondra/image/upload/v1650874606/inst_qswhql.png')}>
                    <Image
                        source={require('../assets/leledongwebp.png')} 
                        style= {{ width: 300, height: 300}}
                    />
                </TouchableOpacity>
                

                <TouchableOpacity onPress= {pushHandler}>
                    <Text> </Text>
                    <Image
                        source={require('../assets/volver.png')} 
                        style= {{ width: 300, height: 50}}
                    />
                    <Text> </Text>
                    <Text> </Text>

                    <Text   onPress={ ()=> Linking.openURL('https://miproyectofadi.firebaseapp.com/') } >  CLICK PARA IR A LA PÁGINA WEB.</Text>
                </TouchableOpacity>
            </ScrollView>
                
            
        </View>
    )

};


export default Terapeuta;
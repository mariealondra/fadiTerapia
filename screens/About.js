import React from 'react'
import { StyleSheet, View, Text, Button, Image, Linking  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Global } from '../styles/Global';
import { TouchableOpacity } from 'react-native-gesture-handler';


const About = ({navigation}) => { 
        
    const pushHandler = () => {
        navigation.push('Home')
    };
        

    return (
        <View style = {Global.container}>
            <Text>About</Text>
            <Text> </Text>
            <Image
                    source={require('../assets/aboutUs.png')} 
                    style= {{ width: 300, height: 300}}
            />
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
            
        </View>
    )

};


export default About;
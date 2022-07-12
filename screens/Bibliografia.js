import React from 'react'
import { StyleSheet, View, Text, Button, Image, Linking  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Global } from '../styles/Global';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const Bibliografia = ({navigation}) => { 
        
    const pushHandler = () => {
        navigation.push('Home')
    };
        

    return (
        <View style = {Global.container}>
            <Text>Fuentes de sesiones de terapia</Text>
            <Text> </Text>
            <Text> </Text>
            <Text style= {{color: 'blue'}}  onPress={ ()=> Linking.openURL('https://www.youtube.com/watch?v=8PcHtClQWyI&t=6s') } >  VIDEOS DE ASK DOCTOR JO.</Text>
            <Text> </Text>
            <Text  style= {{color: 'blue'}} onPress={ ()=> Linking.openURL('https://www.youtube.com/playlist?list=PLgWeSW4QJyQ9mb_YmOHlMs3cWm1ZfJW8u') } >  VIDEOS DE Konstanty Kulik.</Text>
            <Text> </Text>
            <Text  style= {{color: 'blue'}}  onPress={ ()=> Linking.openURL('https://www.youtube.com/watch?v=stVYJwJShW4&t=141s') } >  VIDEOS DE HOSPITAL RIBERA POVISA.</Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text  style= {{color: 'blue'}}  onPress={ ()=> Linking.openURL('https://miproyectofadi.firebaseapp.com/') } >  PARA MÁS INFORMACIÓN .</Text>
            <Text> </Text>
            <TouchableOpacity onPress= {pushHandler}>
                <Text> </Text>
                <Image
                    source={require('../assets/volver.png')} 
                    style= {{ width: 300, height: 50}}
                />
                <Text> </Text>
                <Text> </Text>

                
            </TouchableOpacity>
            
        </View>
    )

};


export default Bibliografia;
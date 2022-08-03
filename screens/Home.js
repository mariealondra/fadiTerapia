import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, Image,  Button, FlatList} from 'react-native';
import { Global} from '../styles/Global';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = ({ navigation}) => {
    const atras = () => {
        navigation.push('Login')
    };
    const pressHandler = () => {
        navigation.push('Sesiones')
    };
    const observTerapia = () => {
        navigation.push('Observaciones')
    };
    const acercaDe = () => {
        navigation.push('About')
    };
    const biblio = () => {
        navigation.push('Bibliografia')
    };
    const guia = () => {
        navigation.push('Instrucciones');
    };
    const terapeuta= () => {
        navigation.push('Testing');
    }
    
    const [isSignedIn, setIsSignedIn]= useState(false);
    

    
    return (
        <View style = {Global.container}>
            <Text style={{ fontWeight: 'bold'}}> Home </Text>
            <Text> </Text>
            
            <Text> </Text>
            <TouchableOpacity onPress = {pressHandler} >
                <Image 
                    source={require('../assets/EJERCICIOS.png')} 
                    style= {{ width: 250, height: 50}}
                />
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity onPress={guia} >
                <Image
                    source={require('../assets/instrucciones.png')} 
                    style= {{ width: 250, height: 50}}
                />
            </TouchableOpacity> 

            <Text> </Text>

            <TouchableOpacity onPress = {observTerapia} >
                <Image
                    source={require('../assets/observaciones.png')} 
                    style= {{ width: 250, height: 50}}
                />

            </TouchableOpacity>

            <Text> </Text>
                
            <TouchableOpacity onPress={acercaDe} >
                <Image
                source={require('../assets/Acerc.png')} 
                style= {{ width: 250, height: 50}}
                />

            </TouchableOpacity>

            <Text> </Text>

            <TouchableOpacity onPress={biblio} >
                <Image
                source={require('../assets/biblio.png')} 
                style= {{ width: 250, height: 50}}
                />

            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity onPress = {terapeuta} >
                <Image 
                    source={require('../assets/terapeuta.png')} 
                    style= {{ width: 250, height: 50}}
                />
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity onPress={atras} >
                <Image
                    source={require('../assets/regresarLog.png')} 
                    style= {{ width: 250, height: 50}}
                />
            </TouchableOpacity>        
            

        </View>
)}




export default Home;
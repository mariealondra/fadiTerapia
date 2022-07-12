import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, Image, Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Instrucciones = ({navigation}) => { 
        
    const [titleText, setTitleText]= useState('Instrucciones de terapia');
    const bodyText= useState();
    
    const pushHandler = () => {
        navigation.push('Sesiones')
    };
    return (
        <View>
          
            <Image
                source={require('../assets/inst(1).png')}
                style= {{width: 410, height:410}}
            
            />
            <TouchableOpacity onPress={pushHandler}>
                <Image
                    source={require('../assets/EJERCICIOS.png')}
                    style= {{width: 400, height:50}}
                />
            </TouchableOpacity>
        </View>
        

    );
};
  
const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin"
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: 'justify'
    }
});

export default Instrucciones;
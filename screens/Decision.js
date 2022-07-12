import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Global } from '../styles/Global';
;

const Decision = ({navigation}) => {
    const inicio = () => {
        navigation.push('Login')
    };
    const registrar = () => {
        navigation.push('Registro')
    };

    return (
        <View style = {Global.container}>
   
            <Text style={{ fontWeight: 'bold' }}>Regístrate para unirte a FADI</Text>

            <Text>  </Text>
            <Image 
                source={require('../assets/fadiL.png')} 
                style= {{ width: 200, height: 200}}
                
            />

            <Text>  </Text>
            
            
            <Text>  </Text>
            <TouchableOpacity onPress={ registrar}>
                <Image
                    source= {require('../assets/Regist.png')}
                    style= {{width: 250, height: 50}}
                />
            
            </TouchableOpacity>
            <Text>  </Text>
            <TouchableOpacity onPress={inicio}>
                <Image
                    source= {require('../assets/inicio.png')}
                    style= {{width: 250, height: 50}}
                />
            
            </TouchableOpacity>

        </View>
    );
      
   
};
export default Decision;
import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Global } from '../styles/Global';
;

const FADI = ({navigation}) => {
    const inicio = () => {
        navigation.push('Login')
    };
    const registrar = () => {
        navigation.push('Registro')
    };

    return (
        <View style= {[Global.globalPadding,{flex:1, backgroundColor: 'white'}]}>
             <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}> 

   
            <Text style={{ fontWeight: 'bold' }}>Regístrate o inicia sesión en FADI</Text>

            <Text>  </Text>
            <Image 
                source={require('../assets/fadiL.png')} 
                style= {{ width: 200, height: 200}}
                
            />

            <Text>  </Text>
            
            <Text>  </Text>
            <TouchableOpacity onPress={ registrar }>
                <Image
                    source= {require('../assets/Regist.png')}
                    style= {{width: 250, height: 50}}
                />
            
            </TouchableOpacity>
            <Text>  </Text>
            <TouchableOpacity onPress={ inicio }>
                <Image
                    source= {require('../assets/inicio.png')}
                    style= {{width: 250, height: 50}}
                />
            
            </TouchableOpacity>
            </View>
        </View>
    );
      
   
};
export default FADI;
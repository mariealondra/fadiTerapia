import React from 'react';
import {Text, View, StyleSheet, Image, ActivityIndicator} from 'react-native';
import { Overlay } from 'react-native-elements';



const FormSuccess = (props) => {
    
    return(
        props.successMessage?
            <Overlay overlayStyle= {styles.overlay} isVisible= {true} onBackdropPress= {()=> props.close('')}>
                <Image
                    source= {require('../assets/exitomod.png')}
                    style= {styles.imagen}
                /> 
                <Text style= {styles.successmessage}>
                    {props.successMessage}
                </Text>
            </Overlay>
            :
            <Overlay overlayStyle= {styles.overlay} isVisible= {true}>
                <ActivityIndicator size={'large'} color= {'#2F88F0'} />
           </Overlay>
    
    )
}
export default FormSuccess;

const styles= StyleSheet.create({
    overlay: {
        width: '90%',
        height: 360,
        
    },
    successmessage: {
        color: 'black',
        fontSize: 20,
        margin: 15,
        textAlign: 'center'
    },
    button: {
        width: 280,
        color: '#000',
        height: 40,
        backgroundColor: '#000',
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttontext: {
        color: 'white'
    },
    imagen: {
        width: 100,
        height:100
    }

});

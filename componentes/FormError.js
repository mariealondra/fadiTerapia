import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Overlay } from 'react-native-elements';

const FormError = (props) => {
    
    return(
        <Overlay overlayStyle= {styles.overlay} isVisible= {true} onBackdropPress= {()=>props.hideErrOverlay(false)}>
  
            <Image
                source= {require('../assets/errormod.png')}
                style= {{width: 100, height: 100}}
            /> 
            <Text style= {styles.errormessage}> 
                {props.err} 
            </Text>

            <TouchableOpacity style= {styles.button} onPress= {()=>props.hideErrOverlay(false)}>
                <Text style= {styles.buttontext}> Aceptar </Text>
            </TouchableOpacity>
        </Overlay>

        
    )
}
export default FormError;

const styles= StyleSheet.create({
    overlay: {
        width: '90%',
        height: 320,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    errormessage: {
        color: 'black',
        fontSize: 20,
        margin: 15,
        textAlign: 'center'
    },
    button: {
        width: 280,
        color: 'white',
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
    }

});
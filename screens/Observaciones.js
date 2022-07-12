import React, { useState } from 'react';
import { render } from 'react-dom';
import { StatusBar } from 'expo-status-bar';
import { FlatList, 
    SectionList, 
    SafeAreaView, 
    Image, 
    StyleSheet, 
    View, 
    Text, 
    Button, 
    TouchableOpacity,
  Linking } 
    from 'react-native';

const Listado = ({ item }) => {
  const findVideo= ()=>{

    if(Ejercicios.data.key ){

    }
  }
    return (
      <View>
          
          <TouchableOpacity 
            onPress={ ()=> Linking.openURL(item.uri) }>
            <Image
                source={{uri : item.uri}}
                style={estilo.Photo}
                resizeMode="cover"
            />
            
          </TouchableOpacity>
            
        <Text style={estilo.textStyle}>{item.text}</Text>
      </View>
    );
};

const  Observaciones = ({ navigation }) => {
    
  const pushHandler = () => {
      navigation.push('Home')
  };

  const gifsVideos = () => {
    
  }

  
  
  return (
      <View style={estilo.container}>
          <StatusBar style= 'dark' />
          <SafeAreaView style={{ flex: 1 }}>
              <SectionList
                  contentContainerStyle={{ paddingHorizontal: 10 }}
                  stickySectionHeadersEnabled={false}
                  sections={graficos}
                  renderSectionHeader={({ section }) => (
                      
                     <Text style= {estilo.sectionHeader}>{section.title}</Text>
                  )}
                  renderItem={({ item, section }) => {
                  return <Listado item={item} />;
                  }}
              />
          </SafeAreaView>
    

          <TouchableOpacity onPress={pushHandler}> 
                <Image 
                    source={require('../assets/volver.png')} 
                    style= {{ width: 400, height: 70}}
                    
                />
          </TouchableOpacity>

      </View>
  )
};
 
const graficos = [
    {
      title: 'Gráficos de ejercios',
      data: [
        { 
          key: '1',
          text: 'eje1',
          uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1650871476/sonrisa_rk58tp.png',
        },
        {
          key: '2',
          text: 'eje2',
          uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1650871489/plot_trial_dot1hw.png',
        },
        {
          key: '3',
          text: 'eje3',
          uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1650871442/eje3_nb4xw4.png',
        },
        {
          key: '4',
          text: 'eje4',
          uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1650871453/eje44_lvivjb.png',
        },
      {
        key: '8',
        text: 'eje5',
        uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1650871458/eje5_ufhpph.png',
      },
      {
        key: '10',
        text: 'eje6',
        uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1650871437/eje2_wuygif.png',
      },
      ],
    },
]
    

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    input: {
        width: '100%',
        backgroundColor: '#add8e6',
        fontSize: 20,
        height: 50,
        borderColor: '#777',
        borderWidth: 1,
        margin: 10,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15
    },
    itemSt: {
        margin: 10,
      },
    Photo: {
        width: 200,
        height: 200,
      },
    textStyle: {
        color: 'rgba(255, 255, 255, 0.5)',
        marginTop: 5,
    },
    sectionHeader: {
        fontWeight: '800',
        fontSize: 18,
        color: '#f4f4f4',
        marginTop: 20,
        marginBottom: 5,
      }
    
});


export default Observaciones;
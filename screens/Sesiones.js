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

const  Sesiones = ({ navigation }) => {
    
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
                  sections={Ejercicios}
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
 
const Ejercicios = [
    {
      title: 'Ejercios para parálisis facial',
      data: [
        { 
          key: '1',
          text: 'Sonrisa',
          uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1650855210/sonrisa_mtdnxp.gif',
        },
        {
          key: '2',
          text: 'Sorpresa',
          uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1650854401/sorpresa_guah4l.gif',
        },
        {
          key: '3',
          text: 'Ceño fruncido',
          uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1650856056/ce%C3%B1ofruncido_fyijil.gif',
        },
        {
          key: '4',
          text: 'Lance beso',
          uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1650855139/besosmultiples_1_vk315e.gif',
        },
      {
        key: '8',
        text: 'Infle cachete',
        uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1650854622/inflarcachete_ba3zlz.gif',
      },
      {
        key: '10',
        text: 'El grito',
        uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1650854016/elgrito_dlhxtf.gif',
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


export default Sesiones;
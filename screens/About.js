import React from "react";
import { StyleSheet, View, Text, Button, Image, Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Global } from "../styles/Global";
import { TouchableOpacity } from "react-native-gesture-handler";

const About = ({ navigation }) => {
  const pushHandler = () => {
    navigation.push("Home");
  };

  return (
    <View style={Global.globalPadding}>
      <Text>About</Text>
      <Text numberOfLines={10}>
        FADI es un acrónimo formado por el primer par de letras de la palabra
        Facial y Digital. Tiene este nombre por el servicio en el que se basa el
        proyecto, que pretende atender a personas con parálisis faciales,
        mediante terapias remotas apoyadas en tecnología digital.
      </Text>

      {/* <Image
        source={require("../assets/aboutUs.png")}
        style={{ width: 300, height: 300 }}
      /> */}
      <TouchableOpacity onPress={pushHandler}>
        <Text> </Text>
        <Image
          source={require("../assets/volver.png")}
          style={{ width: 310, height: 50 }}
        />

        {/* <Text
          onPress={() =>
            Linking.openURL("https://miproyectofadi.firebaseapp.com/")
          }
        > */}
        {/* {" "}
          CLICK PARA IR A LA PÁGINA WEB.
        </Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default About;

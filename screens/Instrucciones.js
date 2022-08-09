import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Image, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Global } from "../styles/Global";

const Instrucciones = ({ navigation }) => {
  const [titleText, setTitleText] = useState("Instrucciones de terapia");
  const bodyText = useState();

  const pushHandler = () => {
    navigation.push("Sesiones");
  };
  return (
    <View style={[Global.globalPadding, { flex: 1, backgroundColor: "white" }]}>
      <View
        style={{
          //justifyContent: 'center',
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/instFinal.png")}
          style={{ width: 350, height: 350 }}
        />
        <Text> </Text>
        <TouchableOpacity onPress={pushHandler}>
          <Image
            source={require("../assets/EJERCICIOS.png")}
            style={{ width: 300, height: 50 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "justify",
  },
});

export default Instrucciones;

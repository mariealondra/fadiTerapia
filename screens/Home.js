import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Button, FlatList } from "react-native";
import { Global } from "../styles/Global";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Home = (props, { navigation }) => {
  const navigator = useNavigation();
  const atras = () => {
    navigator.navigate("Login");
  };
  const pressHandler = () => {
    navigator.navigate("Sesiones");
  };
  const observTerapia = () => {
    navigator.navigate("Observaciones");
  };
  const acercaDe = () => {
    navigator.navigate("About");
  };
  const biblio = () => {
    navigator.navigate("Bibliografia");
  };
  const guia = () => {
    navigator.navigate("Instrucciones");
  };
  const terapeuta = () => {
    navigator.navigate("Testing", props.route.params.userData);
  };

  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <View style={[Global.globalPadding, { flex: 1, backgroundColor: "white" }]}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}> Home </Text>
        <ScrollView>
          <Text> </Text>

          <Text> </Text>
          <TouchableOpacity onPress={pressHandler}>
            <Image
              source={require("../assets/EJERCICIOS.png")}
              style={{ width: 280, height: 50 }}
            />
          </TouchableOpacity>
          <Text> </Text>
          <TouchableOpacity onPress={guia}>
            <Image
              source={require("../assets/instrucciones.png")}
              style={{ width: 280, height: 50 }}
            />
          </TouchableOpacity>

          <Text> </Text>

          <TouchableOpacity onPress={observTerapia}>
            <Image
              source={require("../assets/observaciones.png")}
              style={{ width: 280, height: 50 }}
            />
          </TouchableOpacity>

          <Text> </Text>

          <TouchableOpacity onPress={acercaDe}>
            <Image
              source={require("../assets/Acerc.png")}
              style={{ width: 280, height: 50 }}
            />
          </TouchableOpacity>

          <Text> </Text>

          <TouchableOpacity onPress={biblio}>
            <Image
              source={require("../assets/biblio.png")}
              style={{ width: 280, height: 50 }}
            />
          </TouchableOpacity>
          <Text> </Text>
          <TouchableOpacity onPress={terapeuta}>
            <Image
              source={require("../assets/terapeuta.png")}
              style={{ width: 280, height: 50 }}
            />
          </TouchableOpacity>
          <Text> </Text>
          <TouchableOpacity onPress={atras}>
            <Image
              source={require("../assets/regresarLog.png")}
              style={{ width: 280, height: 50 }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

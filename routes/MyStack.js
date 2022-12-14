import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FADI from "../screens/FADI";
import Registro from "../screens/Registro";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Sesiones from "../screens/Sesiones";
import Observaciones from "../screens/Observaciones";
import About from "../screens/About";
import Bibliografia from "../screens/Bibliografia";
import Instrucciones from "../screens/Instrucciones";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import Terapeuta from "../screens/Terapeuta";
import Testing from "../screens/Testing";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9932cc",
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="FADI" component={FADI} />

      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Sesiones" component={Sesiones} />

      <Stack.Screen name="Instrucciones" component={Instrucciones} />

      <Stack.Screen name="Observaciones" component={Observaciones} />

      <Stack.Screen name="About" component={About} />

      <Stack.Screen name="Bibliografia" component={Bibliografia} />

      <Stack.Screen name="Testing" component={Testing} />
    </Stack.Navigator>
  );
};

export default MyStack;

import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Global } from "../styles/Global";
import { Overlay } from "react-native-elements";
import FormSuccess from "../componentes/FormSuccess";
import FormError from "../componentes/FormError";
import axios from "axios";
import clienteAxios from "../config/clienteAxios";

const Registro = ({ navigation }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    lastname: "",
    age: null,
    address: "",
    condition: "",
    telephoneNumber: "",
    therapistId: null,

    //patientId: null,
  });
  const [confPassw, setConfPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState();
  const [displayFormError, setDisplayFormError] = useState(false);

  const homePage = () => {
    navigation.push("Home");
  };

  function changeName(value) {
    setUserN(value);
  }

  const handleSubmit = async () => {
    try {
      const respuesta = await clienteAxios.post("/patients/register", formData);
      const data = await respuesta.data;
      console.log(data);
      homePage();
    } catch (error) {
      console.log(error);
    }
  };
  const validateForm = () => {
    var form_inputs = [
      id,
      name,
      lastname,
      email,
      password,
      confPassw,
      age,
      address,
      condition,
      telephoneNumber,
      therapistId,
    ];
    var password_match = password == confPassw;

    if (form_inputs.includes("") || form_inputs.includes(undefined)) {
      setErrorMessage("Complete los espacios en blanco");
      return setDisplayFormError(true);
    }
    if (!password_match) {
      setErrorMessage("Las contraseñas no coinciden");
      return setDisplayFormError(true);
    }
    if (password_match) return handleSubmit();
  };

  const {
    id,
    name,
    lastname,
    email,
    password,
    age,
    address,
    condition,
    telephoneNumber,
    therapistId,
  } = formData;
  return (
    <View style={[Global.globalPadding, { flex: 1, backgroundColor: "white" }]}>
      <View
        style={{
          //justifyContent: 'center',
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/userEnt.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text> </Text>
        <Text style={{ fontWeight: "bold" }}>Registrarse</Text>
        <ScrollView>
          <View style={Global.container}>
            <Text> </Text>

            <TextInput
              style={estilo.input}
              onChangeText={(label) => setFormData({ ...formData, id: label })}
              name="id"
              value={id}
              placeholder="Digite su id"
              keyboardType="numeric"
            />

            <TextInput
              style={estilo.input}
              onChangeText={(label) =>
                setFormData({ ...formData, name: label })
              }
              name="name"
              value={name}
              placeholder="Digite su nombre"
            />
            <TextInput
              style={estilo.input}
              onChangeText={(label) =>
                setFormData({ ...formData, lastname: label })
              }
              name="lastname"
              value={lastname}
              placeholder="Digite apellido"
            />
            <TextInput
              style={estilo.input}
              onChangeText={(label) =>
                setFormData({ ...formData, email: label })
              }
              name="email"
              value={email}
              keyboardType="email-address"
              placeholder="Ingrese su email"
            />

            <TextInput
              style={estilo.input}
              onChangeText={(label) =>
                setFormData({ ...formData, password: label })
              }
              name="password"
              value={password}
              placeholder="Digite su contraseña"
              secureTextEntry={true}
            />

            <TextInput
              style={estilo.input}
              onChangeText={(confPassw) => setConfPassword(confPassw)}
              value={confPassw}
              secureTextEntry={true}
              placeholder="Confirme su contraseña"
            />
            <TextInput
              style={estilo.input}
              onChangeText={(label) => setFormData({ ...formData, age: label })}
              name="age"
              value={age}
              placeholder="Inserte edad"
            />

            <TextInput
              style={estilo.input}
              onChangeText={(label) =>
                setFormData({ ...formData, address: label })
              }
              name="address"
              value={address}
              placeholder="Ingrese su dirección"
            />

            <TextInput
              style={estilo.input}
              onChangeText={(label) =>
                setFormData({ ...formData, condition: label })
              }
              name="condition"
              value={condition}
              placeholder="Inserte condición"
            />
            <TextInput
              style={estilo.input}
              onChangeText={(label) =>
                setFormData({ ...formData, telephoneNumber: label })
              }
              name="telephoneNumber"
              value={telephoneNumber}
              placeholder="Digite su teléfono"
            />
            <TextInput
              style={estilo.input}
              onChangeText={(label) =>
                setFormData({ ...formData, therapistId: label })
              }
              name="therapistId"
              value={therapistId}
              placeholder="Digite el id del terapista"
            />

            <Text> </Text>
            <TouchableOpacity onPress={validateForm}>
              <Image
                source={require("../assets/registrarse.png")}
                style={{ width: 290, height: 40 }}
              />
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity onPress={homePage}>
              <Image
                source={require("../assets/homeB.png")}
                style={{ width: 65, height: 65 }}
              />
            </TouchableOpacity>
            {displayFormError == true ? (
              <FormError
                hideErrOverlay={setDisplayFormError}
                err={errorMessage}
              />
            ) : null}
            {isLoading == true ? (
              <FormSuccess onPress={() => props.hideErrOverlay(false)} />
            ) : successMessage == "Se ha registrado exitosamente" ? (
              <FormSuccess
                successMessage={successMessage}
                close={setSuccessMessage("")}
              />
            ) : null}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const estilo = StyleSheet.create({
  input: {
    height: 50,
    width: 270,
    fontSize: 20,
    borderWidth: 1.5,
    borderColor: "#777",
    margin: 10,
    padding: 10,
  },
});

export default Registro;

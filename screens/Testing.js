import React, { useState, useEffect } from "react";
//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
  xAxes,
  yAxes,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import clienteAxios from "../config/clienteAxios";
import { label } from "./Login";
import { useNavigation } from "@react-navigation/native";

const Testing = (props, { navigation }) => {
  const navigator = useNavigation();
  const { id } = props.route.params;
  const [chartData, setChartData] = useState([]);
  const dataToRender = [];
  const lablesToRender = [];

  const screenWidth = Dimensions.get("window").width;

  const pushHandler = () => {
    navigator.navigate("Home");
  };
  // const handleData = async () => {
  //   try {
  //     const patId = await clienteAxios.get("/patients/:patientId");
  //     //const patientId = await AsyncStorage.getItem("patientId");
  //     const parsedPatientId = parseFloat(patId);
  //     console.log(patId);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    //console.log(patId);

    const fetchData = async () => {
      //const Id = formData.patientId;
      const respuesta = await clienteAxios.get(
        `/exercise-execution/${id}/graph`
      );
      ///exercise-execution/:patientId/exerciseExecution
      setChartData(await respuesta.data.measures);
      console.log(respuesta.data.measures);
    };
    //getPatientId();
    fetchData();
  }, []);

  chartData.map((voltage) => {
    dataToRender.push(parseInt(voltage.voltage));
  });
  chartData.map((timestamp) => {
    lablesToRender.push(
      new Date(timestamp.timestamp).toISOString().split("T")[0]
    );
  });

  return (
    <View style={estilo.container}>
      <ScrollView>
        <Text>Gráfica del ejercio</Text>
        <ScrollView horizontal={true}>
          <LineChart
            data={{
              labels:
                lablesToRender.length <= 0
                  ? ["January", "February", "March", "April", "May", "June"]
                  : lablesToRender,
              datasets: [
                {
                  data:
                    dataToRender.length <= 0
                      ? [
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                        ]
                      : dataToRender,
                },
              ],
            }}
            width={screenWidth + 4000}
            height={220}
            yAxisLabel="S"
            yAxisSuffix="V"
            yAxisInterval={2}
            yLabelsOffset={18}
            xLabelsOffset={7} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#8a2be2",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(1, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 50, 52, ${opacity})`,
              style: {
                borderRadius: 20,
              },
              propsForDots: {
                r: "1",
                strokeWidth: "2",
                stroke: "#8a2be2",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </ScrollView>
        <TouchableOpacity>
          <Image
            source={require("../assets/homeB.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const chartConfig = StyleSheet.create({
  chartstyle: {
    backgroundGradientFrom: "#8a2be2",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#8a2be2",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(1, 52, 52, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    paddingLeft: 15,
  },
});

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Testing;

import React, {useState, useEffect} from 'react';
//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Image, StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Global } from '../styles/Global';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
  xAxes,
  yAxes
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import clienteAxios from '../config/clienteAxios';


const Testing = ({navigation}) => {
  const [chartData,setChartData] = useState([]);
  const dataToRender = [];
  const lablesToRender = [];


 
  const screenWidth = Dimensions.get("window").width;

  const pushHandler = () => {
    navigation.push('Home')
  };

useEffect(() => {
  const fetchData = async () => {
    const respuesta = await clienteAxios.get(`/exercise-execution/${1}/graph`);
    setChartData(await respuesta.data.measures);

  }

 fetchData();
 
},[])
chartData.map((voltage) => {

  dataToRender.push(parseFloat(voltage.voltage))
})
chartData.map((timestamp) => {
  lablesToRender.push(timestamp.timestamp)
})
// console.log("funka");
// console.log(lablesToRender);
// console.log(dataToRender);
  return (

    <View style = {estilo.container}>
      <ScrollView>
        <Text>Gráfica del ejercio</Text>
        <LineChart
          data={{
            labels: lablesToRender === undefined ? []:lablesToRender,//["January", "February", "March", "April", "May", "June"],
            datasets:   [
              {
                  data: dataToRender === undefined ? [] : dataToRender
                // data: [
                //   Math.random() * 100,
                //   Math.random() * 100,
                //   Math.random() * 100,
                //   Math.random() * 100,
                //   Math.random() * 100,
                //   Math.random() * 100
                // ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="S"
          yAxisSuffix="V"
          yAxisInterval={20} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#8a2be2",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(1, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 50, 52, ${opacity})`,
            style: {
              borderRadius: 20
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#8a2be2"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}

      />
        <TouchableOpacity onPress={pushHandler}>
          <Image
              source= {require('../assets/homeB.png')}
              style= {{width: 50, height: 50}}
          />
        </TouchableOpacity>
      </ScrollView>
</View>
    
  )

}

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
    paddingLeft: 15
  }
});

const estilo = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignContent: 'center',
      marginLeft: 10,
      marginRight: 10
  },
});

export default Testing;
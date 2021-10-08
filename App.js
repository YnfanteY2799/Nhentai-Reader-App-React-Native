import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  Home  from "./screens/Home.js";
import  Details  from "./screens/Details.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { Text, Image } from 'react-native-elements';
import cblogo from "./assets/cblogo.jpg";
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-elements/dist/helpers';

const Stack = createNativeStackNavigator();

export default App = () =>{

  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
          options={{
            title:"NHenReader",
            headerLeft:() => <Image source={cblogo} style={{height:37,width:37, marginEnd:5, borderRadius:5}}/>,
            headerRight:() => <Text onPress={() => console.log("Buscando!")}>Buscar : </Text>,
            headerTintColor:"#000000",
            
          }}
        />
        <Stack.Screen name="Detalles" component={Details}/>
      </Stack.Navigator>
      
      <StatusBar/>

    </NavigationContainer>
  );
}


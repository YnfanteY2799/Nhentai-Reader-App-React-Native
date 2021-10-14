import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Deatils from './screens/Deatils.js';
import Tabs from './screens/navigation/Tabs.js';
import Header from './screens/navigation/Header.js';

const Stack = createNativeStackNavigator();

const defaultTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:"transparent",
  }
};

const darkTheme = {
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    border:"transparent",
  }
};

const App = () => {

  let screens = [
    { name:"Deatils", component: Deatils }
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs" >
      
        {/* Tabs */}
        <Stack.Screen name="Tabs" component={Tabs} options={{
          header:() => <Header title="NHentai"/>
        }}/>
        
        {/* Screens */}
        {screens.map(({name,component}, i) => <Stack.Screen key={i} name={name} component={component}/> )}
      
      </Stack.Navigator>
    </NavigationContainer>

  );

}

export default App;

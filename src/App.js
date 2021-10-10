import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Deatils from './screens/Deatils.js';
import Tabs from './screens/navigation/Tabs.js';

const Stack = createNativeStackNavigator();

const Theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:"transparent",
  }
};


const App = () => {

  let screens = [
    { name:"Deatils", component: Deatils }
  ];


  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Tabs">
      
        {/* Tabs */}
        <Stack.Screen name="Tabs" component={Tabs}/>
        
        {/* Screens */}
        {screens.map(({name,component}, i) => <Stack.Screen key={i} name={name} component={component}/> )}
      
      </Stack.Navigator>
    </NavigationContainer>

  );

}

export default App;

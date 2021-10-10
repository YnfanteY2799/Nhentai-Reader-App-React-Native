import React from 'react';
import Home from '../Home';
import Configuration from '../Configuration';
import Search from "../Search.js";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { dashboard_icon, search_icon, notification_icon, menu_icon } from "../../constants/icons.js";
import { COLORS } from '../../constants/theme.js';
import { Image } from 'react-native'; 

const Tab = createMaterialBottomTabNavigator();

const screenOption = ({route}) => ({
    tabBarIcon: ({focused}) => {

        switch(route.name){
            case "Inicio" : 
                return <Image 
                    source={dashboard_icon}
                    resizeMode="contain"
                    style={{tintColor:focused ? COLORS.white : COLORS.gray, width:25, height:25}}
                />
            case "Buscar" : 
                return <Image 
                    source={search_icon}
                    resizeMode="contain"
                    style={{tintColor:focused ? COLORS.white : COLORS.gray, width:25, height:25}}
                />
            case "Configuracion" : 
                return <Image 
                    source={menu_icon}
                    resizeMode="contain"
                    style={{tintColor:focused ? COLORS.white : COLORS.gray, width:25, height:25}}
                />
        }

    },

})


const Tabs = () => 
<Tab.Navigator screenOptions={screenOption} barStyle={{backgroundColor:COLORS.black, }}>
    <Tab.Screen name="Inicio" component={Home}/>
    <Tab.Screen name="Buscar" component={Search}/>
    <Tab.Screen name="Configuracion" component={Configuration}/>
</Tab.Navigator>;

export default Tabs

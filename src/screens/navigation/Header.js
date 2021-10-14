import React from "react";
import { StyleSheet, View } from "react-native";

let stt = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        borderColor:"#000000"
    },
    headerText:{
        fontWeight:"bold",
        fontSize:20,
        color:"#333",
        letterSpacing:1,
    },

});

export default function Header ({ left, center, right }){
    return <>
        <View style={stt.header}>
            
            <View>
                {left !== undefined && left}
            </View>
            
            <View style={stt.headerCenter}>
                { center === undefined && center } 
            </View>

            <View style={stt.headerRight}>
                { right === undefined && right } 
            </View>

        </View>
    </>;
};
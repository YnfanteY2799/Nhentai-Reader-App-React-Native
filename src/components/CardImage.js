import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
    CardImage:{
        display:"flex", 
        margin:4,    
        justifyContent:"space-between",
        width:74, 
        height:100,
        backgroundColor:"#2c292c",
        borderWidth:0,
        borderRadius:5,
    },

});


const CardImage = ({uri = "", code = "000000"}) => {
    let navi = useNavigation();

    return (
        <TouchableOpacity onPress={() =>{ navi.navigate('Deatils', { code } ) }}>
            <Image style={style.CardImage} source={{uri:uri}}/>
        </TouchableOpacity>
    )
}

const CardTileImage = ({uri = ""}) => <>
    <TouchableOpacity>
        <Image style={style.CardImage} source={{uri:uri}}/>
    </TouchableOpacity>
</>
    

export { CardImage, CardTileImage };
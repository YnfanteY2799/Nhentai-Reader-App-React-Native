import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
    CardImage:{
        display:"flex", 
        margin:4,    
        justifyContent:"space-between",
        width:96, 
        height:95,
        backgroundColor:"#2c292c",
        borderWidth:0,
        borderRadius:5,
    }



});

const def = "https://previews.123rf.com/images/pavlostv/pavlostv1805/pavlostv180500401/101741080-vaya-p%C3%A1gina-de-error-404-no-encontrada-concepto-de-robot-futurista-vector.jpg";

const CardImage = ({uri = def, code}) => {


    const navigation = useNavigation();


    return (
        <TouchableOpacity
            onPress={() => navigation.navigate( 'Detalles', { code } ) }
        >
            <Image 
                source={{
                    uri:uri
                }}
                style={style.CardImage}
            />
        </TouchableOpacity>
    )
}



export default CardImage;

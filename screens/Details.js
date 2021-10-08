import React from 'react'
import { Text, View, Image } from 'react-native'

const Details = ({route:{params:{code}}}) => {
    
    console.log(code)

    return (
        <View>
            <Image source={{uri:"https://i.nhentai.net/galleries/2029960/1.jpg"}} style={{height:100, width:100}}/>
        </View>
    )
    
};

export default Details ;

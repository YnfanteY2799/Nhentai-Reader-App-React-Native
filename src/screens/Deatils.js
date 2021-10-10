import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import { TileImageList } from '../components/ImageList';
import { apiLink } from '../constants/api';

const Deatils = ({route:{params:{code}}}) => {

    let getDoujin = () => {
        fetch( apiLink("/api/getDoujinFromCode") , 
            {
                method:"POST", 
                body:JSON.stringify({code:code}),     
                headers: { 'Content-Type': 'application/json'}, 
            }
        ).then(x => x.json()).then(x => setActualDoujin(x) );
    }

    // Statefull-variables
    let [ actualDoujin, setActualDoujin ] = useState({}); 


    useEffect(() => getDoujin() , []);

    return <View>
        <Text>aaaa</Text>

        <TileImageList data={actualDoujin} />
    </View>
    
}

export default Deatils;

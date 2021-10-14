import React, {useEffect, useState} from 'react';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { TileImageList } from '../components/ImageList';
import { apiLink } from '../constants/api';
import { useNavigation } from '@react-navigation/native';
import { page_icon } from '../constants/icons';

const BackComponent = () => {  
  const navi = useNavigation();
  return (
    <TouchableOpacity onPress={() => navi.goBack()}> 
        {/* <Icon/> */}
    </TouchableOpacity>
  );
};

const Deatils = ({ route:{params:{code}}}) => {

    let navi = useNavigation();
    navi.setOptions({
        headerRight: () => <BackComponent/>,
        title:`${code}`
    });


    let getDoujin = () => {
        fetch( apiLink(`/api/getDoujinFromCode`) , 
            {
                method:"POST", 
                body:JSON.stringify({code:code}),     
                headers: { 'Content-Type': 'application/json'}, 
            }
        ).then(x => x.json()).then(x =>{ 
            console.log(x.ogImages);
            setActualDoujin(x); 
        });
    }

    // Statefull-variables
    let [ actualDoujin, setActualDoujin ] = useState({});

    useEffect(() => getDoujin() , []);

    return <> 
        <ImageBackground source={{uri:"https://c.tenor.com/4xJ6FpIr5B4AAAAC/uraraka-now-loading.gif"}}>
            <View style={{opacity:2, backgroundColor: "#000000c0"}}>
                <TileImageList data={actualDoujin} />        
            </View>
        </ImageBackground>
    </>;
    
}

export default Deatils;

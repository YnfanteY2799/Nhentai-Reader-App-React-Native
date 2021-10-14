import React, { useState, useEffect } from 'react';
import { ImageList, HorizontalImageList } from '../components/ImageList.js';
import { View, Text, SafeAreaView } from 'react-native';
import { apiLink } from '../constants/api.js';


const Home = () => {

    const [ popularDoujins, setPopularDoujins ] = useState([]);
    const [ noPopularDoujins, setNoPopularDoujins ] = useState([]);




    const getInitialData = () => {
    
        // NHentai.getRequest();
    
        fetch( apiLink("/api/getIndexScreen") ).
        then(x => x.json()).then(({pop, noPop}) =>{
            setNoPopularDoujins(noPop);
            setPopularDoujins(pop);
        });

    }

    useEffect(() => {
    
        getInitialData();
    
    }, []);


    return (
        <SafeAreaView>
        
            <View style={{paddingLeft:1}}>
                <Text>Populares del Momento : </Text>
                <HorizontalImageList data={popularDoujins} />
            </View>

            <View style={{paddingLeft:1}}>
                <Text>Recientes : </Text>
                <ImageList data={noPopularDoujins} />
            </View>
        
        </SafeAreaView>
    );
}

export default Home;




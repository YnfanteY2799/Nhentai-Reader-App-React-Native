import React, { useState, useEffect } from 'react'
import { ImageList } from '../components/ImageList.js';
import { Header } from 'react-native-elements/dist/header/Header';
import { View, Text, SafeAreaView } from 'react-native';
import { COLORS } from '../constants/theme.js';
import { apiLink } from '../constants/api.js';

const Home = () => {

    const [ popularDoujins, setPopularDoujins ] = useState([]);
    const [ noPopularDoujins, setNoPopularDoujins ] = useState([]);

    const getInitialData = () => {
        fetch( apiLink("/api/getIndexScreen") ).
        then(x => x.json()).then(({pop, noPop}) =>{        
            setPopularDoujins(pop); 
            setNoPopularDoujins(noPop); 
        });

    }

    useEffect(() => {
    
        getInitialData();
    
    }, []);


    return (
        <SafeAreaView style={{backgroundColor:COLORS.black}}>
            <Header
                placement="left"
                leftComponent={{icon:"menu",  iconStyle: { color: '#fff' }}}
            />
            <View style={{paddingLeft:1}}>
                <Text>Populares del Momento : </Text>
                <ImageList data={popularDoujins}/>
            </View>
            <View style={{paddingLeft:1}}>
                <Text>Recientes : </Text>
                <ImageList data={noPopularDoujins}/>
            </View>
        </SafeAreaView>

    );
}

export default Home;

import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import ImageList from '../components/imageList';


const Home = () => {
    
  // functions
  let loadImg = () => {
    fetch("http://192.168.1.101:3066/getMain")
    .then(x => x.json()).then(x => setView(x) );

  }

  // State-vars
  const [ view, setView ] = useState([]); 


  useEffect(() => {
    loadImg();
  },[]);

    return (
        <View>            
            <ImageList data={view}/>
        </View>
    )
    
};

export default Home;

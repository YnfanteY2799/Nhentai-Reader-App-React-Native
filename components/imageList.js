import React from 'react'
import { View, Text, FlatList } from 'react-native';
import CardImage from './CardImage';

const ImageList = ( { data } ) => {
    const renderItem = ({item:{name, coverScr, link, index}}) => {
        return(
            <View>
                <CardImage uri={coverScr} code={link}/> 
                {/* <Text key={index - 1}>{name}</Text> */}
            </View>
        )
    }

    return (
        <View>
            <FlatList 
               data={data}
               numColumns={4}
               renderItem={renderItem}
               keyExtractor={({index}) => index + ''}
            />
        </View>
    )

};

export default ImageList;

import React from 'react';
import { FlatList, View, Item, Image } from 'react-native';
import { CardImage, CardTileImage } from './CardImage.js';
import { Card } from "react-native-elements"

let renderItems = ({ item:{ coverScr, code } }) => 
    <View>
        <CardImage uri={coverScr} code={code}/>
    </View>
;

const ImageList = ({ data }) => <>
    <FlatList
        data={data}
        numColumns={5}
        renderItem={renderItems}
        keyExtractor={({index}) => index + ''}
    />
</>;

const HorizontalImageList = ({ data }) => <>
    <FlatList
        data={data}
        horizontal
        renderItem={renderItems}
        keyExtractor={({index}) => index + ''}
    />
</>;

let renderTileItems = ({ item:{tileView} }) => 
<View>
    <CardTileImage uri={tileView} />
</View>
;

const TileImageList = ({ data:{tiles}, numColumns = 5 }) => <>
    <FlatList 
        data = {tiles}
        numColumns = {numColumns}
        renderItem={renderTileItems}
        keyExtractor={(x,i) => i + ''}
    />
</>;


export { ImageList, TileImageList, HorizontalImageList };

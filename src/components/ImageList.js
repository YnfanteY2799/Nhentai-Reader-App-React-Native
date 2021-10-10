import React from 'react';
import { FlatList, View, Item } from 'react-native';
import {CardImage, CardTileImage} from './CardImage.js';

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
        keyExtractor={({index}) => index + ''}
    />
</>;



export { ImageList, TileImageList };

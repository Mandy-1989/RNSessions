import React from 'react';
import { View, Text } from 'react-native';
import Cars from './Cars';


const ProductList = () => (
    <View>
        <Text style={{ margin: 20 }}>Product list:</Text>
        <Cars />
    </View>
);

export default ProductList;
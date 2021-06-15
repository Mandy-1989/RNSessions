import React from 'react';
import { Text, View } from 'react-native';
import Provider from './Provider';
import ProductList from './ProductList';

const Home = ({ params, }) => {
    return (
        <Provider>
            <ProductList />
        </Provider>
    )
}

export default Home;

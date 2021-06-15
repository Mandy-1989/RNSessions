import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';



const Car = props => (
    <View style={{ margin: 20 }}>
        <Text>Name: {props.name}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'center', width: 100 }}>
            <Text>{"Price:"}</Text>
            <TouchableOpacity style={{backgroundColor:"#ADD8E6",padding:2}} onPress={props.incrementPrice}>
                <Text>{"+"}</Text>
            </TouchableOpacity>
            <Text>{props.price}</Text>
            <TouchableOpacity style={{backgroundColor:"#ADD8E6",padding:2}} onPress={props.decrementPrice}>
                <Text>{"-"}</Text>
            </TouchableOpacity>
        </View>
    </View>
);

export default Car;
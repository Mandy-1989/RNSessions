/**
 * App Navigator
 * */


import React from "react";
import Login from "../containers/screens/Login";
import tabNavigator from './tabNavigator';
import {createStackNavigator} from "@react-navigation/stack";

const AppNavigator = () => {
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Dashboard' component={tabNavigator} />
        </Stack.Navigator>
    )
};

export default AppNavigator;

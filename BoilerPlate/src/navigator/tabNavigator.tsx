/**
 * Tab Navigator
 * */

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import colors from "../assets/colors";
import Dashboard from "../containers/screens/Dashboard";
import Proposals from "../containers/screens/Proposals";
import Invoices from "../containers/screens/Invoices";
import CheckIn from "../containers/screens/CheckIn";
import MyAttention from "../containers/screens/MyAttention";
import WorkOrder from "../containers/screens/WorkOrder";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// DashboardRoute Screens
const DashboardRoute = () => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator initialRouteName={'Home'} headerMode="none">
            <Stack.Screen name='Home' component={Dashboard} />
            <Stack.Screen name='Proposals' component={Proposals} />
            <Stack.Screen name='Invoices' component={Invoices} />
        </Stack.Navigator>
    )
}

// Tab Navigator
const tabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator
            initialRouteName="Dashboard"
            tabBarOptions={{
                activeTintColor: colors.black,
                inactiveTintColor: colors.grey_1,
                showLabel: false,
            }}
        >
        <Tab.Screen name="Dashboard" component={DashboardRoute}
            listeners={({ navigation, route }) => ({
                tabPress: e => {
                    if (route.state && route.state.routeNames.length > 0) {
                        navigation.navigate('Dashboard');
                    }
                },
            })}
            options={{tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={30} />)}}
        />
        <Tab.Screen name="CheckIn" component={CheckIn} options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="clock-time-nine-outline" color={color} size={30} />
        ),
        }} />
        <Tab.Screen name="MyAttention" component={MyAttention} options={{
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="exclamationcircleo" color={color} size={25} />
        ),
        }} />
        <Tab.Screen name="WorkOrder" component={WorkOrder} options={{
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="user" color={color} size={25} />
        ),
        }} />
    </Tab.Navigator>
)};

export default tabNavigator

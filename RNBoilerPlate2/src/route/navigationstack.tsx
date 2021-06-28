import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import {navigationRef} from './navigationservice';
import {horizontalAnimation} from '../utils/horizontalAnimation';

import {
  Setting,
  Signup,
  ForgotPassword,
  Lunch,
  Notification,
  //Login,
} from '../screens';
import {DrawerStack} from './drawerstack';
import login from '../screens/login';

const TransitionScreenOptions = {
  //...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
  headerShown: false,
};

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

// signout stack
const SignedOutStack = props => {
  return (
    <AuthStack.Navigator screenOptions={TransitionScreenOptions}>
      <Stack.Screen name="Login" component={login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};
// signin stack
const SignedInStack = props => {
  return (
    <LoggedInStack.Navigator
      initialRouteName={'DrawerStack'}
      screenOptions={TransitionScreenOptions}>
      <Stack.Screen name="DrawerStack" component={DrawerStack} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Notification" component={Notification} />
    </LoggedInStack.Navigator>
  );
};

// root stack
export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Lunch'}
      screenOptions={TransitionScreenOptions}>
      <Stack.Screen name="Lunch" component={Lunch} />
      <Stack.Screen name="SignedInStack" component={SignedInStack} />
      <Stack.Screen name="SignedOutStack" component={SignedOutStack} />
    </Stack.Navigator>
  );
};

// root navigation
export const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
};

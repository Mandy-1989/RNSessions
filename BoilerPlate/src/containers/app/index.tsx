/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'store';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from '../../navigator/index';

const App: FC = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    )
};

export default () => (
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
);

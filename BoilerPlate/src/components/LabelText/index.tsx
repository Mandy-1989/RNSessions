import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import colors from 'assets/colors';

interface LabelTextProps {
    title: string;
}

const LabelText: FC<LabelTextProps> = ({ title }) => {
    return (
        <Text style={styles.loginText}>{title}</Text>
    );
};

const styles = StyleSheet.create({
    loginText: {
        fontSize: 40,
        textAlign: 'center',
        color: colors.blue,
        fontFamily: 'FiraSans-Regular'
    }
})

export default LabelText;
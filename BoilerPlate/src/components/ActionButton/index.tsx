import colors from 'assets/colors';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ActionButtonProps {
    title: string,
    onButtonPress: any
}

const ActinButton: FC<ActionButtonProps> = ({ title, onButtonPress }) => {
    return (
        <TouchableOpacity style={styles.touchableView}
            onPress={onButtonPress}>
            <Text style={styles.labelText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchableView: {
        marginTop: 30,
        backgroundColor: colors.blue,
        padding: 10
    },
    labelText: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'FiraSans-Bold'
    }
})

export default ActinButton;
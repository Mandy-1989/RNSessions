import React, { FC } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TouchableOpacity
} from 'react-native';
import colors from "assets/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from 'react-native-vector-icons/Ionicons';

interface HeaderProps {
    title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewLeftEnd}>
                <TouchableOpacity style={styles.touchableMenu}>
                    <AntDesign name="menuunfold" color={colors.white} size={22} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableMenu}>
                    <Entypo name="chat" color={colors.white} size={22} />
                </TouchableOpacity>
            </View>
            <Text style={styles.txtTitle}>{title}</Text>
            <View style={styles.viewLeftEnd}>
                <TouchableOpacity style={styles.touchableMenu}>
                    <Ionicons name="notifications-outline" color={colors.white} size={22} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableMenu}>
                    <AntDesign name="search1" color={colors.white} size={22} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue_4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    txtTitle: {
        color: colors.white,
        fontFamily: 'FiraSans-Bold',
        fontSize: 18,
    },
    viewLeftEnd: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchableMenu: {
        padding: 10
    }
})

export default Header;
import React, { FC } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles';
import { useTranslation } from "react-i18next";
import colors from "assets/colors";
import SubLabelText from "components/SubLabelText";
import Header from 'components/Header';

const CheckIn = (props: any) => {
    const { t } = useTranslation();

    return (
        <SafeAreaView style={styles.container}>
            <Header title={t('str_check_in_out')} />
            <View style={styles.content}>
                <SubLabelText title={t('str_check_in_out')} textColor={colors.blue_1} customStyle={styles.labelStyle} />
            </View>
        </SafeAreaView>
    )
}

export default CheckIn;

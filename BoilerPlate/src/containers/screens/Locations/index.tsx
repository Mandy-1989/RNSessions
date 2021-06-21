import React, { FC } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles';
import { useTranslation } from "react-i18next";
import SubLabelText from "components/SubLabelText";
import colors from "assets/colors";

const Locations = (props: any) => {
    const { t } = useTranslation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <SubLabelText title={t('str_location')} textColor={colors.blue_1} customStyle={styles.labelStyle} />
            </View>
        </SafeAreaView>
    )
}

export default Locations;

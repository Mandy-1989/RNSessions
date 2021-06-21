import React, { FC } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles';
import { useTranslation } from "react-i18next";
import SubLabelText from "components/SubLabelText";
import Header from 'components/Header';
import colors from "assets/colors";

const WorkOrder = (props: any) => {
    const { t } = useTranslation();

    return (
        <SafeAreaView style={styles.container}>
            <Header title={t('str_work_order')} />
            <View style={styles.content}>
                <SubLabelText title={t('str_work_order')} textColor={colors.blue_1} customStyle={styles.labelStyle} />
            </View>
        </SafeAreaView>
    )
}

export default WorkOrder;

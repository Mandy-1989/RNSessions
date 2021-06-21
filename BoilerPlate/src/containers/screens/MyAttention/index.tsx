import React, { FC } from 'react';
import { View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import colors from 'assets/colors';
import SubLabelText from "components/SubLabelText";
import Header from 'components/Header';
import paths from './gridData';
import { useTranslation } from "react-i18next";
import { StyleSheet } from 'react-native';

const MyAttention = (props: any) => {
    const { t } = useTranslation();

    const onPressItem = (item: any) => {
        if (item.key === 'emergency_WO') {
        } else if (item.key == 'scheduled_today') {
        } else if (item.key === 'invoice_approve') {
        } else if (item.key === 'proposal_approve') {
        } else if (item.key === 'expired_ETA') {
        } else {
        }
    };

    const renderGrid = () => {
        return paths.map((path: any, index: number) => {
            return (
                <TouchableOpacity key={index} onPress={() => onPressItem(path)}>
                    <View style={index % 2 === 0 ? [styles.gridView,] : [styles.gridView, { backgroundColor: (path.key == 'scheduled_today') ? colors.blue_2 : colors.white }]}>
                        {path.badges &&
                            <View style={[styles.badgesView, { backgroundColor: path.badgesColor }]}>
                                <SubLabelText title={path.badges} textColor={colors.white} customStyle={{ marginTop: 0 }} />
                            </View>
                        }
                        {path.icon}
                        <SubLabelText title={t(path.title)} textColor={(path.key == 'scheduled_today') ? colors.white : colors.blue_3} />
                    </View>
                </TouchableOpacity>
            );
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={t('str_my_attention')} />
            <ScrollView showsVerticalScrollIndicator={false}
                style={styles.containerView}>
                <View style={styles.gridStyle}>
                    {renderGrid()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default MyAttention;
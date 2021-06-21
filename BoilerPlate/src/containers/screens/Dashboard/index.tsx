import React, { FC } from 'react';
import { View, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import styles from './styles';
import colors from 'assets/colors';
import SubLabelText from "components/SubLabelText";
import paths from './gridData';
import { useTranslation } from "react-i18next";
import AppImages from 'assets/images';

const Dashboard = (props: any) => {
    const { t } = useTranslation();

    const onPressItem = (item: any) => {
        if (item.key === 'my_attention') {
            props.navigation.navigate('MyAttention');
        } else if (item.key == 'check_in_out') {
            props.navigation.navigate('CheckIn');
        } else if (item.key === 'asset') {

        } else if (item.key === 'work_order') {
            props.navigation.navigate('WorkOrder');
        } else if (item.key === 'proposals') {
            props.navigation.navigate('Dashboard', { screen: 'Proposals' });
        } else if (item.key === 'invoices') {
            props.navigation.navigate('Dashboard', { screen: 'Invoices' });
        } else {

        }
    };

    const renderGrid = () => {
        return paths.map((path: any, index: number) => {
            return (
                <TouchableOpacity key={index} onPress={() => onPressItem(path)}>
                    <View style={index % 2 === 0 ? [styles.gridView, { backgroundColor: (index === 0) ? colors.white : colors.blue_2 }] : [styles.gridView,]}>
                        {path.badges &&
                            <View style={[styles.badgesView, { backgroundColor: path.badgesColor }]}>
                                <SubLabelText title={path.badges} textColor={colors.white} customStyle={{ marginTop: 0 }} />
                            </View>
                        }
                        {path.icon}
                        <SubLabelText title={t(path.title)} textColor={(index === 0) ? colors.blue_1 : colors.white} />
                    </View>
                </TouchableOpacity>
            );
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={AppImages.appIcon} style={styles.appIconImage} resizeMode={'contain'} />
                <View style={styles.gridStyle}>
                    {renderGrid()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Dashboard;

/**
 * Dashboard Grid Data
 * */

import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../../assets/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BADGES = {  "my_attention": 8, "work_orders": 81,  "proposals": 14,  "invoices": 13};

const paths = [
    {
        key: 'my_attention',
        title: 'str_my_attention',
        badges: BADGES['my_attention'],
        badgesColor: colors.green,
        icon: <AntDesign name="exclamationcircleo" color={colors.blue_1} size={80} />,
    },
    {
        key: 'check_in_out',
        title: 'str_check_in_out',
        icon: <MaterialCommunityIcons name="clock-time-nine-outline" color={colors.white} size={80} />
    },
    {
        key: 'asset',
        title: 'str_asset',
        icon:  <AntDesign name="Safety" color={colors.white} size={80} />
    },
    {
        key: 'work_order',
        title: 'str_work_order',
        badges: BADGES['work_orders'],
        badgesColor: colors.red,
        icon:  <MaterialCommunityIcons name="account-box-outline" color={colors.white} size={80} />
    },
    {
        key: 'proposals',
        title: 'str_proposal',
        badges: BADGES['proposals'],
        badgesColor: colors.red,
        icon:  <FontAwesome name="handshake-o" color={colors.white} size={80} />
    },
    {
        key: 'invoices',
        title: 'str_invoice',
        badges: BADGES['invoices'],
        badgesColor: colors.red,
        icon: <FontAwesome5 name="file-invoice-dollar" color={colors.white} size={80} />
    },
];

export default paths;

/**
 * Dashboard Grid Data
 * */

import React from "react";
import colors from "../../../assets/colors";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BADGES = {  "scheduled_today": 2 };

const paths = [
    {
        key: 'emergency_WO',
        title: 'str_emergency_WO',
        icon: <Fontisto name="world-o" color={colors.blue_3} size={80} />,
    },
    {
        key: 'scheduled_today',
        title: 'str_scheduled_today',
        badges: BADGES['scheduled_today'],
        badgesColor: colors.red,
        icon: <MaterialCommunityIcons name="calendar-check" color={colors.white} size={80} />,
    },
    {
        key: 'invoice_approve',
        title: 'str_invoice_approve',
        icon: <FontAwesome5 name="file-invoice-dollar" color={colors.blue_3} size={80} />,
    },
    {
        key: 'proposal_approve',
        title: 'str_proposal_approve',
        icon: <FontAwesome name="handshake-o" color={colors.blue_3} size={80} />,
    },
    {
        key: 'expired_ETA',
        title: 'str_expired_ETA',
        icon: <MaterialCommunityIcons name="clock-alert-outline" color={colors.blue_3} size={80} />,
    },
];

export default paths;

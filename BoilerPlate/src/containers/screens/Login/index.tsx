import React, { FC, useState } from 'react';
import { View, Text, SafeAreaView, Alert } from 'react-native';
import styles from './styles';
import { useTranslation } from "react-i18next";
import LabelText from 'components/LabelText';
import SubLabelText from 'components/SubLabelText';
import TextInputField from 'components/TextInputField';
import ActionButton from 'components/ActionButton';
import colors from 'assets/colors';
import { validateEmail, isEmpty } from 'utils/validate';

const Login = (props: any) => {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onUserLogin = () => {
        if (isEmpty(email)) {
            Alert.alert(t('str_email_empty_validation'))
        } else if (!validateEmail(email)) {
            Alert.alert(t('str_valid_email_validation'))
        } else if (isEmpty(password)) {
            Alert.alert(t('str_password_empty_validation'))
        } else {
            props.navigation.push('Dashboard');
        }
    }

    const onEmailChangeText = (email: string) => {
        setEmail(email)
    }

    const onPasswordChangeText = (password: string) => {
        setPassword(password)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginView}>
                <LabelText title={t('str_login_title')}></LabelText>
            </View>

            <View style={styles.formView}>
                <SubLabelText title={t('str_user_name')}
                    textColor={colors.grey_2}>
                </SubLabelText>

                <TextInputField inputValue={email}
                    onChange={onEmailChangeText}
                    secureEntry={false} />

                <SubLabelText title={t('str_password')}
                    textColor={colors.grey_2}>
                </SubLabelText>

                <TextInputField inputValue={password}
                    onChange={onPasswordChangeText}
                    secureEntry={true} />

                <SubLabelText title={t('str_forgot_password')}
                    textColor={colors.blue}>
                </SubLabelText>

                <ActionButton title={t('str_login')}
                    onButtonPress={onUserLogin}>
                </ActionButton>
            </View>
        </SafeAreaView>
    )
}

export default Login;

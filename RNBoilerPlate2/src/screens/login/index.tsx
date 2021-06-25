import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MyStatusBar} from '../../components';
import {setIsLogin} from '../../services';
import {Colors, smartScale} from '../../theme';
import styles from './style';

interface IProps {
  navigation: any;
}

export const Login: React.FC<IProps> = props => {
  const goHome = () => {
    setIsLogin(true);
    props.navigation.reset({
      routes: [{name: 'SignedInStack'}],
    });
  };

  return (
    <View style={{flex: 1}}>
      <MyStatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <View style={styles.container}>
        <Text>{'This is login screen!'}</Text>
        <TouchableOpacity style={{marginTop: smartScale(20)}} onPress={goHome}>
          <Text>{'Login'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginTop: smartScale(20)}}
          onPress={() => props.navigation.navigate('Signup')}>
          <Text>{'Signup'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: smartScale(20)}}
          onPress={() => props.navigation.navigate('ForgotPassword')}>
          <Text>{'Forgot Password'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

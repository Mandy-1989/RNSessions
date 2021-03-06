import React from 'react';
import {View, ScrollView, Text, SafeAreaView,StyleSheet} from 'react-native';
import {Headers} from '../../components';

import I18n from '../../I18n/I18n';
import {Colors, smartScale} from '../../theme';
import {WebView} from 'react-native-webview';

interface IProps {
  navigation: any;
}

export const Profile: React.FC<IProps> = props => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Headers
          title={I18n.t('profile.title')}
          navigation={props.navigation}
          leftButtonType={'menu'}
          leftIcon={'md-menu'}
          leftAction={() => props.navigation.openDrawer()}
        />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>{'Profil screen !'}</Text>
        </View>
      </View>
      <SafeAreaView style={styles.safeAreaBottomeContainer} />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.green,
  },
  safeAreaBottomeContainer: {
    flex: 0,
    backgroundColor: Colors.white,
  },
});

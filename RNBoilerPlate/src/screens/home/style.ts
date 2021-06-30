import {StyleSheet} from 'react-native';
import {Colors, smartScale} from '../../theme';

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
  indicatorContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  postListContainer: {flex: 1, margin: smartScale(10)},
  textInputContainerStyle: {
    borderRadius: smartScale(10),
    borderColor: Colors.grey,
    borderWidth: 1,
  },
  iconStyle: {
    marginLeft: smartScale(5),
    color: Colors.grey,
    marginRight: smartScale(5),
  },
});

export default styles;
import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.red,
  },
  safeAreaBottomeContainer: {
    flex: 0,
    backgroundColor: Colors.red,
  },
});

export default styles;

import { StyleSheet } from 'react-native'
import colors from 'assets/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.blue_4
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelStyle: {
        fontSize: 20
    }
});

export default styles;

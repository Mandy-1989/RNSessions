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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    labelStyle: {
        fontSize: 20
    }
})

export default styles;


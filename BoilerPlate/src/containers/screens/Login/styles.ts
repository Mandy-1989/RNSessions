import { Platform, StyleSheet } from 'react-native'
import colors from 'assets/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.white
    },
    loginView: {
        marginVertical: 50
    },
    formView: {
        marginHorizontal: 20
    }
})

export default styles;
import { StyleSheet, Dimensions, Platform } from 'react-native'
import colors from 'assets/colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.blue_1
    },
    appIconImage: {
        height: 50,
        width: 300,
        alignSelf: 'center',
        marginVertical: (Platform.OS === 'ios') ? 8 : 0
    },
    gridStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: (Platform.OS === 'android') ? 10 : 20,
    },
    gridView: {
        height: (width / 1.85 - 18),
        width: width / 2 - 30,
        backgroundColor: colors.blue_2,
        marginBottom: 25,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.blue_3,
        shadowOpacity: 0.5,
        elevation: 2,
        shadowOffset: {
            height: 0,
            width: 0
        },
    },
    badgesView: {
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 17,
        right: 17,
    }
});

export default styles;

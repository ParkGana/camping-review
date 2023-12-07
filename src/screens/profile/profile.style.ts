import { StyleSheet } from 'react-native'
import { Color } from '../../configuration/color'
import { Typography } from '../../configuration/typography'

export const styles = StyleSheet.create({
    Container: {
        margin: 10
    },
    ActionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10
    },
    EditText: {
        color: Color.blue,
        fontSize: Typography.body1.fontSize,
        fontWeight: Typography.body1.fontWeight,
        lineHeight: Typography.body1.lineHeight
    },
    CharacteristicContainer: {
        width: '100%',
        alignItems: 'center',
        padding: 15,
        marginTop: 10,
        borderWidth: 2,
        borderColor: Color.gray,
        borderRadius: 10,
        backgroundColor: Color.white
    },
    CharacteristicText: {
        color: Color.black,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight
    },
    LogoutContainer: {
        width: '100%',
        alignItems: 'center',
        padding: 15,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: Color.black
    },
    LogoutText: {
        color: Color.white,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight
    }
})

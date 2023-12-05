import { StyleSheet } from 'react-native'
import { Color } from '../../configuration/color'
import { Typography } from '../../configuration/typography'

export const styles = StyleSheet.create({
    Container: {
        marginVertical: 30
    },
    Title: {
        marginBottom: 20,
        color: Color.black,
        fontSize: Typography.headline3.fontSize,
        fontWeight: Typography.headline3.fontWeight,
        lineHeight: Typography.headline3.lineHeight
    },
    Explanation: {
        marginBottom: 20,
        color: Color.black,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight
    },
    ConnectionContainer: {
        alignItems: 'center'
    },
    SearchContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    TextInput: {
        width: '78%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: Color.gray,
        borderRadius: 10,
        backgroundColor: Color.white,
        color: Color.black,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight
    },
    Text: {
        color: Color.black,
        fontSize: Typography.body1.fontSize,
        fontWeight: Typography.body1.fontWeight,
        lineHeight: Typography.body1.lineHeight,
        marginBottom: 20
    },
    ButtonContainer: {
        width: '20%',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        backgroundColor: Color.black
    },
    ButtonText: {
        color: Color.white,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight
    }
})

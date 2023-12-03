import { StyleSheet } from 'react-native'
import { Color } from '../../configuration/color'
import { Typography } from '../../configuration/typography'

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Title: {
        marginBottom: 20,
        color: Color.black,
        fontSize: Typography.headline1.fontSize,
        fontWeight: Typography.headline1.fontWeight,
        lineHeight: Typography.headline1.lineHeight
    },
    InputContainer: {
        width: '80%'
    },
    TextInput: {
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
    ButtonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    Button: {
        width: '100%',
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
    },
    SubButton: {
        marginTop: 10
    },
    SubButtonText: {
        color: Color.gray,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight,
        textDecorationLine: 'underline'
    }
})

import { StyleSheet } from 'react-native'
import { Color } from '../../configuration/color'
import { Typography } from '../../configuration/typography'

export const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: Color.lightgray,
        borderRadius: 100
    },
    TextInput: {
        width: '80%',
        color: Color.black,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight
    },
    AddText: {
        color: Color.blue,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight
    }
})

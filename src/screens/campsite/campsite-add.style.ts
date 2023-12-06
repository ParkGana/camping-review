import { StyleSheet } from 'react-native'
import { Color } from '../../configuration/color'
import { Typography } from '../../configuration/typography'

export const styles = StyleSheet.create({
    Container: {
        margin: 10
    },
    ActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    CancelText: {
        color: Color.black,
        fontSize: Typography.body1.fontSize,
        fontWeight: Typography.body1.fontWeight,
        lineHeight: Typography.body1.lineHeight
    },
    EditText: {
        color: Color.blue,
        fontSize: Typography.body1.fontSize,
        fontWeight: Typography.body1.fontWeight,
        lineHeight: Typography.body1.lineHeight
    }
})

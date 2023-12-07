import { StyleSheet } from 'react-native'
import { Color } from '../../configuration/color'
import { Typography } from '../../configuration/typography'

export const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10
    },
    CharacteristicText: {
        color: Color.black,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight
    },
    DeleteText: {
        color: Color.red,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight
    }
})

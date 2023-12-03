import { StyleSheet } from 'react-native'
import { Color } from '../../configuration/color'
import { Typography } from '../../configuration/typography'

export const styles = StyleSheet.create({
    Container: {
        padding: 20,
        marginVertical: 10,
        borderLeftWidth: 5,
        borderLeftColor: Color.lightgray,
        backgroundColor: Color.white
    },
    TitleText: {
        color: Color.black,
        fontSize: Typography.body1.fontSize,
        fontWeight: Typography.body1.fontWeight,
        lineHeight: Typography.body1.lineHeight,
        marginBottom: 10
    },
    ContentText: {
        color: Color.black,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight,
        marginBottom: 10
    },
    DateText: {
        color: Color.gray,
        fontSize: Typography.body3.fontSize,
        fontWeight: Typography.body3.fontWeight,
        lineHeight: Typography.body3.lineHeight,
        marginRight: 15
    },
    FeelingIcon: {
        width: 24,
        height: 24
    }
})

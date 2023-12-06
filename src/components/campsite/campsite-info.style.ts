import { StyleSheet } from 'react-native'
import { Color } from '../../configuration/color'
import { Typography } from '../../configuration/typography'

export const styles = StyleSheet.create({
    Container: {
        position: 'relative',
        padding: 10,
        marginVertical: 10,
        backgroundColor: Color.white,
        borderWidth: 2,
        borderColor: Color.gray,
        borderRadius: 10
    },
    IconContainer: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    FeelingIcon: {
        width: 24,
        height: 24
    },
    DataContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    FieldText: {
        color: Color.gray,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight,
        marginRight: 20
    },
    NameText: {
        color: Color.black,
        fontSize: Typography.title3.fontSize,
        fontWeight: Typography.title3.fontWeight,
        lineHeight: Typography.title3.lineHeight
    },
    ValueText: {
        color: Color.black,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight
    }
})

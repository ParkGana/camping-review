import { StyleSheet } from 'react-native'
import { Color } from '../../configuration/color'
import { Typography } from '../../configuration/typography'

export const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginVertical: 10,
        backgroundColor: Color.white,
        borderWidth: 2,
        borderColor: Color.gray,
        borderRadius: 10
    },
    TitleText: {
        color: Color.black,
        fontSize: Typography.title3.fontSize,
        fontWeight: Typography.title3.fontWeight,
        lineHeight: Typography.title3.lineHeight,
        marginBottom: 10
    },
    AddressText: {
        color: Color.gray,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight,
        marginBottom: 10
    },
    TimeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    TimeText: {
        color: Color.black,
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

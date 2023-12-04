import { StyleSheet } from 'react-native'
import { Color } from '../../configuration/color'
import { Typography } from '../../configuration/typography'

export const styles = StyleSheet.create({
    ProfileContainer: {
        alignItems: 'center',
        margin: 20
    },
    ImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: Color.lightgray,
        overflow: 'hidden'
    },
    ProfileImage: {
        width: 100,
        height: 100
    },
    InfoContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: Color.white
    },
    DataContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    FieldText: {
        width: 70,
        color: Color.gray,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight,
        marginRight: 10
    },
    ValueText: {
        color: Color.black,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight
    }
})

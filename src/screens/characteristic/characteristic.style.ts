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
    BackIcon: {
        width: 24,
        height: 18
    },
    CharacteristicContainer: {
        padding: 20,
        marginVertical: 10,
        backgroundColor: Color.white,
        borderRadius: 10
    },
    CharacteristicTitle: {
        marginBottom: 10,
        color: Color.black,
        fontSize: Typography.title2.fontSize,
        fontWeight: Typography.title2.fontWeight,
        lineHeight: Typography.title2.lineHeight
    }
})

import { StyleSheet } from 'react-native'
import { Color } from '../../configuration/color'
import { Typography } from '../../configuration/typography'

export const styles = StyleSheet.create({
    Container: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: Color.white,
        borderWidth: 2,
        borderColor: Color.gray,
        borderRadius: 10
    },
    DataContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    FieldText: {
        width: '20%',
        color: Color.gray,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight
    },
    ValueTextInput: {
        width: '80%',
        color: Color.black,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: Color.lightgray,
        backgroundColor: Color.white
    },
    FeelingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    IconContainer: {
        padding: 5,
        marginHorizontal: 10
    },
    SelectedIconContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4
    },
    FeelingIcon: {
        width: 24,
        height: 24
    }
})

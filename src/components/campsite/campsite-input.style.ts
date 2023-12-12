import { StyleSheet } from 'react-native'
import { Color } from '../../configuration/color'
import { Typography } from '../../configuration/typography'

export const styles = StyleSheet.create({
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
    },
    FormContainer: {
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
    CharacteristicDataContainer: {
        alignItems: 'flex-start'
    },
    FieldText: {
        width: '20%',
        color: Color.gray,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight,
        paddingVertical: 10
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
    TypeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    CheckContainer: {
        padding: 5,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: Color.white
    },
    SelectedCheckContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4
    },
    TypeText: {
        color: Color.lightgray,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight
    },
    SelectedTypeText: {
        color: Color.black
    },
    FeelingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    IconContainer: {
        padding: 5,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: Color.white
    },
    SelectedIconContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4
    },
    FeelingIcon: {
        width: 24,
        height: 24
    },
    CharacteristicText: {
        color: Color.lightgray,
        fontSize: Typography.body2.fontSize,
        fontWeight: Typography.body2.fontWeight,
        lineHeight: Typography.body2.lineHeight,
        paddingVertical: 10
    },
    SelectedCharacteristicText: {
        color: Color.black
    }
})

import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './characteristic-input.style'

const CharacteristicInput = ({ type }: { type: string }) => {
    return (
        <View style={styles.Container}>
            <TextInput style={styles.TextInput} placeholder={`${type === 'G' ? '장점' : '단점'}을 입력해 주세요.`} />
            <Text style={styles.AddText}>추가</Text>
        </View>
    )
}

export default CharacteristicInput

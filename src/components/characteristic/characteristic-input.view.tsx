import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './characteristic-input.style'
import { useCharacteristicInput } from './characteristic-input.hook'

const CharacteristicInput = ({ type }: { type: string }) => {
    const { datas, events } = useCharacteristicInput(type)

    return (
        <View style={styles.Container}>
            <TextInput
                style={styles.TextInput}
                placeholder={`${type === 'G' ? '장점' : '단점'}을 입력해 주세요.`}
                value={datas.contents}
                onChangeText={(text) => events.setContents(text)}
            />
            <TouchableOpacity onPress={events.handleAdd}>
                <Text style={styles.AddText}>추가</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CharacteristicInput

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './characteristic-item.style'
import { CharacteristicModel } from '../../model/characteristic.model'
import { useCharacteristicItem } from './characteristic-item.hook'

const CharacteristicItem = ({ value }: { value: CharacteristicModel }) => {
    const { events } = useCharacteristicItem()

    return (
        <View style={styles.Container}>
            <Text style={styles.CharacteristicText}>{value.contents}</Text>
            <TouchableOpacity onPress={() => events.handleDelete(value.id)}>
                <Text style={styles.DeleteText}>삭제</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CharacteristicItem

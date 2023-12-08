import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './characteristic-item.style'
import { CharacteristicModel } from '../../model/characteristic.model'

const CharacteristicItem = ({ value }: { value: CharacteristicModel }) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.CharacteristicText}>{value.contents}</Text>
            <Text style={styles.DeleteText}>삭제</Text>
        </View>
    )
}

export default CharacteristicItem

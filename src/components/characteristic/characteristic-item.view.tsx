import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './characteristic-item.style'
import { CharacteristicDataType } from '../../datas/characteristic.data'

const CharacteristicItem = ({ value }: { value: CharacteristicDataType }) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.CharacteristicText}>{value.name}</Text>
            <Text style={styles.DeleteText}>삭제</Text>
        </View>
    )
}

export default CharacteristicItem

import { View, Text } from 'react-native'
import React from 'react'
import { TravelDataType } from '../../datas/travel.data'
import { styles } from './travel-item.style'

const TravelItem = ({ value }: { value: TravelDataType }) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.TitleText}>{value.title}</Text>
            <Text style={styles.ContentText}>{value.content}</Text>
            <Text style={styles.DateText}>
                {value.startDate} ~ {value.endDate}
            </Text>
        </View>
    )
}

export default TravelItem

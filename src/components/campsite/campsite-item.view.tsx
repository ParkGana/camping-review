import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './campsite-item.style'

type ItemType = {
    id: number
    name: string
    address: string
    type: string[]
    feeling: string
}

const CampsiteItem = ({ value }: { value: ItemType }) => {
    return (
        <View style={styles.Container}>
            <View>
                <Text style={styles.TitleText}>{value.name}</Text>
                <Text style={styles.AddressText}>{value.address}</Text>
                <View style={styles.ArrayContainer}>
                    {value.type.map((item, index) => (
                        <Text style={styles.TypeText} key={index}>
                            {item}
                        </Text>
                    ))}
                </View>
            </View>
            <View>
                <Image
                    source={
                        value.feeling === 'good'
                            ? require('../../../assets/icons/feeling-good.png')
                            : value.feeling === 'soso'
                            ? require('../../../assets/icons/feeling-soso.png')
                            : require('../../../assets/icons/feeling-bad.png')
                    }
                    style={styles.FeelingIcon}
                />
            </View>
        </View>
    )
}

export default CampsiteItem

import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { styles } from './campsite-item.style'
import { CampSiteDataType } from '../../datas/campsite.data'

const CampsiteItem = ({ value }: { value: CampSiteDataType }) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    return (
        <TouchableOpacity
            style={styles.Container}
            onPress={() => navigation.push('CampsiteDetail', { campsiteId: value.id, value })}
        >
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
        </TouchableOpacity>
    )
}

export default CampsiteItem

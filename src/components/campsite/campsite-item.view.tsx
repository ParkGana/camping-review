import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { styles } from './campsite-item.style'
import { CampsiteModel } from '../../model/campsite.model'

const CampsiteItem = ({ value }: { value: CampsiteModel }) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    return (
        <TouchableOpacity
            style={styles.Container}
            onPress={() => navigation.push('CampsiteDetail', { campsiteId: value.id, value })}
        >
            <View>
                <Text style={styles.TitleText}>{value.name}</Text>
                <Text style={styles.AddressText}>{value.address}</Text>
                <View style={styles.TimeContainer}>
                    <Text style={styles.TimeText}>
                        입실 {value.inTime} / 퇴실 {value.outTime}
                    </Text>
                </View>
            </View>
            <View>
                <Image
                    source={
                        value.feeling === 'G'
                            ? require('../../../assets/icons/feeling-good.png')
                            : value.feeling === 'S'
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

import React from 'react'
import { StatusBar, TouchableOpacity, ScrollView, View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { styles } from './campsite-detail.style'
import CampsiteInfo from '../../components/campsite/campsite-info.view'
import { TravelData } from '../../datas/travel.data'
import TravelItem from '../../components/travel/travel-item.view'

const CampsiteDetail = ({ route }: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const { campsiteId, value } = route.params

    return (
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <View style={styles.ActionContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/icons/back.png')} style={styles.BackIcon} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.EditText}>편집</Text>
                </View>
            </View>
            <CampsiteInfo value={value} />
            <View style={styles.TravelContainer}>
                {TravelData.map((item, index) => (
                    <>{campsiteId === item.campsiteId && <TravelItem key={index} value={item} />}</>
                ))}
            </View>
        </ScrollView>
    )
}

export default CampsiteDetail

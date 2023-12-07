import React from 'react'
import { StatusBar, TouchableOpacity, ScrollView, View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { styles } from './campsite-detail.style'
import CampsiteInfo from '../../components/campsite/campsite-info.view'
import { useCampsiteDetail } from './campsite-detail.hook'

const CampsiteDetail = ({ route }: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const { campsiteId } = route.params

    const { datas, events } = useCampsiteDetail(campsiteId)

    return (
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <View style={styles.ActionContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/icons/back.png')} style={styles.BackIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={events.moveToEdit}>
                    <Text style={styles.EditText}>편집</Text>
                </TouchableOpacity>
            </View>
            {datas.campsite && <CampsiteInfo value={datas.campsite} />}
        </ScrollView>
    )
}

export default CampsiteDetail

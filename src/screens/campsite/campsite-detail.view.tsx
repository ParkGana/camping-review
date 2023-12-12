import React from 'react'
import { StatusBar, TouchableOpacity, ScrollView, View, Text, Image } from 'react-native'
import { styles } from './campsite-detail.style'
import CampsiteInfo from '../../components/campsite/campsite-info.view'
import { useCampsiteDetail } from './campsite-detail.hook'

const CampsiteDetail = ({ route }: any) => {
    const { campsiteId } = route.params

    const { datas, events } = useCampsiteDetail(campsiteId)

    return (
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <View style={styles.ActionContainer}>
                <TouchableOpacity onPress={events.moveToBack}>
                    <Image source={require('../../../assets/icons/back.png')} style={styles.BackIcon} />
                </TouchableOpacity>
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity onPress={events.handleDelete}>
                        <Text style={styles.DeleteText}>삭제</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={events.moveToEdit}>
                        <Text style={styles.EditText}>편집</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {datas.campsite && datas.characteristics && (
                <CampsiteInfo campsiteValue={datas.campsite} characteristicValue={datas.characteristics} />
            )}
        </ScrollView>
    )
}

export default CampsiteDetail

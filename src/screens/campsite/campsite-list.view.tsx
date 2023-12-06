import React from 'react'
import { StatusBar, ScrollView, TouchableOpacity, Text } from 'react-native'
import { styles } from './campsite-list.style'
import CampsiteItem from '../../components/campsite/campsite-item.view'
import { useCampsiteList } from './campsite-list.hook'

const CampsiteList = () => {
    const { datas, events } = useCampsiteList()

    return (
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <TouchableOpacity style={styles.ActionContainer} onPress={events.moveToAdd}>
                <Text style={styles.AddText}>추가</Text>
            </TouchableOpacity>
            {datas.campsiteList &&
                datas.campsiteList.map((campsite, index) => <CampsiteItem key={index} value={campsite} />)}
        </ScrollView>
    )
}

export default CampsiteList

import React from 'react'
import { StatusBar, ScrollView } from 'react-native'
import { styles } from './campsite-list.style'
import CampsiteItem from '../../components/campsite/campsite-item.view'
import { useCampsiteList } from './campsite-list.hook'

const CampsiteList = () => {
    const { datas } = useCampsiteList()

    return (
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            {datas.campsiteList &&
                datas.campsiteList.map((campsite, index) => <CampsiteItem key={index} value={campsite} />)}
        </ScrollView>
    )
}

export default CampsiteList

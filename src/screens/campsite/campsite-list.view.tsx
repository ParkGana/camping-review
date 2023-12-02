import React from 'react'
import { StatusBar, ScrollView } from 'react-native'
import { styles } from './campsite-list.style'
import { CampSiteData } from '../../datas/campsite.data'
import CampsiteItem from '../../components/campsite/campsite-item.view'

const CampsiteList = () => {
    return (
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            {CampSiteData.map((item, index) => (
                <CampsiteItem key={index} value={item} />
            ))}
        </ScrollView>
    )
}

export default CampsiteList

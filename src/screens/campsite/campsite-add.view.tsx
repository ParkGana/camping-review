import { ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { styles } from './campsite-add.style'
import { useCampsiteAdd } from './campsite-add.hook'
import CampsiteInput from '../../components/campsite/campsite-input.view'

const CampsiteAdd = () => {
    const { events } = useCampsiteAdd()

    return (
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <CampsiteInput />
        </ScrollView>
    )
}

export default CampsiteAdd

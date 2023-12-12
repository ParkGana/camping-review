import { ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { styles } from './campsite-add.style'
import CampsiteInput from '../../components/campsite/campsite-input.view'
import { useCampsiteEdit } from './campsite-edit.hook'

const CampsiteEdit = ({ route }: any) => {
    const { campsiteId } = route.params

    const { datas } = useCampsiteEdit(campsiteId)

    return (
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            {datas.campsite && datas.characteristics && (
                <CampsiteInput edit campsiteValue={datas.campsite} characteristicValue={datas.characteristics} />
            )}
        </ScrollView>
    )
}

export default CampsiteEdit

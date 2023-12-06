import { Text, ScrollView, StatusBar, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './campsite-add.style'
import { useCampsiteAdd } from './campsite-add.hook'
import CampsiteInput from '../../components/campsite/campsite-input.view'

const CampsiteAdd = () => {
    const { events } = useCampsiteAdd()

    return (
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <View style={styles.ActionContainer}>
                <TouchableOpacity onPress={events.moveToBack}>
                    <Text style={styles.CancelText}>취소</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.EditText}>완료</Text>
                </View>
            </View>
            <CampsiteInput />
        </ScrollView>
    )
}

export default CampsiteAdd

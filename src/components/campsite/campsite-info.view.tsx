import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './campsite-info.style'
import { CampsiteModel } from '../../model/campsite.model'

const CampsiteInfo = ({ value }: { value: CampsiteModel }) => {
    return (
        <View style={styles.Container}>
            <View style={styles.IconContainer}>
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
            <View style={styles.DataContainer}>
                <Text style={styles.FieldText}>이름</Text>
                <Text style={styles.NameText}>{value.name}</Text>
            </View>
            <View style={styles.DataContainer}>
                <Text style={styles.FieldText}>주소</Text>
                <Text style={styles.ValueText}>{value.address}</Text>
            </View>
            <View style={styles.DataContainer}>
                <Text style={styles.FieldText}>입실 시간</Text>
                <Text style={styles.ValueText}>{value.inTime}</Text>
            </View>
            <View style={styles.DataContainer}>
                <Text style={styles.FieldText}>퇴실 시간</Text>
                <Text style={styles.ValueText}>{value.outTime}</Text>
            </View>
        </View>
    )
}

export default CampsiteInfo

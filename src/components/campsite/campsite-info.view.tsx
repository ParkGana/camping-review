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
                <Text style={styles.FieldText}>이용 시간</Text>
                <Text style={styles.ValueText}>
                    입실 {value.inTime} / 퇴실 {value.outTime}
                </Text>
            </View>
            <View style={styles.DataContainer}>
                <Text style={styles.FieldText}>이용 형태</Text>
                <View style={styles.TypeContainer}>
                    {value.type.split(',').map((type, index) => (
                        <Text style={styles.TypeText} key={index}>
                            {type}
                        </Text>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default CampsiteInfo

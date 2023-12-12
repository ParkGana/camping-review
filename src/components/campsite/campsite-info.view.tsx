import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './campsite-info.style'
import { CampsiteModel } from '../../model/campsite.model'
import { CampsiteCharacteristicModel } from '../../model/campsite-characteristic.model'

const CampsiteInfo = ({
    campsiteValue,
    characteristicValue
}: {
    campsiteValue: CampsiteModel
    characteristicValue: CampsiteCharacteristicModel[]
}) => {
    return (
        <View>
            <View style={styles.Container}>
                <View style={styles.IconContainer}>
                    <Image
                        source={
                            campsiteValue.feeling === 'G'
                                ? require('../../../assets/icons/feeling-good.png')
                                : campsiteValue.feeling === 'S'
                                ? require('../../../assets/icons/feeling-soso.png')
                                : require('../../../assets/icons/feeling-bad.png')
                        }
                        style={styles.FeelingIcon}
                    />
                </View>
                <View style={styles.DataContainer}>
                    <Text style={styles.FieldText}>이름</Text>
                    <Text style={styles.NameText}>{campsiteValue.name}</Text>
                </View>
                <View style={styles.DataContainer}>
                    <Text style={styles.FieldText}>주소</Text>
                    <Text style={styles.ValueText}>{campsiteValue.address}</Text>
                </View>
                <View style={styles.DataContainer}>
                    <Text style={styles.FieldText}>이용 시간</Text>
                    <Text style={styles.ValueText}>
                        입실 {campsiteValue.inTime} / 퇴실 {campsiteValue.outTime}
                    </Text>
                </View>
                <View style={styles.DataContainer}>
                    <Text style={styles.FieldText}>이용 형태</Text>
                    <View style={styles.TypeContainer}>
                        {campsiteValue.type.split(',').map((type, index) => (
                            <Text style={styles.TypeText} key={index}>
                                {type}
                            </Text>
                        ))}
                    </View>
                </View>
            </View>
            <View style={styles.Container}>
                <View style={[styles.DataContainer, styles.CharacteristicDataContainer]}>
                    <Text style={styles.FieldText}>장점</Text>
                    <View>
                        {characteristicValue.map((characteristic, index) => (
                            <View key={index}>
                                {characteristic.characteristic.type === 'G' && (
                                    <Text style={styles.CharacteristicText}>
                                        {characteristic.characteristic.contents}
                                    </Text>
                                )}
                            </View>
                        ))}
                    </View>
                </View>
                <View style={[styles.DataContainer, styles.CharacteristicDataContainer]}>
                    <Text style={styles.FieldText}>단점</Text>
                    <View>
                        {characteristicValue.map((characteristic, index) => (
                            <View key={index}>
                                {characteristic.characteristic.type === 'B' && (
                                    <Text style={styles.CharacteristicText}>
                                        {characteristic.characteristic.contents}
                                    </Text>
                                )}
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CampsiteInfo

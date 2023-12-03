import React from 'react'
import { View, Text, Image } from 'react-native'
import { CampSiteDataType } from '../../datas/campsite.data'
import { styles } from './campsite-info.style'

const CampsiteType = ['글램핑', '오토', '카라반']

const CampsiteInfo = ({ value }: { value: CampSiteDataType }) => {
    return (
        <View style={styles.Container}>
            <View style={styles.IconContainer}>
                <Image
                    source={
                        value.feeling === 'good'
                            ? require('../../../assets/icons/feeling-good.png')
                            : value.feeling === 'soso'
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
                <Text style={styles.AddressText}>{value.address}</Text>
            </View>
            <View style={styles.DataContainer}>
                <Text style={styles.FieldText}>형태</Text>
                <View style={styles.TypeArrayContainer}>
                    {CampsiteType.map((item, index) => (
                        <Text
                            style={[styles.TypeText, value.type.includes(item) && styles.IncludeTypeText]}
                            key={index}
                        >
                            {item}
                        </Text>
                    ))}
                </View>
            </View>
            <View style={styles.PointArrayContainer}>
                <View style={styles.PointDataContainer}>
                    <Text style={styles.FieldText}>장점</Text>
                    <View>
                        {!value.point.good.length && <Text style={styles.PointText}>X</Text>}
                        {value.point.good.map((item, index) => (
                            <Text style={styles.PointText} key={index}>
                                {item}
                            </Text>
                        ))}
                    </View>
                </View>
                <View style={styles.PointDataContainer}>
                    <Text style={styles.FieldText}>단점</Text>
                    <View>
                        {!value.point.bad.length && <Text style={styles.PointText}>X</Text>}
                        {value.point.bad.map((item, index) => (
                            <Text style={styles.PointText} key={index}>
                                {item}
                            </Text>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CampsiteInfo

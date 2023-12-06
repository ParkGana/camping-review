import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { styles } from './campsite-input.style'

const CampsiteInput = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.DataContainer}>
                <Text style={styles.FieldText}>이름</Text>
                <TextInput style={styles.ValueTextInput} placeholder={'이름을 입력해 주세요.'} />
            </View>
            <View style={styles.DataContainer}>
                <Text style={styles.FieldText}>주소</Text>
                <TextInput style={styles.ValueTextInput} placeholder={'주소를 입력해 주세요.'} />
            </View>
            <View style={styles.DataContainer}>
                <Text style={styles.FieldText}>입실 시간</Text>
                <TextInput style={styles.ValueTextInput} placeholder={'입실 시간을 입력해 주세요.'} />
            </View>
            <View style={styles.DataContainer}>
                <Text style={styles.FieldText}>퇴실 시간</Text>
                <TextInput style={styles.ValueTextInput} placeholder={'퇴실 시간을 입력해 주세요.'} />
            </View>
            <View style={styles.DataContainer}>
                <Text style={styles.FieldText}>만족도</Text>
                <View style={styles.FeelingContainer}>
                    <View style={[styles.IconContainer, styles.SelectedIconContainer]}>
                        <Image source={require('../../../assets/icons/feeling-good.png')} style={styles.FeelingIcon} />
                    </View>
                    <View style={styles.IconContainer}>
                        <Image source={require('../../../assets/icons/feeling-soso.png')} style={styles.FeelingIcon} />
                    </View>
                    <View style={styles.IconContainer}>
                        <Image source={require('../../../assets/icons/feeling-bad.png')} style={styles.FeelingIcon} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CampsiteInput

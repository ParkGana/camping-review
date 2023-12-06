import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './campsite-input.style'
import { useCampsiteInput } from './campsite-input.hook'

const CampsiteInput = () => {
    const { datas, events } = useCampsiteInput()

    return (
        <View>
            <View style={styles.ActionContainer}>
                <TouchableOpacity onPress={events.moveToBack}>
                    <Text style={styles.CancelText}>취소</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={events.handleAdd}>
                    <Text style={styles.EditText}>완료</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.FormContainer}>
                <View style={styles.DataContainer}>
                    <Text style={styles.FieldText}>이름</Text>
                    <TextInput
                        style={styles.ValueTextInput}
                        placeholder={'이름을 입력해 주세요.'}
                        value={datas.name}
                        onChangeText={(text) => events.setName(text)}
                    />
                </View>
                <View style={styles.DataContainer}>
                    <Text style={styles.FieldText}>주소</Text>
                    <TextInput
                        style={styles.ValueTextInput}
                        placeholder={'주소를 입력해 주세요.'}
                        value={datas.address}
                        onChangeText={(text) => events.setAddress(text)}
                    />
                </View>
                <View style={styles.DataContainer}>
                    <Text style={styles.FieldText}>입실 시간</Text>
                    <TextInput
                        style={styles.ValueTextInput}
                        placeholder={'입실 시간을 입력해 주세요.'}
                        value={datas.inTime}
                        onChangeText={(text) => events.setInTime(text)}
                    />
                </View>
                <View style={styles.DataContainer}>
                    <Text style={styles.FieldText}>퇴실 시간</Text>
                    <TextInput
                        style={styles.ValueTextInput}
                        placeholder={'퇴실 시간을 입력해 주세요.'}
                        value={datas.outTime}
                        onChangeText={(text) => events.setOutTime(text)}
                    />
                </View>
                <View style={styles.DataContainer}>
                    <Text style={styles.FieldText}>만족도</Text>
                    <View style={styles.FeelingContainer}>
                        <TouchableOpacity
                            style={[styles.IconContainer, datas.feeling === 'G' && styles.SelectedIconContainer]}
                            onPress={() => events.setFeeling('G')}
                        >
                            <Image
                                source={require('../../../assets/icons/feeling-good.png')}
                                style={styles.FeelingIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.IconContainer, datas.feeling === 'S' && styles.SelectedIconContainer]}
                            onPress={() => events.setFeeling('S')}
                        >
                            <Image
                                source={require('../../../assets/icons/feeling-soso.png')}
                                style={styles.FeelingIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.IconContainer, datas.feeling === 'B' && styles.SelectedIconContainer]}
                            onPress={() => events.setFeeling('B')}
                        >
                            <Image
                                source={require('../../../assets/icons/feeling-bad.png')}
                                style={styles.FeelingIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CampsiteInput

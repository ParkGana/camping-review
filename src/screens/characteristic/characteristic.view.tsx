import React from 'react'
import { StatusBar, View, ScrollView, TouchableOpacity, Image, Text } from 'react-native'
import { styles } from './characteristic.style'
import { useCharacteristic } from './characteristic.hook'
import CharacteristicItem from '../../components/characteristic/characteristic-item.view'
import CharacteristicInput from '../../components/characteristic/characteristic-input.view'

const Characteristic = () => {
    const { datas, events } = useCharacteristic()

    return (
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <View style={styles.ActionContainer}>
                <TouchableOpacity onPress={events.moveToBack}>
                    <Image source={require('../../../assets/icons/back.png')} style={styles.BackIcon} />
                </TouchableOpacity>
            </View>
            {datas.characteristicList && (
                <>
                    <View style={styles.CharacteristicContainer}>
                        <Text style={styles.CharacteristicTitle}>장점</Text>
                        {datas.characteristicList
                            .filter((characteristic) => characteristic.type === 'G')
                            .map((characteristic, index) => (
                                <CharacteristicItem key={index} value={characteristic} />
                            ))}
                        <CharacteristicInput type={'G'} />
                    </View>
                    <View style={styles.CharacteristicContainer}>
                        <Text style={styles.CharacteristicTitle}>단점</Text>
                        {datas.characteristicList
                            .filter((characteristic) => characteristic.type === 'B')
                            .map((characteristic, index) => (
                                <CharacteristicItem key={index} value={characteristic} />
                            ))}
                        <CharacteristicInput type={'B'} />
                    </View>
                </>
            )}
        </ScrollView>
    )
}

export default Characteristic

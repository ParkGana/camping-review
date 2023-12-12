import { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CampsiteModel } from '../../model/campsite.model'
import { GetCampsiteCharacteristicListAPI, GetCampsiteDetailAPI } from '../../api/campsite.api'

export const useCampsiteEdit = (campsiteId: string) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const [campsite, setCampsite] = useState<CampsiteModel>()
    const [characteristics, setCharacteristics] = useState<string[]>()

    useEffect(() => {
        GetCampsiteDetailAPI(campsiteId)
            .then((campsite) => {
                setCampsite(campsite)
            })
            .catch((error) => {
                Alert.alert('캠프장 정보 조회 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                    cancelable: false
                })
            })

        GetCampsiteCharacteristicListAPI(campsiteId)
            .then((characteristicList) => {
                let arr: string[] = []

                characteristicList.map((characteristic) => {
                    arr.push(characteristic.characteristic.id)
                })

                setCharacteristics(arr)
            })
            .catch((error) => {
                Alert.alert('캠프장 정보 조회 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                    cancelable: false
                })
            })
    }, [])

    /* 이전 페이지로 이동 */
    const moveToBack = () => {
        navigation.replace('BottomTab', { screen: 'CampsiteList' })
    }

    return {
        datas: {
            campsite,
            characteristics
        },
        events: {
            moveToBack
        }
    }
}

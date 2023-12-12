import { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CampsiteModel } from '../../model/campsite.model'
import { GetCampsiteCharacteristicListAPI, GetCampsiteDetailAPI } from '../../api/campsite.api'
import { CampsiteCharacteristicModel } from '../../model/campsite-characteristic.model'

export const useCampsiteDetail = (campsiteId: string) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const [campsite, setCampsite] = useState<CampsiteModel>()
    const [characteristics, setCharacteristics] = useState<CampsiteCharacteristicModel[]>([])

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
                setCharacteristics(characteristicList)
            })
            .catch((error) => {
                Alert.alert('캠프장 정보 조회 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                    cancelable: false
                })
            })
    }, [])

    /* 캠핑장 목록 페이지로 이동 */
    const moveToBack = () => {
        navigation.replace('BottomTab', { screen: 'CampsiteList' })
    }

    /* 캠핑장 편집 페이지로 이동 */
    const moveToEdit = () => {
        navigation.replace('CampsiteEdit', { campsiteId })
    }

    return {
        datas: {
            campsite,
            characteristics
        },
        events: {
            moveToBack,
            moveToEdit
        }
    }
}

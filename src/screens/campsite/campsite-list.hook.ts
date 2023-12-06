import { useEffect, useState, useContext } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { UserContext } from '../../../App'
import { CampsiteModel } from '../../model/campsite.model'
import { GetCampsiteListAPI } from '../../api/campsite.api'

export const useCampsiteList = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const { userEmail } = useContext(UserContext)

    const [campsiteList, setCampsiteList] = useState<CampsiteModel[]>()

    useEffect(() => {
        GetCampsiteListAPI(userEmail)
            .then((campsiteList) => {
                setCampsiteList(campsiteList)
            })
            .catch((error) => {
                Alert.alert('캠프장 목록 조회 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                    cancelable: false
                })
            })
    }, [])

    /* 캠핑장 추가 페이지로 이동 */
    const moveToAdd = () => {
        navigation.replace('CampsiteAdd')
    }

    return {
        datas: {
            campsiteList
        },
        events: {
            moveToAdd
        }
    }
}

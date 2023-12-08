import { useEffect, useState, useContext } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CharacteristicModel } from '../../model/characteristic.model'
import { GetCharacteristicListAPI } from '../../api/characteristic.api'
import { UserContext } from '../../../App'

export const useCharacteristic = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const { userEmail } = useContext(UserContext)

    const [characteristicList, setCharacteristicList] = useState<CharacteristicModel[]>()

    useEffect(() => {
        GetCharacteristicListAPI(userEmail)
            .then((characteristicList) => {
                setCharacteristicList(characteristicList)
            })
            .catch((error) => {
                Alert.alert('특징 목록 조회 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                    cancelable: false
                })
            })
    }, [])

    /* 이전 페이지로 이동 */
    const moveToBack = () => {
        navigation.replace('BottomTab', { screen: 'Profile' })
    }

    return {
        datas: {
            characteristicList
        },
        events: {
            moveToBack
        }
    }
}

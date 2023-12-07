import { useState, useContext } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { UserContext } from '../../../App'
import { CreateCampsiteAPI } from '../../api/campsite.api'

export const useCampsiteInput = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const { userEmail } = useContext(UserContext)

    const [name, setName] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [inTime, setInTime] = useState<string>('')
    const [outTime, setOutTime] = useState<string>('')
    const [types, setTypes] = useState<string[]>([])
    const [feeling, setFeeling] = useState<string>('')

    /* 이전 페이지로 이동 */
    const moveToBack = () => {
        navigation.replace('BottomTab', { screen: 'CampsiteList' })
    }

    /* 캠핑장 추가 */
    const handleAdd = () => {
        let typeStr = ''

        types.map((type, index) => {
            typeStr += type

            if (index < types.length - 1) {
                typeStr += ','
            }
        })

        if (!name || !address || !inTime || !outTime) {
            Alert.alert('캠핑장 추가 도중에 문제가 발생했습니다.', '모든 항목을 입력해 주세요.', [{ text: '확인' }], {
                cancelable: false
            })
        } else if (!types.length) {
            Alert.alert(
                '캠핑장 추가 도중에 문제가 발생했습니다.',
                '이용 형태를 최소 1개 이상 선택해 주세요.',
                [{ text: '확인' }],
                {
                    cancelable: false
                }
            )
        } else if (!feeling) {
            Alert.alert('캠핑장 추가 도중에 문제가 발생했습니다.', '만족도를 선택해 주세요.', [{ text: '확인' }], {
                cancelable: false
            })
        } else {
            CreateCampsiteAPI({ name, address, inTime, outTime, type: typeStr, feeling, userEmail })
                .then(() => {
                    Alert.alert(
                        '캠핑장 추가를 완료하였습니다.',
                        '캠핑장 목록 페이지로 이동합니다.',
                        [
                            {
                                text: '확인',
                                onPress: () => {
                                    navigation.replace('BottomTab', { screen: 'CampsiteList' })
                                }
                            }
                        ],
                        {
                            cancelable: false
                        }
                    )
                })
                .catch((error) => {
                    Alert.alert('캠핑장 추가 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                        cancelable: false
                    })
                })
        }
    }

    return {
        datas: {
            name,
            address,
            inTime,
            outTime,
            types,
            feeling
        },
        events: {
            setName,
            setAddress,
            setInTime,
            setOutTime,
            setTypes,
            setFeeling,
            moveToBack,
            handleAdd
        }
    }
}

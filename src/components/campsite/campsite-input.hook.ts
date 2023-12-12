import { useState, useContext, useEffect } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CreateCampsiteAPI, UpdateCampsiteAPI } from '../../api/campsite.api'
import { CampsiteModel } from '../../model/campsite.model'
import { UserContext } from '../../context/user.context'
import { CharacteristicModel } from '../../model/characteristic.model'
import { GetCharacteristicListAPI } from '../../api/characteristic.api'

export const useCampsiteInput = (edit?: boolean, campsiteValue?: CampsiteModel, characteristicValue?: string[]) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const { userEmail } = useContext(UserContext)

    const [campsiteCharacteristic, setCampsiteCharacteristic] = useState<CharacteristicModel[]>()

    const [name, setName] = useState<string>(edit && campsiteValue ? campsiteValue.name : '')
    const [address, setAddress] = useState<string>(edit && campsiteValue ? campsiteValue.address : '')
    const [inTime, setInTime] = useState<string>(edit && campsiteValue ? campsiteValue.inTime : '')
    const [outTime, setOutTime] = useState<string>(edit && campsiteValue ? campsiteValue.outTime : '')
    const [types, setTypes] = useState<string[]>(edit && campsiteValue ? campsiteValue.type.split(',') : [])
    const [feeling, setFeeling] = useState<string>(edit && campsiteValue ? campsiteValue.feeling : '')
    const [characteristics, setCharacteristics] = useState<string[]>(
        edit && characteristicValue ? characteristicValue : []
    )

    useEffect(() => {
        GetCharacteristicListAPI(userEmail)
            .then((characteristicList) => {
                setCampsiteCharacteristic(characteristicList)
            })
            .catch((error) => {
                Alert.alert('특징 목록 조회 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                    cancelable: false
                })
            })
    }, [])

    /* 이전 페이지로 이동 */
    const moveToBack = () => {
        edit && campsiteValue
            ? navigation.replace('CampsiteDetail', { campsiteId: campsiteValue.id })
            : navigation.replace('BottomTab', { screen: 'CampsiteList' })
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
            edit && campsiteValue
                ? UpdateCampsiteAPI({
                      name,
                      address,
                      inTime,
                      outTime,
                      type: typeStr,
                      feeling,
                      characteristicIds: characteristics,
                      campsiteId: campsiteValue.id
                  })
                      .then(() => {
                          Alert.alert(
                              '캠핑장 수정 완료하였습니다.',
                              '캠핑장 정보 페이지로 이동합니다.',
                              [
                                  {
                                      text: '확인',
                                      onPress: () => {
                                          navigation.replace('CampsiteDetail', { campsiteId: campsiteValue.id })
                                      }
                                  }
                              ],
                              {
                                  cancelable: false
                              }
                          )
                      })
                      .catch((error) => {
                          Alert.alert(
                              '캠핑장 수정 도중에 문제가 발생했습니다.',
                              error.errorMessage,
                              [{ text: '확인' }],
                              {
                                  cancelable: false
                              }
                          )
                      })
                : CreateCampsiteAPI({
                      name,
                      address,
                      inTime,
                      outTime,
                      type: typeStr,
                      feeling,
                      userEmail,
                      characteristicIds: characteristics
                  })
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
                          Alert.alert(
                              '캠핑장 추가 도중에 문제가 발생했습니다.',
                              error.errorMessage,
                              [{ text: '확인' }],
                              {
                                  cancelable: false
                              }
                          )
                      })
        }
    }

    return {
        datas: {
            campsiteCharacteristic,
            name,
            address,
            inTime,
            outTime,
            types,
            feeling,
            characteristics
        },
        events: {
            setName,
            setAddress,
            setInTime,
            setOutTime,
            setTypes,
            setFeeling,
            setCharacteristics,
            moveToBack,
            handleAdd
        }
    }
}

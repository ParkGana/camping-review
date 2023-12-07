import { useState, useContext } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { UserContext } from '../../../App'
import { CreateCampsiteAPI, UpdateCampsiteAPI } from '../../api/campsite.api'
import { CampsiteModel } from '../../model/campsite.model'

export const useCampsiteInput = (edit?: boolean, value?: CampsiteModel) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const { userEmail } = useContext(UserContext)

    const [name, setName] = useState<string>(edit && value ? value.name : '')
    const [address, setAddress] = useState<string>(edit && value ? value.address : '')
    const [inTime, setInTime] = useState<string>(edit && value ? value.inTime : '')
    const [outTime, setOutTime] = useState<string>(edit && value ? value.outTime : '')
    const [types, setTypes] = useState<string[]>(edit && value ? value.type.split(',') : [])
    const [feeling, setFeeling] = useState<string>(edit && value ? value.feeling : '')

    /* 이전 페이지로 이동 */
    const moveToBack = () => {
        edit && value
            ? navigation.replace('CampsiteDetail', { campsiteId: value.id })
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
            edit && value
                ? UpdateCampsiteAPI({ name, address, inTime, outTime, type: typeStr, feeling, campsiteId: value.id })
                      .then(() => {
                          Alert.alert(
                              '캠핑장 수정 완료하였습니다.',
                              '캠핑장 정보 페이지로 이동합니다.',
                              [
                                  {
                                      text: '확인',
                                      onPress: () => {
                                          navigation.replace('CampsiteDetail', { campsiteId: value.id })
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
                : CreateCampsiteAPI({ name, address, inTime, outTime, type: typeStr, feeling, userEmail })
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

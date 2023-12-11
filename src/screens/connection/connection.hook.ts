import { useEffect, useState, useContext } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { UserModel } from '../../model/user.model'
import { RequestConnectionAPI, ResponseConnectionAPI } from '../../api/connection.api'
import { GetProfileAPI } from '../../api/account.api'
import { UserContext } from '../../context/user.context'

export const useConnection = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const { userEmail } = useContext(UserContext)

    const [user, setUser] = useState<UserModel>()
    const [email, setEmail] = useState<string>('')

    useEffect(() => {
        GetProfileAPI(userEmail)
            .then((user) => {
                setUser(user)
            })
            .catch((error) => {
                Alert.alert('계정 정보 조회 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                    cancelable: false
                })
            })
    }, [])

    useEffect(() => {
        if (user && user.connectionState === 'C') {
            navigation.replace('BottomTab', { screen: 'CampsiteList' })
        }
    }, [user])

    const handleRequest = () => {
        if (user) {
            RequestConnectionAPI({ sender: user.email, receiver: email })
                .then(() => {
                    Alert.alert(
                        '계정 연결 요청을 완료하였습니다.',
                        '상대방의 수락 후 서비스 이용이 가능합니다.',
                        [
                            {
                                text: '확인',
                                onPress: () => {
                                    navigation.replace('Connection', { user })
                                }
                            }
                        ],
                        {
                            cancelable: false
                        }
                    )
                })
                .catch((error) => {
                    Alert.alert('연결 요청 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                        cancelable: false
                    })
                })
        }
    }

    const handleResponse = () => {
        if (user && user.connectionEmail) {
            ResponseConnectionAPI({ sender: user.email, receiver: user.connectionEmail })
                .then(() => {
                    Alert.alert(
                        '계정 연결을 완료하였습니다.',
                        '서비스 이용을 시작합니다.',
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
                    Alert.alert('연결 수락 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                        cancelable: false
                    })
                })
        }
    }

    return {
        datas: {
            user,
            email
        },
        events: {
            setEmail,
            handleRequest,
            handleResponse
        }
    }
}

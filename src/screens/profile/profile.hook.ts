import { useEffect, useState, useContext } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { UserModel } from '../../model/user.model'
import { UserContext } from '../../../App'
import { GetProfileAPI, LogoutAPI } from '../../api/account.api'

export const useProfile = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const { userEmail } = useContext(UserContext)

    const [profile, setProfile] = useState<UserModel>()

    useEffect(() => {
        GetProfileAPI(userEmail)
            .then((user) => {
                setProfile(user)
            })
            .catch((error) => {
                Alert.alert('계정 정보 조회 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                    cancelable: false
                })
            })
    }, [])

    /* 특징 페이지로 이동 */
    const moveToCharacteristic = () => {
        navigation.replace('Characteristic')
    }

    /* 로그아웃 */
    const handleLogout = () => {
        LogoutAPI()
            .then(() => {
                Alert.alert(
                    '로그아웃을 완료하였습니다.',
                    '로그인 페이지로 이동합니다.',
                    [
                        {
                            text: '확인',
                            onPress: () => {
                                navigation.replace('SignIn')
                            }
                        }
                    ],
                    {
                        cancelable: false
                    }
                )
            })
            .catch((error) => {
                Alert.alert('회원가입 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                    cancelable: false
                })
            })
    }

    return {
        datas: {
            profile
        },
        events: {
            moveToCharacteristic,
            handleLogout
        }
    }
}

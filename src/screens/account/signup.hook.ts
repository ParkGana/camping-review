import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { generateError } from '../../../error.config'
import { SignUpAPI } from '../../api/account.api'

export const useSignUp = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [name, setName] = useState<string>('')

    /* 로그인 페이지로 이동 */
    const moveToSignIn = () => {
        navigation.replace('SignIn')
    }

    /* 회원가입 */
    const handleSignUp = () => {
        if (password !== confirmPassword) {
            Alert.alert(
                '회원가입 도중에 문제가 발생했습니다.',
                generateError('password-not-matched'),
                [{ text: '확인' }],
                {
                    cancelable: false
                }
            )
        } else {
            SignUpAPI({ email, password, name })
                .then((user) => {
                    console.log(user)
                    Alert.alert(
                        '회원가입을 완료하였습니다.',
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
    }

    return {
        datas: {
            email,
            password,
            confirmPassword,
            name
        },
        events: {
            setEmail,
            setPassword,
            setConfirmPassword,
            setName,
            moveToSignIn,
            handleSignUp
        }
    }
}

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useState } from 'react'
import { SignInAPI } from '../../api/account.api'
import { Alert } from 'react-native'

export const useSignIn = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    /* 회원가입 페이지로 이동 */
    const moveToSignUp = () => {
        navigation.replace('SignUp')
    }

    /* 로그인 */
    const handleSignIn = () => {
        SignInAPI({ email, password })
            .then((user) => {
                console.log(user)
                navigation.replace('Connection', { user })
            })
            .catch((error) => {
                Alert.alert('로그인 도중에 문제가 발생했습니다.', error.errorMessage, [{ text: '확인' }], {
                    cancelable: false
                })
            })
    }

    return {
        datas: {
            email,
            password
        },
        events: {
            setEmail,
            setPassword,
            moveToSignUp,
            handleSignIn
        }
    }
}

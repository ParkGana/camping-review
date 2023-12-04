import React from 'react'
import { StatusBar, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { styles } from './account.style'

const SignUp = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <Text style={styles.Title}>Sign Up</Text>
            <View style={styles.InputContainer}>
                <TextInput style={styles.TextInput} placeholder={'이메일을 입력해 주세요.'} />
                <TextInput style={styles.TextInput} placeholder={'비밀번호를 입력해 주세요.'} secureTextEntry />
                <TextInput
                    style={styles.TextInput}
                    placeholder={'비밀번호를 한 번 더 입력해 주세요.'}
                    secureTextEntry
                />
                <TextInput style={styles.TextInput} placeholder={'이름을 입력해 주세요.'} />
            </View>
            <View style={styles.ButtonContainer}>
                <View style={styles.Button}>
                    <Text style={styles.ButtonText}>회원가입</Text>
                </View>
                <TouchableOpacity style={styles.SubButton} onPress={() => navigation.replace('SignIn')}>
                    <Text style={styles.SubButtonText}>로그인</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

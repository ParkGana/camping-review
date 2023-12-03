import React from 'react'
import { StatusBar, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { styles } from './account.style'

const SignIn = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <Text style={styles.Title}>Sign In</Text>
            <View style={styles.InputContainer}>
                <TextInput style={styles.TextInput} placeholder={'이메일을 입력해 주세요.'} />
                <TextInput style={styles.TextInput} placeholder={'비밀번호를 입력해 주세요.'} secureTextEntry />
            </View>
            <View style={styles.ButtonContainer}>
                <View style={styles.Button}>
                    <Text style={styles.ButtonText}>로그인</Text>
                </View>
                <TouchableOpacity style={styles.SubButton} onPress={() => navigation.replace('SignUp')}>
                    <Text style={styles.SubButtonText}>회원가입</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn

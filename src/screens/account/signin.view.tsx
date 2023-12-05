import React from 'react'
import { StatusBar, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './account.style'
import { useSignIn } from './signin.hook'

const SignIn = () => {
    const { datas, events } = useSignIn()

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <Text style={styles.Title}>Sign In</Text>
            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.TextInput}
                    placeholder={'이메일을 입력해 주세요.'}
                    value={datas.email}
                    onChangeText={(text) => events.setEmail(text)}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder={'비밀번호를 입력해 주세요.'}
                    value={datas.password}
                    onChangeText={(text) => events.setPassword(text)}
                    secureTextEntry
                />
            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.Button} onPress={events.handleSignIn}>
                    <Text style={styles.ButtonText}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SubButton} onPress={events.moveToSignUp}>
                    <Text style={styles.SubButtonText}>회원가입</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn

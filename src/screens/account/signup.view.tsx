import React from 'react'
import { StatusBar, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './account.style'
import { useSignUp } from './signup.hook'

const SignUp = () => {
    const { datas, events } = useSignUp()

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <Text style={styles.Title}>Sign Up</Text>
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
                <TextInput
                    style={styles.TextInput}
                    placeholder={'비밀번호를 한 번 더 입력해 주세요.'}
                    value={datas.confirmPassword}
                    onChangeText={(text) => events.setConfirmPassword(text)}
                    secureTextEntry
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder={'이름을 입력해 주세요.'}
                    value={datas.name}
                    onChangeText={(text) => events.setName(text)}
                />
            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.Button} onPress={events.handleSignUp}>
                    <Text style={styles.ButtonText}>회원가입</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SubButton} onPress={events.moveToSignIn}>
                    <Text style={styles.SubButtonText}>로그인</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

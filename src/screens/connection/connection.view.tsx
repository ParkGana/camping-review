import { Text, StatusBar, View, TextInput } from 'react-native'
import React from 'react'
import { styles } from './connection.style'
import { useConnection } from './connection.hook'

const Connection = ({ route }: any) => {
    const { connectionEmail, connectionState } = route.params.user

    useConnection(connectionState)

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            {!connectionEmail ? (
                <View style={styles.ConnectionContainer}>
                    <Text style={styles.Title}>연인의 계정을 연결해 주세요.</Text>
                    <Text style={styles.Explanation}>연결을 요청해 주세요.</Text>
                    <View style={styles.SearchContainer}>
                        <TextInput style={styles.TextInput} placeholder={'연인의 이메일을 입력해 주세요.'} />
                        <View style={styles.ButtonContainer}>
                            <Text style={styles.ButtonText}>연결</Text>
                        </View>
                    </View>
                </View>
            ) : connectionState === 'S' ? (
                <View style={styles.ConnectionContainer}>
                    <Text style={styles.Title}>연인의 계정을 연결해 주세요.</Text>
                    <Text style={styles.Explanation}>연결을 요청 중입니다.</Text>
                    <Text style={styles.Text}>{connectionEmail}</Text>
                </View>
            ) : connectionState === 'R' ? (
                <View style={styles.ConnectionContainer}>
                    <Text style={styles.Title}>연인의 계정을 연결해 주세요.</Text>
                    <Text style={styles.Explanation}>연결 요청을 수락해 주세요.</Text>
                    <Text style={styles.Text}>{connectionEmail}</Text>
                    <View style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>수락</Text>
                    </View>
                </View>
            ) : (
                <></>
            )}
        </View>
    )
}

export default Connection

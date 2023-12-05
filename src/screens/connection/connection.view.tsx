import { Text, StatusBar, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './connection.style'
import { useConnection } from './connection.hook'

const Connection = () => {
    const { datas, events } = useConnection()

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            {datas.user && (
                <>
                    {!datas.user.connectionEmail ? (
                        <View style={styles.ConnectionContainer}>
                            <Text style={styles.Title}>연인의 계정을 연결해 주세요.</Text>
                            <Text style={styles.Explanation}>연결을 요청해 주세요.</Text>
                            <View style={styles.SearchContainer}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder={'연인의 이메일을 입력해 주세요.'}
                                    value={datas.email}
                                    onChangeText={(text) => {
                                        events.setEmail(text)
                                    }}
                                />
                                <TouchableOpacity style={styles.ButtonContainer} onPress={events.handleRequest}>
                                    <Text style={styles.ButtonText}>연결</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : datas.user.connectionState === 'S' ? (
                        <View style={styles.ConnectionContainer}>
                            <Text style={styles.Title}>연인의 계정을 연결해 주세요.</Text>
                            <Text style={styles.Explanation}>연결을 요청 중입니다.</Text>
                            <Text style={styles.Text}>{datas.user.connectionEmail}</Text>
                        </View>
                    ) : datas.user.connectionState === 'R' ? (
                        <View style={styles.ConnectionContainer}>
                            <Text style={styles.Title}>연인의 계정을 연결해 주세요.</Text>
                            <Text style={styles.Explanation}>연결 요청을 수락해 주세요.</Text>
                            <Text style={styles.Text}>{datas.user.connectionEmail}</Text>
                            <TouchableOpacity style={styles.ButtonContainer} onPress={events.handleResponse}>
                                <Text style={styles.ButtonText}>수락</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <></>
                    )}
                </>
            )}
        </View>
    )
}

export default Connection

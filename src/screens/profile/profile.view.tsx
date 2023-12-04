import React from 'react'
import { StatusBar, View, Text, ScrollView } from 'react-native'
import { styles } from './profile.style'
import ProfileBody from '../../components/profile/profile-body.view'
import { AccountData } from '../../datas/account.data'

const Profile = () => {
    return (
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <View style={styles.ActionContainer}>
                <View>
                    <Text style={styles.EditText}>편집</Text>
                </View>
            </View>
            <ProfileBody value={AccountData[0]} />
        </ScrollView>
    )
}

export default Profile

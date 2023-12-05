import React from 'react'
import { StatusBar, View, Text, ScrollView } from 'react-native'
import { styles } from './profile.style'
import ProfileBody from '../../components/profile/profile-body.view'
import { useProfile } from './profile.hook'

const Profile = () => {
    const { datas } = useProfile()

    return (
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <View style={styles.ActionContainer}>
                <View>
                    <Text style={styles.EditText}>편집</Text>
                </View>
            </View>
            {datas.profile && <ProfileBody value={datas.profile} />}
        </ScrollView>
    )
}

export default Profile

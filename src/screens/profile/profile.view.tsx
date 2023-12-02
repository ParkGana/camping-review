import React from 'react'
import { StatusBar, Text, ScrollView } from 'react-native'
import { styles } from './profile.style'

const Profile = () => {
    return (
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <Text>Profile Page</Text>
        </ScrollView>
    )
}

export default Profile

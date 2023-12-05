import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './profile-body.style'
import { UserModel } from '../../model/user.model'

const ProfileBody = ({ value }: { value: UserModel }) => {
    return (
        <View>
            <View style={styles.ProfileContainer}>
                <View style={styles.ImageContainer}>
                    <Image source={require('../../../assets/images/profile.png')} style={styles.ProfileImage} />
                </View>
            </View>
            <View style={styles.InfoContainer}>
                <View style={styles.DataContainer}>
                    <Text style={styles.FieldText}>이름</Text>
                    <Text style={styles.ValueText}>{value.name}</Text>
                </View>
                <View style={styles.DataContainer}>
                    <Text style={styles.FieldText}>이메일</Text>
                    <Text style={styles.ValueText}>{value.email}</Text>
                </View>
            </View>
            <View style={styles.InfoContainer}>
                <View style={styles.DataContainer}>
                    <Text style={styles.FieldText}>연결 계정</Text>
                    <Text style={styles.ValueText}>{value.connectionEmail ?? ' '}</Text>
                </View>
            </View>
        </View>
    )
}

export default ProfileBody

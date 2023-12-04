import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './profile-body.style'
import { AccountData, AccountDataType } from '../../datas/account.data'

const ProfileBody = ({ value }: { value: AccountDataType }) => {
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
                    {AccountData.findIndex((item) => item.id === value.connectAccountId) > -1 ? (
                        <Text style={styles.ValueText}>
                            {AccountData[AccountData.findIndex((item) => item.id === value.connectAccountId)].email}
                        </Text>
                    ) : (
                        <Text style={styles.ValueText}> </Text>
                    )}
                </View>
            </View>
        </View>
    )
}

export default ProfileBody

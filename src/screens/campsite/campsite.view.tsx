import React from 'react'
import { StatusBar, Text, ScrollView } from 'react-native'
import { styles } from './campsite.style'

const Campsite = () => {
    return (
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
            <Text>Campsite Page</Text>
        </ScrollView>
    )
}

export default Campsite

import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CampsiteList from './src/screens/campsite/campsite-list.view'
import Profile from './src/screens/profile/profile.view'
import SignIn from './src/screens/account/signin.view'
import SignUp from './src/screens/account/signup.view'
import CampsiteDetail from './src/screens/campsite/campsite-detail.view'

export default function App() {
    const Tab = createBottomTabNavigator()
    const Stack = createNativeStackNavigator()

    const BottomTab = () => {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,
                    tabBarIcon: ({ focused }) => {
                        let tabIcon

                        switch (route.name) {
                            case 'CampsiteList':
                                tabIcon = focused
                                    ? require('./assets/icons/campsite-focused.png')
                                    : require('./assets/icons/campsite-unfocused.png')
                                break
                            case 'Profile':
                                tabIcon = focused
                                    ? require('./assets/icons/profile-focused.png')
                                    : require('./assets/icons/profile-unfocused.png')
                                break
                        }

                        return <Image source={tabIcon} />
                    }
                })}
            >
                <Tab.Screen name="CampsiteList" component={CampsiteList} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="BottomTab" component={BottomTab} />
                <Stack.Screen name="CampsiteDetail" component={CampsiteDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

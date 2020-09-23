import React from 'react';

import SplashScreen from '../screens/SplashScreen/SplashScreen';
import MainScreen from '../screens/MainScreen/MainScreen';
import NewAdScreen from '../screens/NewAdScreen/NewAdScreen';
import ForGivingRent from '../screens/NewAdScreen/ForGivingRent';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



import {
    View,
    Image,
    Text,
    StatusBar,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { color } from 'react-native-reanimated';

const dimensions = Dimensions.get("window");
const sw = dimensions.width;

const Stack = createStackNavigator();

const navigators = () => {
    return (

        <NavigationContainer>

            <StatusBar
                backgroundColor="#24536B"
                barStyle="light-content"
            />
            <Stack.Navigator

                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#275A74',
                    },
                    headerLeft: () => (
                        <Image source={require('../assets/logo/logo.png')}
                            style={{ height: 30, width: 30 * 6.81 }} />
                    ),


                }}
            >
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />

                {/*  <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: true, title: null }} />*/}
                <Stack.Screen name="Main" component={MainScreen} options={({ navigation, route }) => ({
                    title: null,
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.push('NewAd') }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04 }}>
                                + বিজ্ঞাপন দিন
                       </Text>
                        </TouchableOpacity>
                    ),
                })} />
                <Stack.Screen name="NewAd" component={NewAdScreen} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.push('Main') }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (

                        <Text style={{ color: 'white', fontSize: sw * 0.04, textAlign: 'center' }}>
                            New AD
                        </Text>

                    ),

                })} />
                <Stack.Screen name="ForGivingRent" component={ForGivingRent} options={{ headerShown: true }} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default navigators;
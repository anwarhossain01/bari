import React from 'react';

import SplashScreen from '../screens/SplashScreen/SplashScreen';
import MainScreen from '../screens/MainScreen/MainScreen';
import NewAdScreen from '../screens/NewAdScreen/NewAdScreen';
import ForGivingRent from '../screens/NewAdScreen/ForGivingRent';
import VisitingCardListScreen from '../screens/VisitingCardsScreen/VisitingCardListScreen'
import VisitingCardAddScreen from '../screens/VisitingCardsScreen/VisitingCardAddScreen'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MobileNumberScreen from '../screens/UserJoinScreen/MobileNumberScreen';
import LanguageChangeScreen from '../screens/UserJoinScreen/LanguageChangeScreen'
import UserLocationScreen from '../screens/UserJoinScreen/UserLocationScreen';
import OtpNumberScreen from '../screens/UserJoinScreen/OtpNumberScreen';
import AboutYourProduct from '../screens/SwapScreen/AboutYourProduct';
import ProductPhotos from '../screens/SwapScreen/ProductPhotos';
import ContactInfo from '../screens/SwapScreen/ContactInfo'
import PostPreview from '../screens/SwapScreen/PostPreview';

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

                <Stack.Screen name="mobile_number_screen" component={MobileNumberScreen} options={{ headerShown: false }} />
                <Stack.Screen name="language_change_screen" component={LanguageChangeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="user_location_screen" component={UserLocationScreen} options={{ headerShown: false }} />
                <Stack.Screen name="otp_number_screen" component={OtpNumberScreen} options={{ headerShown: false }} />

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

                <Stack.Screen name="VisitingCardListScreen" component={VisitingCardListScreen} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.push('VisitingCardAddScreen') }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04 }}>
                                + ভিজিটিং কার্ড
                       </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="VisitingCardAddScreen" component={VisitingCardAddScreen} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="AboutYourProduct" component={AboutYourProduct} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="ProductPhotos" component={ProductPhotos} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="ContactInfo" component={ContactInfo} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="PostPreview" component={PostPreview} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

            </Stack.Navigator>

        </NavigationContainer >
    );
}

export default navigators;
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
import SwappableProductfrom from '../screens/SwapScreen/SwappableProduct';
import ProductPhotos from '../screens/SwapScreen/ProductPhotos';
import AboutYourProduct from '../screens/SwapScreen/AboutYourProduct';
import ContactInfo from '../screens/SwapScreen/ContactInfo';
import PostPreview from '../screens/SwapScreen/PostPreview';
import LostFoundMainScreen from '../screens/LostFound/LostFoundMainScreen';
import LostDecriptionScreen from '../screens/LostScreens/LostDecriptionScreen'
import LostPhotosScreen from '../screens/LostScreens/LostPhotosScreen'
import LostPostReview from '../screens/LostScreens/LostPostReview'
import FoundDecriptionScreen from '../screens/FoundScreens/FoundDescriptionScreen'
import FoundPhotosScreen from '../screens/FoundScreens/FoundPhotosScreen'
import FoundPostReview from '../screens/FoundScreens/FoundPostReview'
import JobDescription from '../screens/JobScreen/JobDescription';
import JobRequirements from '../screens/JobScreen/JobRequirements';
import JobCommunication from '../screens/JobScreen/JobCommunication';
import JobPostReview from '../screens/JobScreen/JobPostPreview';
import FoodBusinessIntro from '../screens/FoodBusinessIntroduction/FoodBusinessIntro';
import FoodBusinessIntroPhotos from '../screens/FoodBusinessIntroduction/FoodBusinessIntroPhotos';
import FoodBusinessIntroContact from '../screens/FoodBusinessIntroduction/FoodBusinessIntroContact';
import FoodBusinessIntroPostReview from '../screens/FoodBusinessIntroduction/FoodBusinessIntroPostReview';
import BloodNeededScreen from '../screens/BloodHome/BloodNeededScreen';
import WantToTeach from '../screens/WantToTeachScreen/WantToTeach';
import OwnerShipChoose from '../screens/CarsRental/OwnerShipChoose';
import IndividualOwnership from '../screens/CarsRental/IndividualOwnership';
import CarRentalPhotos from '../screens/CarsRental/CarRentalPhotos';
import CarRentalPostReview from '../screens/CarsRental/CarRentalPostReview';
import Organization from '../screens/CarsRental/Organization';
import DonateBlood from '../screens/BloodHome/DonateBlood';
import RentMainScreen from '../screens/Rent/RentMainScreen';
import GiveOnRentDescription from '../screens/GiveOnRent/GiveOnRentDescription';
import GiveOnRentContact from '../screens/GiveOnRent/GiveOnRentContact';
import GiveOnRentPhotos from '../screens/GiveOnRent/GiveOnRentPhotos';
import GiveOnRentPostReview from '../screens/GiveOnRent/GiveOnRentPostReview';
import TakeOnRentDescription from '../screens/TakeOnRent/TakeOnRentDescription';
import BuySellMainScreen from '../screens/Buy_Sell/BuySellMainScreen';
import WantToSellDescription from '../screens/WantToSell/WantToSellDescription';
import WantToSellContact from '../screens/WantToSell/WantToSellContact';
import WantToSellPhotos from '../screens/WantToSell/WantToSellPhotos';
import WantToSellPostReview from '../screens/WantToSell/WantToSellPostReview';
import WantToBuyDescription from '../screens/WantToBuy/WantToBuyDescription';
import WantToBuyContact from '../screens/WantToBuy/WantToBuyContact';
import WantToBuyPhotos from '../screens/WantToBuy/WantToBuyPhotos';
import WantToBuyPostReview from '../screens/WantToBuy/WantToBuyPostReview';
import GroomBrideHomeScreen from '../screens/Matrimony/GroomBrideHomeScreen'
import GroomDescription from '../screens/Matrimony/GroomDescription'
import GroomPhotos from '../screens/Matrimony/GroomPhotos'
import GroomPostPreview from '../screens/Matrimony/GroomPostPreview'
import GroomAddress from '../screens/Matrimony/GroomAddress'
import KindOfBrideWant from '../screens/Matrimony/KindOfBrideWant'
import BrideDescription from '../screens/Matrimony/BrideDescription'
import BrideAddress from '../screens/Matrimony/BrideAddress'
import BridePhotos from '../screens/Matrimony/BridePhotos'
import KindOfGroomWant from '../screens/Matrimony/KindOfGroomWant'
import BridePostPreview from '../screens/Matrimony/BridePostPreview'

import {
    View,
    Image,
    Text,
    StatusBar,
    Dimensions,
    TouchableOpacity
} from 'react-native';

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
                        <Image source={require('../assets/logo/Jhotpot-Logo-1536x1536-1.png')}
                            style={{ height: 30, width: 30 * 6.81 }} />
                    ),


                }}
            >

<Stack.Screen name="NewAd" component={NewAdScreen} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.push('Main') }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),
                    // headerRight: () => (

                    //     <Text style={{ color: 'white', fontSize: sw * 0.04, textAlign: 'center', marginRight: sw * 0.02 }}>
                    //         New AD
                    //     </Text>

                    // ),

                })} />

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

                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="mobile_number_screen" component={MobileNumberScreen} options={{ headerShown: false }} />
                <Stack.Screen name="language_change_screen" component={LanguageChangeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="user_location_screen" component={UserLocationScreen} options={{ headerShown: false }} />
                <Stack.Screen name="otp_number_screen" component={OtpNumberScreen} options={{ headerShown: false }} />

                
                <Stack.Screen name="WantToTeach" component={WantToTeach} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />


                {/*  <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: true, title: null }} />*/}
                {/* <Stack.Screen name="Main" component={MainScreen} options={({ navigation, route }) => ({
                    title: null,
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.push('NewAd') }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04 }}>
                                + বিজ্ঞাপন দিন
                       </Text>
                        </TouchableOpacity>
                    ),
                })} /> */}

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

                <Stack.Screen name="SwappableProductfrom" component={SwappableProductfrom} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="BuySellMainScreen" component={BuySellMainScreen} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="LostFoundMainScreen" component={LostFoundMainScreen} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="LostDecriptionScreen" component={LostDecriptionScreen} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="LostPhotosScreen" component={LostPhotosScreen} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="LostPostReview" component={LostPostReview} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />


                <Stack.Screen name="FoundDecriptionScreen" component={FoundDecriptionScreen} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="FoundPhotosScreen" component={FoundPhotosScreen} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="FoundPostReview" component={FoundPostReview} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="JobDescription" component={JobDescription} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="JobRequirements" component={JobRequirements} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="JobCommunication" component={JobCommunication} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="JobPostReview" component={JobPostReview} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="FoodBusinessIntro" component={FoodBusinessIntro} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="FoodBusinessIntroPhotos" component={FoodBusinessIntroPhotos} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="FoodBusinessIntroContact" component={FoodBusinessIntroContact} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="FoodBusinessIntroPostReview" component={FoodBusinessIntroPostReview} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="BloodNeededScreen" component={BloodNeededScreen} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />



                <Stack.Screen name="OwnerShipChoose" component={OwnerShipChoose} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="IndividualOwnership" component={IndividualOwnership} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="CarRentalPhotos" component={CarRentalPhotos} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="CarRentalPostReview" component={CarRentalPostReview} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="Organization" component={Organization} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="DonateBlood" component={DonateBlood} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="RentMainScreen" component={RentMainScreen} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="GiveOnRentDescription" component={GiveOnRentDescription} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="GiveOnRentContact" component={GiveOnRentContact} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="GiveOnRentPhotos" component={GiveOnRentPhotos} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="GiveOnRentPostReview" component={GiveOnRentPostReview} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="TakeOnRentDescription" component={TakeOnRentDescription} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="WantToSellDescription" component={WantToSellDescription} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="WantToSellContact" component={WantToSellContact} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="WantToSellPhotos" component={WantToSellPhotos} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="WantToSellPostReview" component={WantToSellPostReview} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />


                <Stack.Screen name="WantToBuyDescription" component={WantToBuyDescription} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="WantToBuyContact" component={WantToBuyContact} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="WantToBuyPhotos" component={WantToBuyPhotos} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="WantToBuyPostReview" component={WantToBuyPostReview} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="GroomBrideHomeScreen" component={GroomBrideHomeScreen} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />


                <Stack.Screen name="GroomDescription" component={GroomDescription} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),


                })} />

                <Stack.Screen name="GroomAddress" component={GroomAddress} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="GroomPhotos" component={GroomPhotos} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="KindOfBrideWant" component={KindOfBrideWant} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="GroomPostPreview" component={GroomPostPreview} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="BrideDescription" component={BrideDescription} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="BrideAddress" component={BrideAddress} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="BridePhotos" component={BridePhotos} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="KindOfGroomWant" component={KindOfGroomWant} options={({ navigation, route }) => ({
                    title: null,
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => { navigation.goBack() }}>
                            <Text style={{ color: 'white', fontSize: sw * 0.04, marginLeft: sw * 0.02 }}>
                                BACK
                   </Text>
                        </TouchableOpacity>
                    ),

                })} />

                <Stack.Screen name="BridePostPreview" component={BridePostPreview} options={({ navigation, route }) => ({
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
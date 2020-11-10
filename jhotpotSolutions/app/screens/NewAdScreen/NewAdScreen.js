import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Modal,
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList
} from 'react-native';
import { color } from 'react-native-reanimated';

import ScreenSize from '../../common/ScreenSize';
import DatabaseOffline from '../../DatabaseOffline/DatabaseOffline';
import Lang from '../../common/Languages'

export default class NewAdScreen extends React.Component {
    constructor(props) {
        super();

        this.dbOffline = new DatabaseOffline();
        this.state = {
            allCategories: []
        }


    }
    async componentDidMount() {



        let allCategories = await this.dbOffline.get_all_categories();
        this.setState({ allCategories });

    }

    renderItem = (item) => {
        return (
            <TouchableOpacity style={{
                borderColor: '#24536B',
                borderRadius: 5,
                borderWidth: 2,
                width: ScreenSize.sw / 2 - 10,
                pdding: 15
            }} onPress={() => this.props.navigation.navigate('ForGivingRent')}>

                <Text style={{

                    fontSize: ScreenSize.sw * 0.04,
                    fontWeight: 'bold',


                    textAlign: 'center'
                }}>{item.ad_category_bn_name}</Text>

                <Text style={{

                    fontSize: ScreenSize.sw * 0.027,
                    fontWeight: 'bold',


                    textAlign: 'center'
                }}>{item.ad_category_bn_info} </Text>

            </TouchableOpacity>
        )
    }

    render() {
        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <ScrollView>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{ textAlign: 'center', fontSize: ScreenSize.sw * 0.05, fontWeight: 'bold' }}>আপনি কি ধরনের বিজ্ঞাপন দিতে চান?</Text>
                        <Text style={{ textAlign: 'center', fontSize: ScreenSize.sw * 0.05, fontWeight: 'bold', color: 'red' }}>*</Text>
                    </View>

                    <View style={styles.image_container}>
                        <View style={{ flexDirection: 'row', }}>
                            <Image source={require('../../assets/icons/jps_swapping.png')} style={styles.image_style}></Image>

                        </View>
                        <Text style={styles.contain_detail_text}>আপনার জিনিসপত্র অন্যের সাথে অদলবদল করুন ,নিজে উপকৃত হোন এবং অন্যকে উপকৃত করুন ।</Text>
                        <TouchableOpacity style={[styles.full_width_button_style, { backgroundColor: '#5AA6DD' }]}
                            onPress={() => this.props.navigation.navigate('SwappableProductfrom')}>
                            <Text style={styles.button_text}>জিনিসপত্রের অদলবদল</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.image_container}>
                        <Image source={require('../../assets/icons/jps_rent.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            যেকোন ধরনের বৈধ সম্পদ ভাড়া দেওয়া বা নেওয়ার জন্য বিজ্ঞাপন দিতে পারেন , যেমন : ফ্ল্যাট - সাবলেট - রুম - মেস - দোকান - অফিস - গ্যারেজ - প্লট - গাড়ী - অন্যান্য
                        </Text>

                        <View style={{ flexDirection: 'row' }} >
                            <TouchableOpacity style={[styles.half_width_button_style, { backgroundColor: '#7ACE7A' }]}
                                onPress={() => this.props.navigation.navigate('GiveOnRentDescription')}>
                                <Text style={styles.button_text}>ভাড়া দিতে চাই</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.half_width_button_style, { backgroundColor: '#7ACE7A' }]}
                                onPress={() => this.props.navigation.navigate('TakeOnRentDescription')}>
                                <Text style={styles.button_text}>ভাড়া নিতে চাই</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={styles.image_container}>

                        <Image source={require('../../assets/icons/jps_buy_sell.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            যেকোন ধরনের বৈধ সম্পদ বিক্র​য় কিম্বা ক্র​য় করার জন্য বিজ্ঞাপন দিতে পারেন , যেমন : প্লট - বাড়ী-গাড়ী - ফ্ল্যাট - দোকান - অফিস - অন্যান্য
                        </Text>

                        <View style={{ flexDirection: 'row' }} >

                            <TouchableOpacity style={[styles.half_width_button_style, { backgroundColor: '#48AEF0' }]}
                                onPress={() => this.props.navigation.navigate('WantToSellDescription')}>
                                <Text style={styles.button_text} >বিক্র​য় করতে চাই</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.half_width_button_style} style={[styles.half_width_button_style, { backgroundColor: '#48AEF0' }]}
                                onPress={() => this.props.navigation.navigate('WantToBuyDescription')}>
                                <Text style={styles.button_text}>ক্র​য় করতে চাই </Text>
                            </TouchableOpacity>

                        </View>

                    </View>


                    <View style={styles.image_container}>

                        <Image source={require('../../assets/icons/jps_lost_and_found.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            আপনার কোন কিছু হারিয়ে গেলে কিংবা আপনি যদি কোন কিছু পেয়ে থাকেন তবে এখানে বিজ্ঞাপন দিতে পারেন ; যেমন :মানুষ - পোষা প্রাণী - ডকুমেন্টস - অন্যান্য
                        </Text>

                        <View style={{ flexDirection: 'row' }} >

                            <TouchableOpacity style={[styles.half_width_button_style, { backgroundColor: '#323232' }]}
                                onPress={() => this.props.navigation.navigate('LostDecriptionScreen')}>
                                <Text style={[styles.button_text, { color: 'white' }]}>হারানো গিয়েছে</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.half_width_button_style, { backgroundColor: '#323232' }]}
                                onPress={() => this.props.navigation.navigate('FoundDecriptionScreen')}>
                                <Text style={[styles.button_text, { color: 'white' }]}>পাওয়া গিয়েছে </Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={styles.image_container}>

                        <Image source={require('../../assets/icons/jps_blood_donation.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            রক্তের প্রয়োজন কিংবা রক্ত দানে ইচ্ছুক ?? যোগাযোগের জন্য এখই নিবন্ধন করুন। নিজে উপকৃত হোন এবং অন্যকে উপকৃত করুন
                        </Text>

                        <View style={{ flexDirection: 'row' }} >

                            <TouchableOpacity style={[styles.half_width_button_style, { backgroundColor: '#FF555F' }]}
                                onPress={() => this.props.navigation.navigate('DonateBlood')}>
                                <Text style={[styles.button_text, { color: 'white' }]}>রক্ত দানে ইচ্ছুক</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.half_width_button_style, { backgroundColor: '#FF555F' }]}
                                onPress={() => this.props.navigation.navigate('BloodNeededScreen')}>
                                <Text style={[styles.button_text, { color: 'white' }]}>রক্তের প্রয়োজন</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={styles.image_container}>

                        <Image source={require('../../assets/icons/jsp_car_rental.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            গাড়ি ভাড়া দিতে ইচ্ছুক ?? তবে এখানে বিজ্ঞাপন দিতে পারেন, যেমন: প্রাইভেট কার-মাইক্রোবাস-হাইস-গাড-মিনি বাস-বাস-পিকআপ-ট্রাক-অন্যান্য
                        </Text>

                        <TouchableOpacity style={[styles.full_width_button_style, { backgroundColor: '#E89427' }]}
                            onPress={() => this.props.navigation.navigate('OwnerShipChoose')} >
                            <Text style={[styles.button_text, { color: 'white' }]}>গাড়ি ভাড়া</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.image_container}>

                        <Image source={require('../../assets/icons/jps_hiring.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            নিজস্ব কিংবা আপনার প্রতিষ্ঠানের জন্য সঠিক কর্মী খুঁজছেন ?? তাহলে এখনি নিয়োগের বিবরণ দিয়ে বিজ্ঞাপন দিতে পারেন
                        </Text>

                        <TouchableOpacity style={[styles.full_width_button_style, { backgroundColor: '#FFFFC9' }]}
                            onPress={() => this.props.navigation.navigate('JobDescription')}>
                            <Text style={styles.button_text}>চাকরির নিয়োগ</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.image_container}>

                        <Image source={require('../../assets/icons/jps_food_court.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            যেকোনো খাবার ব্যবসার(হোটেল-রেঁস্তোরা/রেস্টুরেন্ট/ফাস্ট ফুড/টি শপ/কফি শপ/মিক্সড) পরিচিতির জন্য বিজ্ঞাপন দিতে পারেন
                        </Text>

                        <TouchableOpacity style={[styles.full_width_button_style, { backgroundColor: '#FCECDB' }]}
                            onPress={() => this.props.navigation.navigate('FoodBusinessIntro')}>
                            <Text style={styles.button_text}>খাবার ব্যবসার পরিচিতি</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.image_container}>

                        <Image source={require('../../assets/icons/jps_teacher.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            আপনি কি টিউশনি করাতে চান (পড়াতে চাই/পড়াব)?? তবে এখনি বিজ্ঞাপন দিতে পারেন 
                        </Text>

                        <TouchableOpacity style={[styles.full_width_button_style, { backgroundColor: '#22524C' }]}
                            onPress={() => this.props.navigation.navigate('WantToTeach')}>
                            <Text style={[styles.button_text, { color: 'white' }]}>পড়াতে চাই</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    image_style: {
        width: ScreenSize.sw - 10,
        // resizeMode: 'cover',
        height: ScreenSize.sw / 2,
    },
    image_container: {
        //borderColor: '#24536B',
        //backgroundColor: 'LightBlue',
        // borderWidth: ScreenSize.sw * 0.002,
        width: ScreenSize.sw - 10,
        margin: ScreenSize.sw * 0.01,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: ScreenSize.sw * 0.06
    },

    full_width_button_style: {
        // borderColor: '#24536B',
        // borderTopWidth: 2,
        marginTop: ScreenSize.sw * 0.03,
        width: ScreenSize.sw - 10,
        padding: ScreenSize.sw * 0.02,
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    half_width_button_style: {
        //  borderColor: '#24536B',
        // borderTopWidth: 2,
        marginTop: ScreenSize.sw * 0.03,
        margin: ScreenSize.sw * 0.002,
        padding: ScreenSize.sw * 0.02,
        //  backgroundColor: '#A8D9D3',
        flex: 1,
    },
    contain_detail_text: {
        fontSize: ScreenSize.sw * 0.04,
        //fontWeight: 'bold',
        textAlign: 'center'
    },
    button_text: {
        fontSize: ScreenSize.sw * 0.05,
        fontWeight: 'bold',
        // color: 'white',
        textAlign: 'center'
    },


});

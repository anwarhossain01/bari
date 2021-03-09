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
    FlatList,
    TouchableHighlight,
    TouchableHighlightBase
} from 'react-native';
import { color } from 'react-native-reanimated';

import ScreenSize from '../../common/ScreenSize';
import DatabaseOffline from '../../DatabaseOffline/DatabaseOffline';
import Lang from '../../common/Languages'
import Global from '../../common/Global'

export default class NewAdScreen extends React.Component {
    constructor(props) {
        super();

       // this.dbOffline = new DatabaseOffline();
        this.state = {
            allCategories: [],
            lang_type: Global.LANGUAGE_NAME,
        }


    }
    async componentDidMount() {
        // let allCategories = await this.dbOffline.get_all_categories();
        // this.setState({ allCategories });

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

            <SafeAreaView style={{ flex: 1, backgroundColor: '#275A74' }}>
                <ScrollView>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{ textAlign: 'center', fontSize: ScreenSize.sw * 0.05, fontWeight: 'bold', marginBottom: ScreenSize.sw * 0.03, color: 'white' }}>
                            {Lang[this.state.lang_type].what_kind_of_ads_do_you_want.toUpperCase()}
                        </Text>
                        <Text style={{ textAlign: 'center', fontSize: ScreenSize.sw * 0.05, fontWeight: 'bold', color: 'red' }}>*</Text>
                    </View>

                    <TouchableOpacity style={styles.image_container} onPress={() => this.props.navigation.navigate('WantToTeach')}>

                        <Image source={require('../../assets/icons/jps_teacher.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            {Lang[this.state.lang_type].looking_to_find_new_student}
                        </Text>

                        <TouchableHighlight style={[styles.full_width_button_style, { backgroundColor: '#22524C' }]}
                            onPress={() => this.props.navigation.navigate('WantToTeach')}>
                            <Text style={[styles.button_text, { color: 'white' }]}>{Lang[this.state.lang_type].teaching.toUpperCase()}</Text>
                        </TouchableHighlight>

                    </TouchableOpacity>

                    {/******************************Start Swapping************************************/}
                    <TouchableOpacity style={styles.image_container} onPress={() => this.props.navigation.navigate('AboutYourProduct')}>
                        <View style={{ flexDirection: 'row', }} >
                            <Image source={require('../../assets/icons/jps_swapping.jpg')} style={styles.image_style}></Image>
                        </View>
                        <Text style={styles.contain_detail_text}  >
                            {Lang[this.state.lang_type].exchange_your_belongings_with_others}
                        </Text>
                        <TouchableHighlight style={[styles.full_width_button_style, { backgroundColor: '#FFF000' }]}
                            onPress={() => this.props.navigation.navigate('AboutYourProduct')} underlayColor="gray">
                            <Text style={styles.button_text}>{Lang[this.state.lang_type].swap_of_products.toUpperCase()}</Text>
                        </TouchableHighlight>
                    </TouchableOpacity>
                    {/*********************************End Swapping************************************/}

                    <TouchableOpacity style={styles.image_container} onPress={() => this.props.navigation.navigate('OwnerShipChoose')} >

                        <Image source={require('../../assets/icons/jsp_car_rental.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            {Lang[this.state.lang_type].you_can_advertise_your_car_rent}
                        </Text>

                        <TouchableHighlight style={[styles.full_width_button_style, { backgroundColor: '#E89427' }]}
                            onPress={() => this.props.navigation.navigate('OwnerShipChoose')} >
                            <Text style={[styles.button_text, { color: 'white' }]}>{Lang[this.state.lang_type].all_type_of_car_rent.toUpperCase()}</Text>
                        </TouchableHighlight>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.image_container} onPress={() => this.props.navigation.navigate('RentMainScreen')} >

                        <Image source={require('../../assets/icons/jps_rent.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            {Lang[this.state.lang_type].you_can_advertise_any_kind_property_for_rent}
                        </Text>

                        <TouchableHighlight style={[styles.full_width_button_style, { backgroundColor: '#7ACE7A' }]}
                            onPress={() => this.props.navigation.navigate('RentMainScreen')} >
                            <Text style={[styles.button_text, { color: 'white' }]}>{Lang[this.state.lang_type].rent_give_take.toUpperCase()}</Text>
                        </TouchableHighlight>

                    </TouchableOpacity>

                    {/* <TouchableOpacity style={styles.image_container}>
                        <Image source={require('../../assets/icons/jps_rent.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            {Lang[this.state.lang_type].you_can_advertise_any_kind_property_for_rent}
                        </Text>

                        <View style={{ flexDirection: 'row' }} >
                            <TouchableOpacity style={[styles.half_width_button_style, { backgroundColor: '#7ACE7A' }]}
                                onPress={() => this.props.navigation.navigate('GiveOnRentDescription')}>
                                <Text style={styles.button_text}>{Lang[this.state.lang_type].owner}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.half_width_button_style, { backgroundColor: '#7ACE7A' }]}
                                onPress={() => this.props.navigation.navigate('TakeOnRentDescription')}>
                                <Text style={styles.button_text}>{Lang[this.state.lang_type].renter}</Text>
                            </TouchableOpacity>

                        </View>

                    </TouchableOpacity> */}

                    {/* <View style={styles.image_container}>

                        <Image source={require('../../assets/icons/jps_shopping.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            {Lang[this.state.lang_type].you_can_advertise_your_car_rent}
                        </Text>

                        <TouchableOpacity style={[styles.full_width_button_style, { backgroundColor: '#C9EAF2' }]}
                            onPress={() => this.props.navigation.navigate('OwnerShipChoose')} >
                            <Text style={styles.button_text}>{Lang[this.state.lang_type].online_product_sell.toUpperCase()}</Text>
                        </TouchableOpacity>

                    </View> */}

                    <TouchableOpacity style={styles.image_container} onPress={() => this.props.navigation.navigate('BuySellMainScreen')}>

                        <Image source={require('../../assets/icons/jps_buy_sell.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            {Lang[this.state.lang_type].you_can_advertise_for_sale_or_purchase}
                        </Text>


                        <TouchableOpacity style={[styles.full_width_button_style, { backgroundColor: '#48AEF0' }]}
                            onPress={() => this.props.navigation.navigate('BuySellMainScreen')}>
                            <Text style={[styles.button_text, { color: 'white' }]}>{Lang[this.state.lang_type].buy_sell.toUpperCase()}</Text>
                        </TouchableOpacity>


                    </TouchableOpacity>

                    {/* <TouchableOpacity style={styles.image_container}>

                        <Image source={require('../../assets/icons/jps_buy_sell.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            {Lang[this.state.lang_type].you_can_advertise_for_sale_or_purchase}
                        </Text>

                        <View style={{ flexDirection: 'row' }} >

                            <TouchableOpacity style={[styles.half_width_button_style, { backgroundColor: '#48AEF0' }]}
                                onPress={() => this.props.navigation.navigate('WantToSellDescription')}>
                                <Text style={[styles.button_text, { color: 'white' }]} >{Lang[this.state.lang_type].sell.toUpperCase()}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.half_width_button_style} style={[styles.half_width_button_style, { backgroundColor: '#48AEF0' }]}
                                onPress={() => this.props.navigation.navigate('WantToBuyDescription')}>
                                <Text style={[styles.button_text, { color: 'white' }]}>{Lang[this.state.lang_type].buy.toUpperCase()}</Text>
                            </TouchableOpacity>

                        </View>

                    </TouchableOpacity> */}

                    <TouchableOpacity style={styles.image_container} onPress={() => this.props.navigation.navigate('GroomBrideHomeScreen')}>

                        <Image source={require('../../assets/icons/jps_marriage.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            {Lang[this.state.lang_type].find_your_life_parter_message}
                        </Text>

                        <TouchableHighlight style={[styles.full_width_button_style, { backgroundColor: '#62001C' }]}
                            onPress={() => this.props.navigation.navigate('GroomBrideHomeScreen')} >
                            <Text style={[styles.button_text, { color: 'white' }]}>{Lang[this.state.lang_type].want_groom_bride.toUpperCase()}</Text>
                        </TouchableHighlight>

                    </TouchableOpacity>


                    <TouchableOpacity style={styles.image_container} onPress={() => this.props.navigation.navigate('JobDescription')}>

                        <Image source={require('../../assets/icons/jps_hiring.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            {Lang[this.state.lang_type].job_circuler_details}
                        </Text>

                        <TouchableHighlight style={[styles.full_width_button_style, { backgroundColor: '#FFFFC9' }]}
                            onPress={() => this.props.navigation.navigate('JobDescription')} underlayColor="gray">
                            <Text style={styles.button_text}>{Lang[this.state.lang_type].recruitment_advertisement.toUpperCase()}</Text>
                        </TouchableHighlight>

                    </TouchableOpacity>


                    {/*
                    <View style={styles.image_container}>

                        <Image source={require('../../assets/icons/jps_blood_donation.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            {Lang[this.state.lang_type].need_blood_or_willing_to_donate_blood}
                        </Text>

                        <View style={{ flexDirection: 'row' }} >

                            <TouchableOpacity style={[styles.half_width_button_style, { backgroundColor: '#F23846' }]}
                                onPress={() => this.props.navigation.navigate('DonateBlood')}>
                                <Text style={[styles.button_text, { color: 'white' }]}>{Lang[this.state.lang_type].willing_to_donate_blood.toUpperCase()}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.half_width_button_style, { backgroundColor: '#F23846' }]}
                                onPress={() => this.props.navigation.navigate('BloodNeededScreen')}>
                                <Text style={[styles.button_text, { color: 'white' }]}>{Lang[this.state.lang_type].blood_needed.toUpperCase()}</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
*/}


                    <TouchableOpacity style={styles.image_container} onPress={() => this.props.navigation.navigate('FoodBusinessIntro')}>

                        <Image source={require('../../assets/icons/jps_food_court.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            {Lang[this.state.lang_type].food_advertise}
                        </Text>

                        <TouchableHighlight style={[styles.full_width_button_style, { backgroundColor: '#FCECDB' }]}
                            onPress={() => this.props.navigation.navigate('FoodBusinessIntro')} underlayColor="gray">
                            <Text style={styles.button_text}>{Lang[this.state.lang_type].food_business.toUpperCase()}</Text>
                        </TouchableHighlight>

                    </TouchableOpacity>

                    

                    <TouchableOpacity style={styles.image_container} onPress={() => this.props.navigation.navigate('LostFoundMainScreen')}>

                        <Image source={require('../../assets/icons/jps_lost_and_found.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            {Lang[this.state.lang_type].if_you_have_lost_found}
                        </Text>

                        <TouchableHighlight style={[styles.full_width_button_style, { backgroundColor: '#323232' }]}
                            onPress={() => this.props.navigation.navigate('LostFoundMainScreen')}>
                            <Text style={[styles.button_text, { color: 'white' }]}>{Lang[this.state.lang_type].lost_found.toUpperCase()}</Text>
                        </TouchableHighlight>

                    </TouchableOpacity>

                    {/* <View style={styles.image_container}>

                        <Image source={require('../../assets/icons/jps_lost_and_found.png')} style={styles.image_style}></Image>

                        <Text style={styles.contain_detail_text}>
                            {Lang[this.state.lang_type].if_you_have_lost_found}
                        </Text>

                        <TouchableOpacity style={{ flexDirection: 'row' }} >

                            <TouchableOpacity style={[styles.half_width_button_style, { backgroundColor: '#323232' }]}
                                onPress={() => this.props.navigation.navigate('LostDecriptionScreen')}>
                                <Text style={[styles.button_text, { color: 'white' }]}>{Lang[this.state.lang_type].lost.toUpperCase()}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.half_width_button_style, { backgroundColor: '#323232' }]}
                                onPress={() => this.props.navigation.navigate('FoundDecriptionScreen')}>
                                <Text style={[styles.button_text, { color: 'white' }]}>{Lang[this.state.lang_type].found.toUpperCase()}</Text>
                            </TouchableOpacity>

                        </TouchableOpacity>

                    </View> */}


                </ScrollView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    image_style: {
        width: "100%",
        // resizeMode: 'cover',
        height: ScreenSize.sw / 2,
    },
    image_container: {
        borderWidth: ScreenSize.sw * 0.002,
        borderColor: '#24536B',
        width: ScreenSize.sw - 10,
        marginLeft: ScreenSize.sw * 0.01,
        marginRight: ScreenSize.sw * 0.01,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: ScreenSize.sw * 0.06,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
    },

    full_width_button_style: {
        marginTop: ScreenSize.sw * 0.03,
        marginLeft: ScreenSize.sw * 0.01,
        marginRight: ScreenSize.sw * 0.01,
        width: ScreenSize.sw - 10,
        padding: ScreenSize.sw * 0.02,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    half_width_button_style: {

        marginTop: ScreenSize.sw * 0.03,
        margin: ScreenSize.sw * 0.002,
        justifyContent: 'center',
        padding: ScreenSize.sw * 0.02,

        flex: 1,
    },
    contain_detail_text: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: 'bold',
        padding: ScreenSize.sw * 0.005,
        textAlign: 'center'

    },
    button_text: {
        fontSize: ScreenSize.sw * 0.05,
        fontWeight: 'bold',
        // color: 'white',
        textAlign: 'center'
    },


});

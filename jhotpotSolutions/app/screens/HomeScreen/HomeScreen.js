import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Picker,
    View,
    Text,
    StyleSheet
} from 'react-native';

import ScreenSize from "../../common/ScreenSize";

import ForGivingRent from '../../components/ForGivingRent';
import LostAd from '../../components/LostAd';


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'All Categories সব ক্যাটাগরিগুলো'
        }

    }



    render() {
        return (

            <SafeAreaView style={{ flex: 1, }}>
                <Picker
                    selectedValue={this.state.category}
                    mode='dialog'
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ category: itemValue })
                    }>
                    <Picker.Item label="All Categories সব ক্যাটাগরিগুলো" value="js" />
                    <Picker.Item label="Apartment/Flat অ্যাপার্টমেন্ট/ফ্ল্যাট" value="java" />
                    <Picker.Item label="Rooms রুম" value="js" />
                    <Picker.Item label="Sublet সাবলেট" value="js" />
                    <Picker.Item label="Hostel/Seat/Roommate/Bachelor Mess হোস্টেল/সিট/রুমমেট/ব্যাচেলার মেস" value="Hostel/Seat/Roommate/Bachelor Mess হোস্টেল/সিট/রুমমেট/ব্যাচেলার মেস" />
                    <Picker.Item label="Plot প্লট" value="js" />
                    <Picker.Item label="Office/Apartment অফিস/অ্যাপার্টমেন্ট" value="js" />
                    <Picker.Item label="Sublet Office/Apartment সাবলেট অফিস/অ্যাপার্টমেন্ট" value="js" />
                    <Picker.Item label="Floor ফ্লোর" value="js" />
                    <Picker.Item label="Shop দোকান" value="js" />
                    <Picker.Item label="Warehouse গুদাম" value="js" />
                    <Picker.Item label="Car/MicroBus/MiniBus গাড়ী/মাইক্রোবাস/মিনিবাস" value="js" />
                    <Picker.Item label="Pickup/Truck/Vans পিকআপ/ট্রাক/ভ্যান" value="js" />
                </Picker>

                <ScrollView>

                    {/* ভাড়া দেওয়া হবে*/}
                    <ForGivingRent/>
                    {/* ভাড়া দেওয়া হবে*/}
                    <LostAd/>

                   
                </ScrollView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainCardView_WithPhoto: {
        flex: 1,
        width: ScreenSize.sw,
        height: ScreenSize.sh / 3,
    },
    mainCardView_part1_column: {
        flex: 0.15,
        flexDirection: 'row',
        backgroundColor: '#275A74',
        justifyContent: 'center',


    },
    mainCardView_part2_column: {
        flex: 0.70,
        flexDirection: 'row',
    },
    mainCardView_part3_column: {
        flex: 0.15,
        backgroundColor: '#275A74',
        justifyContent: 'center',
    },
    mainCardView_part2_row1: {
        flex: 0.20,
        backgroundColor: '#24536B',
        padding: 1,
    },
    mainCardView_part2_row2: {
        flex: 0.60,


    },

    mainCardView_part2_row3: {
        flex: 0.20,
        backgroundColor: '#24536B',
        padding: 1,


    },

    headerTextBangla: {
        fontSize: 0.06 * ScreenSize.sw,
        color: 'white'

    },
    headerTextEnglish: {
        fontSize: 0.03 * ScreenSize.sw,
        color: 'white',
        fontWeight: 'bold',

    },
    titleText: {
        fontSize: 0.05 * ScreenSize.sw,
        color: 'white',
        textAlign: 'center'
    },
    leftRightTextBangla: {
        color: 'white',
        fontSize: 0.036 * ScreenSize.sw,
        textAlign: 'center'

    },
    leftRightTextEnglish: {
        color: 'white',
        fontSize: 0.03 * ScreenSize.sw,
        textAlign: 'center',
        fontWeight: 'bold',

    }
});

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
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

            <SafeAreaView style={{ flex: 1,backgroundColor:'#FFFFFF'  }}>
               

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

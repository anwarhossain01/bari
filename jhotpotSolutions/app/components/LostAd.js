import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    ImageBackground,
    Image,
    StyleSheet
} from 'react-native';

import ScreenSize from "../common/ScreenSize";

export default class LostAd extends React.Component {
    constructor(props) {
        super(props);


    }



    render() {
        return (


            <SafeAreaView style={{ flex: 1, marginBottom: 5 }}>

                <View >

                    <View style={styles.mainCardView_part1_column}>

                        <Text style={styles.headerTextBangla}>হারানো বিজ্ঞপ্তি</Text>


                        <Text style={styles.areaDateTimeText}>  সেপেট্ম্বর ১,২০২০  ২৩:৫০ </Text>

                    </View>

                    <View style={styles.mainCardView_part2_column}>

                        <ImageBackground
                            source={require('../assets/sample/lostAdd.jpg')}
                            style={{ width: ScreenSize.sw, height: ScreenSize.imgHeight }}>

                            <View style={styles.imgBottomTranfarentView}>
                               
                                

                                <Image
                                    source={require('../assets/icons/heart_red_icon.png')}
                                    style={{ width: 30, height: 30, position: 'absolute', right: 2, }} />

                            </View>

                        </ImageBackground>


                    </View>

                    <View style={styles.mainCardView_part3_column}>

                        <Text style={styles.titleText}>হারানো বিজ্ঞপ্তি!! হারানো বিজ্ঞপ্তি!!

গত ৫/১১/১৭ ইং রোজ রবিবার গুলশান-2 নতুন বাজার থেকে মো: মাছুম বিল্লাহ নামের এই ছেলেটি হারিয়ে গেছে।
ছেলেটি রুহিতপুর সাক্তা ইসলামিয়া মাদরাসা কেরানীগঞ্জ,হিফজ বিভাগের ছাত্র।বয়স প্রায় চোদ্দ বছর।গায়ের রং ফর্সা।
যদি কোন দয়াবান ব্যক্তি তাহার কোনও খোঁজ পেয়ে থাকেন তবে দয়া করে নিন্মের ঠিকানায় যোগাযোগ করার জন্য বিশেষভাবে অনুরোধ করা হলো।
#বারিধারা,৭ নং রোড
হাউজ নং ২০,গুলশান,ঢাকা
যোগাযোগ------
★Mobail-
01714303872
01828738393
01630924918
01867379200
01742935505

হয়তো আপনার একটি শেয়ারে একটি পরিবার ফিরে পেতে পারে তাদের কলিজার টুকরোকে।প্লিজ সবাই কপি /শেয়ার করে নিজের টাইমলাইনে ছড়িয়ে দিন যাতে অন্তত বাচ্চাটিকে কেউ দেখে থাকলে তার নজরে চলে আসে।</Text>

                    </View>


                </View>

            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({

    mainCardView_part1_column: {
        backgroundColor: '#275A74',


    },
    mainCardView_part2_column: {
        flexDirection: 'row',
    },
    mainCardView_part3_column: {
        backgroundColor: '#275A74',
    },
    mainCardView_part4_column: {
        backgroundColor: '#275A74',
    },


    headerTextBangla: {
        fontSize: 0.06 * ScreenSize.sw,
        color: 'white',
        textAlign: 'center'

    },
    headerTextEnglish: {
        fontSize: 0.03 * ScreenSize.sw,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'


    },
    titleText: {
        fontSize: 0.05 * ScreenSize.sw,
        color: 'white',
        textAlign: 'center'
    },
    areaDateTimeText: { color: 'white', textAlign: 'center', fontSize: 0.04 * ScreenSize.sw },
    totalImgText: { alignSelf: 'flex-start', color: 'white', fontSize: ScreenSize.sw * 0.05, fontWeight: 'bold' },
    priceText: { marginLeft: ScreenSize.sw / 3, color: 'white', fontSize: ScreenSize.sw * 0.04, fontWeight: 'bold' },
    imgBottomTranfarentView: { flexDirection: 'row', backgroundColor: '#275A74', opacity: 0.7, top: ScreenSize.imgHeight - 30, height: 30 },

});

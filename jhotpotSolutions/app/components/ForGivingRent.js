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

export default class ForGivingRent extends React.Component {
    constructor(props) {
        super(props);


    }



    render() {
        return (


            <SafeAreaView style={{ flex: 1, marginBottom: 5 }}>

                <View >

                    <View style={styles.mainCardView_part1_column}>

                        <Text style={styles.headerTextBangla}>ভাড়া দেওয়া হবে</Text>

                        <Text style={styles.areaDateTimeText}>সাবলেট</Text>

                        <Text style={styles.areaDateTimeText}>  বাড্ডা, ঢাকা - গতকাল ২৩:৫০ </Text>

                    </View>

                    <View style={styles.mainCardView_part2_column}>

                        <ImageBackground
                            source={require('../assets/sample/flat_rent_1.jpg')}
                            style={{ width: ScreenSize.sw, height: ScreenSize.imgHeight }}>

                            <View style={styles.imgBottomTranfarentView}>
                               
                                <Image
                                    source={require('../assets/icons/photo.png')}
                                    style={{ width: 30, height: 30, }} />
                                
                                <Text style={styles.totalImgText}>5</Text>
                                
                                <Text style={styles.priceText}>১৪০০০/= টাকা</Text>

                                <Image
                                    source={require('../assets/icons/heart_1.png')}
                                    style={{ width: 30, height: 30, position: 'absolute', right: 2, }} />

                            </View>

                        </ImageBackground>


                    </View>

                    <View style={styles.mainCardView_part3_column}>

                        <Text style={styles.titleText}>৩ রুমের একটি ফ্ল্যাট ভাড়া হবে....</Text>

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

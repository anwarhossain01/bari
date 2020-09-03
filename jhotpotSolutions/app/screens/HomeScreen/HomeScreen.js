import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Picker,
    View,
    StyleSheet
} from 'react-native';

import ScreenSize from "../../common/ScreenSize";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            category:'All Categories সব ক্যাটাগরিগুলো'
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
                    <View style={styles.mainCardView_WithPhoto}>
                        <View style={styles.mainCardView_part1_column}>

                        </View>
                        <View style={styles.mainCardView_part2_column}>
                            <View style={styles.mainCardView_part2_row1}>

                            </View>
                            <View style={styles.mainCardView_part2_row2}>
                                
                            </View>
                            <View style={styles.mainCardView_part2_row3}>
                                
                            </View>

                        </View>
                        <View style={styles.mainCardView_part3_column}>
                            
                        </View>
                    </View>

                </ScrollView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainCardView_WithPhoto:{
        flex:1,
        width:ScreenSize.sw,
        height:ScreenSize.sh/3,
        backgroundColor:'red',

    },
    mainCardView_part1_column:{
        flex:0.15,
        flexDirection:'row',
        backgroundColor:'red',
    },
    mainCardView_part2_column:{
        flex:0.70,
        flexDirection:'row',
        backgroundColor:'green',
    },
    mainCardView_part3_column:{
        flex:0.15,
        backgroundColor:'yellow',
    },
    mainCardView_part2_row1:{
        flex:0.20,
        backgroundColor:'white'

    
    },
    mainCardView_part2_row2:{
        flex:0.60,
        backgroundColor:'black',

    
    },

    mainCardView_part2_row3:{
        flex:0.20,
        backgroundColor:'white'

    
    },
});

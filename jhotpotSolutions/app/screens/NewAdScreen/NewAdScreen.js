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

import ScreenSize from '../../common/ScreenSize';
import DatabaseOffline from '../../DatabaseOffline/DatabaseOffline';

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
                margin: 5
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
                        margin: 5, 
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{ textAlign: 'center', fontSize: ScreenSize.sw * 0.05, fontWeight: 'bold' }}>আপনি কি ধরনের বিজ্ঞাপন দিতে চান?</Text>
                        <Text style={{ textAlign: 'center', fontSize: ScreenSize.sw * 0.05, fontWeight: 'bold', color: 'red' }}>*</Text>
                    </View>



                    <View style={{
                        borderColor: '#24536B',
                        backgroundColor: 'LightBlue',
                        borderRadius: 5,
                        borderWidth: 2,
                        width: ScreenSize.sw - 10,
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Image source={require('../../assets/icons/swapping.jpg')} style={{ width: "100%", height: 100, }}></Image>




                        </View>
                        <Text style={{

                            fontSize: ScreenSize.sw * 0.04,
                            fontWeight: 'bold',

                            textAlign: 'center'
                        }}>আপনার জিনিসপত্র অন্যের সাথে অদলবদল করুন ,নিজে উপকৃত হোন এবং অন্যকে উপকৃত করুন ।</Text>
                        <TouchableOpacity style={{
                            borderColor: '#24536B',
                            borderTopWidth: 2,
                            width: ScreenSize.sw - 10,
                            padding: 5,
                            backgroundColor: 'green',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.055,
                                fontWeight: 'bold',

                                color: 'white',
                                textAlign: 'center'
                            }}>আপনার জিনিসপত্রের অদলবদল</Text>



                        </TouchableOpacity>
                    </View>




                    <View style={{
                        borderColor: '#24536B',
                        borderRadius: 5,
                        borderWidth: 2,
                        width: ScreenSize.sw - 10,
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../../assets/icons/rent.jpg')} style={{ width: 100, height: 100 }}></Image>
                        <Text style={{

                            fontSize: ScreenSize.sw * 0.04,
                            fontWeight: 'bold',


                            textAlign: 'center'
                        }}>যেকোন ধরনের বৈধ সম্পদ ভাড়া দেওয়া বা নেওয়ার জন্য বিজ্ঞাপন দিতে পারেন , যেমন : ফ্ল্যাট - সাবলেট - রুম - মেস - দোকান - অফিস - গ্যারেজ - প্লট - গাড়ী - অন্যান্য </Text>
                        <View style={{ flexDirection: 'row' }} >
                            <TouchableOpacity style={{
                                borderColor: '#24536B',
                                borderTopWidth: 2,
                                width: ScreenSize.sw / 2 - 5,
                                padding: 5,
                                backgroundColor: '#A8D9D3'
                            }}>

                                <Text style={{

                                    fontSize: ScreenSize.sw * 0.055,
                                    fontWeight: 'bold',
                                    color: 'green',

                                    textAlign: 'center'
                                }}>ভাড়া দিতে চাই</Text>



                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                borderColor: '#24536B',
                                borderTopWidth: 2,
                                borderLeftWidth: 2,
                                borderRightWidth: 2,
                                width: ScreenSize.sw / 2 - 5,
                                padding: 5,
                                backgroundColor: 'yellow'
                            }}>

                                <Text style={{

                                    fontSize: ScreenSize.sw * 0.055,
                                    fontWeight: 'bold',

                                    textAlign: 'center'
                                }}>ভাড়া নিতে চাই</Text>



                            </TouchableOpacity>

                        </View>

                    </View>





                    <View style={{
                        borderColor: '#24536B',
                        borderRadius: 5,
                        borderWidth: 2,
                        width: ScreenSize.sw - 10,
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../../assets/icons/buysell1-1.png')} style={{ width: 100, height: 100 }}></Image>
                        <Text style={{

                            fontSize: ScreenSize.sw * 0.04,
                            fontWeight: 'bold',


                            textAlign: 'center'
                        }}>যেকোন ধরনের বৈধ সম্পদ বিক্র​য় কিম্বা ক্র​য় করার জন্য বিজ্ঞাপন দিতে পারেন , যেমন : প্লট - বাড়ী-গাড়ী - ফ্ল্যাট - দোকান - অফিস - অন্যান্য  </Text>
                        <View style={{ flexDirection: 'row' }} >
                            <TouchableOpacity style={{
                                borderColor: '#24536B',
                                borderTopWidth: 2,
                                width: ScreenSize.sw / 2 - 5,
                                padding: 5,
                                backgroundColor: '#F08D27'
                            }}>

                                <Text style={{

                                    fontSize: ScreenSize.sw * 0.055,
                                    fontWeight: 'bold',
                                    color: 'white',

                                    textAlign: 'center'
                                }}>বিক্র​য় করতে চাই</Text>



                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                borderColor: '#24536B',
                                borderTopWidth: 2,
                                borderLeftWidth: 2,
                                borderRightWidth: 2,
                                width: ScreenSize.sw / 2 - 5,
                                padding: 5,
                                backgroundColor: 'green'
                            }}>

                                <Text style={{

                                    fontSize: ScreenSize.sw * 0.055,
                                    fontWeight: 'bold',
                                    color: 'white',
                                    textAlign: 'center'
                                }}>ক্র​য় করতে চাই </Text>



                            </TouchableOpacity>

                        </View>

                    </View>




                    <View style={{
                        borderColor: '#24536B',
                        borderRadius: 5,
                        borderWidth: 2,
                        width: ScreenSize.sw - 10,
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../../assets/icons/lost_found.jpg')} style={{ width: 200, height: 100 }}></Image>
                        <Text style={{

                            fontSize: ScreenSize.sw * 0.04,
                            fontWeight: 'bold',


                            textAlign: 'center'
                        }}>আপনার কোন কিছু হারিয়ে গেলে কিম্বা আপনি যদি কোন কিছু পেয়ে থাকেন তবে এখানে বিজ্ঞাপন দিতে পারেন ; যেমন :মানুষ - পোষা প্রাণী - ডকুমেন্টস - অন্যান্য  </Text>
                        <View style={{ flexDirection: 'row' }} >
                            <TouchableOpacity style={{
                                borderColor: '#24536B',
                                borderTopWidth: 2,
                                width: ScreenSize.sw / 2 - 5,
                                padding: 5,
                                backgroundColor: 'red'
                            }}>

                                <Text style={{

                                    fontSize: ScreenSize.sw * 0.055,
                                    fontWeight: 'bold',
                                    color: 'white',

                                    textAlign: 'center'
                                }}>হারানো গিয়েছে</Text>



                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                borderColor: '#24536B',
                                borderTopWidth: 2,
                                borderLeftWidth: 2,
                                borderRightWidth: 2,
                                width: ScreenSize.sw / 2 - 5,
                                padding: 5,
                                backgroundColor: '#275A74'
                            }}>

                                <Text style={{

                                    fontSize: ScreenSize.sw * 0.055,
                                    fontWeight: 'bold',
                                    color: 'white',
                                    textAlign: 'center'
                                }}>পাওয়া গিয়েছে </Text>



                            </TouchableOpacity>

                        </View>

                    </View>




                    <View style={{ flexDirection: 'row' }} >
                        <TouchableOpacity style={{
                            borderColor: '#24536B',
                            borderRadius: 5,
                            borderWidth: 2,
                            width: ScreenSize.sw / 2 - 10,
                            margin: 5
                        }}>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.04,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>পণ্য</Text>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.025,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>ব্যবসা প্রতিষ্ঠানের বা নিজস্ব তৈরিকৃত পণ্যের বিজ্ঞাপন</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            borderColor: '#24536B',
                            borderRadius: 5,
                            borderWidth: 2,
                            width: ScreenSize.sw / 2 - 10,
                            margin: 5
                        }}>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.04,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>বিশেষ অফার - প্রমোশনাল অফার - ডিসকাউন্ট(ছাড়) </Text>



                        </TouchableOpacity>

                    </View>





                    <View style={{ flexDirection: 'row' }} >
                        <TouchableOpacity style={{
                            borderColor: '#24536B',
                            borderRadius: 5,
                            borderWidth: 2,
                            width: ScreenSize.sw / 2 - 10,
                            margin: 5
                        }}>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.04,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>পড়াইতে চাই</Text>



                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            borderColor: '#24536B',
                            borderRadius: 5,
                            borderWidth: 2,
                            width: ScreenSize.sw / 2 - 10,
                            margin: 5
                        }}>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.04,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>গৃহশিক্ষক/শিক্ষিকা সন্ধান</Text>



                        </TouchableOpacity>

                    </View>




                    <View style={{ flexDirection: 'row' }} >
                        <TouchableOpacity style={{
                            borderColor: '#24536B',
                            borderRadius: 5,
                            borderWidth: 2,
                            width: ScreenSize.sw / 2 - 10,
                            margin: 5
                        }}>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.04,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>চাকরির নিয়োগ</Text>



                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            borderColor: '#24536B',
                            borderRadius: 5,
                            borderWidth: 2,
                            width: ScreenSize.sw / 2 - 10,
                            margin: 5
                        }}>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.04,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>চাকুরী খুঁজতেছি</Text>



                        </TouchableOpacity>

                    </View>


                    <View style={{ flexDirection: 'row' }} >
                        <TouchableOpacity style={{
                            borderColor: '#24536B',
                            borderRadius: 5,
                            borderWidth: 2,
                            width: ScreenSize.sw / 2 - 10,
                            margin: 5
                        }}>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.04,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>রক্তের প্রয়োজন</Text>



                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            borderColor: '#24536B',
                            borderRadius: 5,
                            borderWidth: 2,
                            width: ScreenSize.sw / 2 - 10,
                            margin: 5
                        }}>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.04,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>বিনিময়</Text>


                            <Text style={{

                                fontSize: ScreenSize.sw * 0.025,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>অতিরিক্ত - পুরাতন - অব্যবহৃত জিনিস অন্যের সাথে বিনিময়</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({


});

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
    TextInput
} from 'react-native';

import ScreenSize from '../../common/ScreenSize';

export default class NewAdScreen extends React.Component {
    constructor(props) {
        super();

    }



    render() {
        return (

            <SafeAreaView style={{ flex: 1, }}>
                <ScrollView>

                    <View style={{ margin: 5, flexDirection: 'row' }}>
                        <Text style={{ textAlign: 'center', fontSize: ScreenSize.sw * 0.05, fontWeight: 'bold' }}>আপনি কি ধরনের বিজ্ঞাপন দিতে চান?</Text>
                        <Text style={{ textAlign: 'center', fontSize: ScreenSize.sw * 0.05, fontWeight: 'bold', color: 'red' }}>*</Text>
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
                            }}>ভাড়া দিতে চাই</Text>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.025,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>ফ্ল্যাট - সাবলেট - রুম - মেস - দোকান - অফিস - গ্যারেজ - প্লট - অন্যান্য </Text>

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
                            }}>ভাড়া নিতে চাই</Text>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.025,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>ফ্ল্যাট - সাবলেট - রুম - মেস - দোকান - অফিস - গ্যারেজ - প্লট - অন্যান্য </Text>

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
                            }}>বিক্র​য় করতে চাই</Text>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.025,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>ফ্ল্যাট - দোকান - অফিস - প্লট - অন্যান্য</Text>

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
                            }}>ক্র​য় করতে চাই</Text>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.025,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>ফ্ল্যাট - দোকান - অফিস - প্লট - অন্যান্য</Text>

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
                            }}>হারানো গিয়েছে</Text>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.025,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>মানুষ - পোষা প্রাণী - ডকুমেন্টস - অন্যান্য</Text>

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
                            }}>পাওয়া গিয়েছে</Text>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.025,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>মানুষ - পোষা প্রাণী - ডকুমেন্টস - অন্যান্য</Text>


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
                            }}>গাড়ী ভাড়া দেওয়া হ​য়</Text>



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
                            }}>গাড়ী ভাড়া নিতে চাই</Text>



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
                            }}>শিক্ষক - শিক্ষিকা খুঁজতেছি</Text>



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
                            }}>রদ - বদল</Text>


                            <Text style={{

                                fontSize: ScreenSize.sw * 0.025,
                                fontWeight: 'bold',


                                textAlign: 'center'
                            }}>অতিরিক্ত - পুরাতন - অব্যবহৃত জিনিস অন্যের সাথে পরিবর্তন</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>


            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({


});

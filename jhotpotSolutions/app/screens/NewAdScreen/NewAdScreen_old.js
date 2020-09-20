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


                    {/*Select Ad type drop down*/}
                    <View style={{

                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 10,

                    }} >
                        <TouchableOpacity style={{
                            borderColor: '#24536B',
                            flexDirection: 'row',
                            borderRadius: 5,
                            borderWidth: 2,
                        }}>

                            <Text style={{

                                fontSize: ScreenSize.sw * 0.04,
                                fontWeight: "bold",
                                elevation: 5,
                                paddingLeft: 10,
                                paddingRight: 10,     
                                padding: 2,
                                textAlign: 'center'
                            }}>SELECT YOUR AD CATEGORY</Text>

                            <Image source={require('../../assets/icons/icon_down_arrow.png')}
                                style={{ width: 20, height: 20, }} />
                        </TouchableOpacity>

                        {/* AD TITLE*/}
                        <View style={{
                            marginTop: 10, justifyContent: "center",
                            alignItems: "center",
                        }}>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={{
                                    fontSize: ScreenSize.sw * 0.04,
                                    fontWeight: "bold",
                                }}>Ad's Title</Text>
                                <Text style={{
                                    fontSize: ScreenSize.sw * 0.035,
                                    fontWeight: "bold",
                                    color: 'red'
                                }}>*</Text>
                            </View>

                            <TextInput style={{
                                width: ScreenSize.sw - 20, height: ScreenSize.sw * 0.12, fontSize: 16, borderColor: '#24536B', borderRadius: 5,
                                borderWidth: 2,
                            }}></TextInput>
                        </View>
                        {/* AD TITLE*/}

                        {/* AD DETAILS*/}
                        <View style={{
                            marginTop: 10, justifyContent: "center",
                            alignItems: "center",
                        }}>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={{
                                    fontSize: ScreenSize.sw * 0.04,
                                    fontWeight: "bold",
                                }}>Ad's Details</Text>
                                <Text style={{
                                    fontSize: ScreenSize.sw * 0.035,
                                    fontWeight: "bold",
                                    color: 'red'
                                }}>*</Text>
                            </View>

                            <TextInput
                                multiline
                                style={{
                                    width: ScreenSize.sw - 20, height: ScreenSize.sw * 0.3, fontSize: 16, borderColor: '#24536B', borderRadius: 5,
                                    borderWidth: 2,
                                }}></TextInput>
                        </View>
                        {/* AD Details*/}

                    </View>


                </ScrollView>


            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({


});

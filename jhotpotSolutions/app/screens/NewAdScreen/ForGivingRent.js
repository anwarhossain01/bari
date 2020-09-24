import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image,
    Button

} from 'react-native';
import ScreenSize from '../../common/ScreenSize';


export default class ForGivingRent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            currentStep: 1,
        }

    }

    render() {
        return (

            <SafeAreaView style={{ flex: 1, }}>



                <View>
                    <Text style={styles.titleText}>ভাড়া দিতে চাই</Text>
                    <Text style={styles.subTitleText}>ফ্ল্যাট - সাবলেট - রুম - মেস - দোকান - অফিস - গ্যারেজ - প্লট - অন্যান্য</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top: 5 }}>

                    <View style={this.state.currentStep == 1 ? styles.formSelectedStep : ""}>
                        <Text style={styles.formStepText}> বিবরণ </Text>
                    </View>

                    <Image
                        style={styles.formStepArrowImage}
                        source={require("../../assets/icons/right-arrow.png")} />

                    <View style={this.state.currentStep == 2 ? styles.formSelectedStep : ""}>
                        <Text style={styles.formStepText}> ঠিকানা </Text>

                    </View>
                    <Image
                        style={styles.formStepArrowImage}
                        source={require("../../assets/icons/right-arrow.png")} />

                    <View style={this.state.currentStep == 3 ? styles.formSelectedStep : ""}>
                        <Text style={styles.formStepText}> ছবি </Text>

                    </View>
                    <Image
                        style={styles.formStepArrowImage}
                        source={require("../../assets/icons/right-arrow.png")} />


                    <View style={this.state.currentStep == 4 ? styles.formSelectedStep : ""}>
                        <Text style={styles.formStepText}> পোস্ট  </Text>

                    </View>

                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{
                        fontSize: ScreenSize.sw * 0.035,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: 'green'

                    }}>আপনি বাংলা অথবা ইংরেজী , দুটো ভাষাই ব্যবহার করতে পারেন !</Text>

                </View>
                <ScrollView>

                    {this.state.currentStep == 1 && <View>
                        {/* AD TITLE*/}
                        <View style={styles.inputGroupView}>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.labelText}>শিরোনাম</Text>
                                <Text style={styles.labelStar}>*</Text>
                            </View>

                            <TextInput style={styles.textInput}></TextInput>
                            <Text></Text>
                        </View>
                        {/* AD TITLE*/}



                        {/* AD DETAILS*/}
                        <View style={styles.inputGroupView}>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.labelText}>বিবরণ/বর্ণনা</Text>
                                <Text style={styles.labelStar}>*</Text>
                            </View>

                            <TextInput
                                multiline
                                style={styles.multiLineTextInput}></TextInput>
                        </View>
                        {/* AD Details*/}

                        {/* Mobile Number*/}
                        <View style={styles.inputGroupView}>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.labelText}>মোবাইল নাম্বার (যোগাযোগ করার জন্য)</Text>
                                <Text style={styles.labelStar}>*</Text>
                            </View>

                            <TextInput style={styles.textInput}></TextInput>
                            <Text style={styles.hintsText}>একাধিক নাম্বার হলে এইভাবে কমা দিয়ে লিখুন: 01890000000, 017900000000</Text>
                            <Text></Text>
                        </View>
                        {/* Mobile Number*/}
                    </View>}
                    {this.state.currentStep == 2 && <View>
                        {/*Select Division drop down*/}
                        <View style={styles.inputGroupView} >
                            <TouchableOpacity style={styles.selectTouchView}>

                                <Text style={styles.selectText}>বিভাগ নির্বাচন করুন</Text>

                                <Image source={require('../../assets/icons/icon_down_arrow.png')}
                                    style={styles.selectImageStyle} />
                            </TouchableOpacity>
                        </View>
                        {/*Select Division drop down*/}

                        {/*Select District drop down*/}
                        <View style={styles.inputGroupView} >
                            <TouchableOpacity style={styles.selectTouchView}>

                                <Text style={styles.selectText}>জেলা নির্বাচন করুন</Text>

                                <Image source={require('../../assets/icons/icon_down_arrow.png')}
                                    style={styles.selectImageStyle} />
                            </TouchableOpacity>
                        </View>
                        {/*Select District drop down*/}
                        {/*Select Police Station drop down*/}
                        <View style={styles.inputGroupView} >
                            <TouchableOpacity style={styles.selectTouchView}>

                                <Text style={styles.selectText}>থানা/উপজেলা নির্বাচন করুন</Text>

                                <Image source={require('../../assets/icons/icon_down_arrow.png')}
                                    style={styles.selectImageStyle} />
                            </TouchableOpacity>
                        </View>
                        {/*Select Police Station drop down*/}

                        {/* Address*/}
                        <View style={styles.inputGroupView}>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.labelText}>ঠিকানা</Text>
                                <Text style={styles.labelStar}></Text>
                            </View>

                            <TextInput
                                multiline
                                style={styles.multiLineTextInput}></TextInput>
                        </View>
                        {/* Address*/}
                    </View>}

                    <View style={{ marginTop: 10, flexDirection: 'row' }}>



                    {this.state.currentStep > 1 &&
                        <View style={{ width: '30%',backgroundColor:'red',margin:'10%'}}>
                           
                                <TouchableOpacity style={{ alignSelf: 'flex-start', width:'100%' }}>
                                    <Text style={{textAlign:'center'}}>Previous</Text>
                                </TouchableOpacity>
                           
                        </View>
 }
                        <View style={{  width: '30%',backgroundColor:'green',margin:'10%'}}>
                            <TouchableOpacity style={{ alignSelf: 'flex-end',width:'100%'  }} onPress={()=>this.nextButtonClick()}>
                                <Text style={{textAlign:'center'}} >Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>

            </SafeAreaView>
        );
    }

    nextButtonClick()
    {
        this.setState({currentStep:this.state.currentStep+1});
    }
}

const styles = StyleSheet.create({
    formSelectedStep: { borderBottomColor: '#24536B', borderBottomWidth: 5 },
    formStepText: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    formStepArrowImage: { marginLeft: 5, marginRight: 5, width: 20, height: 20 },
    titleText: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    subTitleText: {
        fontSize: ScreenSize.sw * 0.027,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputGroupView: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    labelText: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: "bold",
    },
    labelStar: {
        fontSize: ScreenSize.sw * 0.035,
        fontWeight: "bold",
        color: 'red'
    },
    textInput: {
        width: ScreenSize.sw - 20,
        height: ScreenSize.sw * 0.12,
        fontSize: ScreenSize.sw * 0.04,
        borderColor: '#24536B',
        borderRadius: 5,
        borderWidth: 2,
    },
    multiLineTextInput: {
        width: ScreenSize.sw - 20,
        height: ScreenSize.sw * 0.3,
        fontSize: ScreenSize.sw * 0.04,
        borderColor: '#24536B',
        borderRadius: 5,
        borderWidth: 2,
    },
    hintsText: {
        fontSize: ScreenSize.sw * 0.028,
        color: 'grey',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    selectTouchView: {
        borderColor: '#24536B',
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 2,
        width: ScreenSize.sw - 20,
        height: ScreenSize.sw * 0.12,
        justifyContent: "center",
        alignItems: "center",
    },
    selectText: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: "bold",
        elevation: 5,
        paddingLeft: 10,
        paddingRight: 10,
        padding: 2,
        textAlign: 'center'
    },
    selectImageStyle: { width: 20, height: 20, },



});

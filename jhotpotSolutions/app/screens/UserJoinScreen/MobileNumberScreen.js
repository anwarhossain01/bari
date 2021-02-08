import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import ScreenSize from '../../common/ScreenSize';
import GoBackHeader from '../../components/GoBackHeader'
import Language from '../../common/Languages'
import auth from '@react-native-firebase/auth'

const const_dimensions = Dimensions.get("window");

export default class MobileNumberScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneInputBox: true,
            phone: "",
            countryCode: "+39",
            confirmResult: null,
            showSpinner:false,
        };
    }

    validatePhoneNumber = () => {

        var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
        return regexp.test(this.state.countryCode + this.state.phone)
    }
    handleSendCode = () => {
        this.setState({showSpinner:true});
        // Request to send OTP
        if (this.validatePhoneNumber()) {

            auth()
                .signInWithPhoneNumber(this.state.countryCode + this.state.phone)
                .then(confirmResult => {
                    this.setState({showSpinner:false});
                    if (confirmResult) {
                        this.props.navigation.navigate('otp_number_screen',{confirmResult:confirmResult})
                    }
                })
                .catch(error => {
                    this.setState({showSpinner:false});
                    alert(error.message)

                    console.log(error)
                });


        } else {
            alert('Invalid Phone Number');
            this.setState({showSpinner:false});
        }
    }
    render() {
        let dimensions = const_dimensions;
        let imageWidth = dimensions.width;

        return (
            <SafeAreaView style={styles.container} pointerEvents={this.state.showSpinner?"none":"auto"}>
                <GoBackHeader pass_navigation={this.props.navigation} />

                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scroll_container}
                    Property keyboardShouldPersistTaps='always'>

                    <Image source={require('../../assets/logo/splash_logo1.png')}
                        style={{ width: imageWidth, }}
                        resizeMode="contain"
                    />
                    <View style={styles.phone_input_container}>
                        <Text style={styles.phone_code_text}>{this.state.countryCode}</Text>
                        <TextInput
                            style={styles.phone_text_input}
                            keyboardType='phone-pad'
                            value={this.state.phone}
                            onChangeText={phone => {
                                this.setState({ phone })
                            }}
                            maxLength={15}
                            editable={this.state.confirmResult ? false : true}
                        />
                    </View>

                    <Text style={styles.verification_code_text}>ভেরিফিকেশন কোডের জন্য মোবাইল নাম্বারটি লিখুন ...</Text>
                    <ActivityIndicator size={75} color="white" animating={this.state.showSpinner}  />

                    <TouchableOpacity style={styles.next_container} onPress={() => this.handleSendCode()}>
                        <Text style={styles.next_text}>
                            কোড নাম্বার
                        </Text>
                    </TouchableOpacity>

                </ScrollView>

            </SafeAreaView >

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22546B'
    },
    scroll_container: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingBottom: ScreenSize.sw * 0.2
    },
    phone_input_container: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginTop: ScreenSize.sw * 0.08,
        paddingBottom: ScreenSize.sw * 0.03,
        flexWrap: 'wrap',
        marginLeft: ScreenSize.sw * 0.05,
        marginRight: ScreenSize.sw * 0.05,

    },
    phone_code_text: {
        alignSelf: 'center',
        color: 'white',
        fontSize: ScreenSize.sw * 0.04,
    },
    phone_text_input: {
        fontSize: ScreenSize.sw * 0.04,
        padding: 2,
        marginLeft: ScreenSize.sw * 0.02,
        flex: 1,
        color: 'white',
    },
    verification_code_text: {
        fontSize: ScreenSize.sw * 0.03,
        marginTop: ScreenSize.sw * 0.015,
        marginLeft: ScreenSize.sw * 0.05,
        marginRight: ScreenSize.sw * 0.05,
        color: 'white'
    },
    next_container: {
        width: '100%',
        padding: ScreenSize.sw * 0.02,
        bottom: 0,
        position: 'absolute',
        borderTopWidth: 0.8,
        borderTopColor: 'grey',
        marginRight: 50,
        backgroundColor: '#F2F2F2',
    },
    next_text: {
        fontSize: ScreenSize.sw * 0.05,
        textAlign: 'center',
        fontWeight: 'bold',
    }


});
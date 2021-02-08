import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Image, Dimensions, TouchableOpacity, SafeAreaView, ScrollView, } from 'react-native';
import GoBackHeader from '../../components/GoBackHeader'
import ScreenSize from '../../common/ScreenSize';

const const_dimensions = Dimensions.get("window");

export default class OtpNumberScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneInputBox: true,
            showCodeSendButton: true,
            confirmResult:null,
            verificationDigit_1:"",
            verificationDigit_2:"",
            verificationDigit_3:"",
            verificationDigit_4:"",
            verificationDigit_5:"",
            verificationDigit_6:"",
            verificationCode:""
        }
    }


    componentDidMount() {
      this.setState({confirmResult:this.props.route.params.confirmResult});

       console.log(this.props);
    }
    handleVerifyCode = () => {this.props.navigation.navigate('user_location_screen')
        // Request for OTP verification
        //const { confirmResult, verificationCode } = this.state

        let verificationCode=this.state.verificationDigit_1+this.state.verificationDigit_2+this.state.verificationDigit_3+this.state.verificationDigit_4+this.state.verificationDigit_5+this.state.verificationDigit_6;

        if (verificationCode.length == 6) {
          this.state.confirmResult
            .confirm(verificationCode)
            .then(user => {
              this.setState({ userId: user.uid })
              alert(`Verified! ${user.uid}`)
            })
            .catch(error => {
              alert(error.message)
              console.log(error)
            });

           // this.props.navigation.navigate('user_location_screen')
        } else {
          alert('Please enter a 6 digit OTP code.')
        }
      }
    render() {
        let dimensions = const_dimensions;
        let imageWidth = dimensions.width;

        return (
            <SafeAreaView style={styles.container}>
                <GoBackHeader pass_navigation={this.props.navigation} />

                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scroll_container}
                    Property keyboardShouldPersistTaps='always'>

                    <Image source={require('../../assets/logo/splash_logo1.png')}
                        style={{ width: imageWidth, }}
                        resizeMode="contain"
                    />

                    <View style={styles.input_fields_container_margin}>

                        <Text style={styles.input_number_text}>SMS এ প্রাপ্ত কোড লিখে NEXT চাপুন</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={styles.otp_input_field}
                                placeholder=""
                                keyboardType='numeric'
                                placeholderTextColor={"white"}
                                maxLength={1}
                                onChangeText={value => {
                                    if (value.trim().length==1)
                                    {
                                        this.setState({verificationDigit_1:value})
                                        this.refs.input_2.focus();
                                    }
                                     
                                }} />

                            <TextInput style={styles.otp_input_field}
                                placeholder=""
                                keyboardType='numeric'
                                placeholderTextColor={"white"}
                                maxLength={1} ref="input_2"
                                onChangeText={value => {
                                    if (value.trim().length==1)
                                    {
                                        this.setState({verificationDigit_2:value})
                                        this.refs.input_3.focus();
                                    }
                                }} />

                            <TextInput style={styles.otp_input_field}
                                placeholder="" keyboardType='numeric'
                                placeholderTextColor={"white"}
                                maxLength={1}
                                ref="input_3"
                                onChangeText={value => {
                                    if (value.trim().length==1)
                                    {
                                        this.setState({verificationDigit_3:value})
                                        this.refs.input_4.focus();
                                    }
                                }} />

                            <TextInput style={styles.otp_input_field}
                                placeholder=""
                                keyboardType='numeric'
                                placeholderTextColor={"white"}
                                maxLength={1} ref="input_4"
                                onChangeText={value => {
                                    if (value.trim().length==1)
                                    {
                                        this.setState({verificationDigit_4:value})
                                        this.refs.input_5.focus();
                                    }
                                }} />

                            <TextInput style={styles.otp_input_field}
                                placeholder=""
                                keyboardType='numeric'
                                placeholderTextColor={"white"}
                                maxLength={1} ref="input_5"
                                onChangeText={value => {
                                    if (value.trim().length==1)
                                    {
                                        this.setState({verificationDigit_5:value})
                                        this.refs.input_6.focus();
                                    }
                                }} />

                            <TextInput style={styles.otp_input_field}
                                placeholder=""
                                keyboardType='numeric'
                                placeholderTextColor={"white"}
                                maxLength={1} ref="input_6" 
                                onChangeText={value => {
                                    if (value.trim().length==1)
                                    {
                                        this.setState({verificationDigit_6:value})
                                    }
                                }}/>
                        </View>

                        {
                            this.state.showCodeSendButton ?
                                <View>
                                    <Text style={styles.otp_resend_msg_text}>ভেরিফিকেশন কোড আসেনি ? পুনরায় কোড নাম্বার পেতে নিচের বাটনটি চাপুন</Text>
                                    <TouchableOpacity style={styles.resend_button_container}>
                                        <Text style={styles.resend_button_text}>কোড নাম্বার</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View />
                        }



                    </View>


                    <TouchableOpacity style={styles.next_container} onPress={() =>this.handleVerifyCode() }>
                        <Text style={styles.next_text}>
                            NEXT
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
    input_fields_container_margin: {
        marginLeft: ScreenSize.sw * 0.05,
        marginRight: ScreenSize.sw * 0.05,
    },
    input_number_text: {
        fontSize: ScreenSize.sw * 0.035,
        color: 'white',
    },
    otp_input_field: {
        marginTop: ScreenSize.sw * 0.08,
        borderBottomWidth: 1,
        borderColor: 'white',
        flex: 1,
        margin: 3,
        color: 'white',
        textAlign: 'center',
        borderColor: 'white'
    },
    otp_resend_msg_text: {
        textAlign: 'center',
        marginTop: ScreenSize.sw * 0.08,
        fontSize: ScreenSize.sw * 0.04,
        color: 'white',
        fontWeight: 'bold'
    },
    resend_button_container: {
        alignSelf: 'center',
        marginTop: ScreenSize.sw * 0.02,
        backgroundColor: '#222E3D',
        borderRadius: ScreenSize.sw * 0.01
    },
    resend_button_text: {
        color: 'white',
        fontSize: ScreenSize.sw * 0.04,
        padding: 5,
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
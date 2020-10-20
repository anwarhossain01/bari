import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Image, Dimensions, TouchableOpacity, SafeAreaView, ScrollView, } from 'react-native';
import GoBackHeader from '../../components/GoBackHeader'

const S_W = Dimensions.get('window').width;
const const_dimensions = Dimensions.get("window");

export default class OtpNumberScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneInputBox: true,

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

                        <Text style={styles.input_number_text}>Enter the code number for verfication</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={styles.otp_input_field} placeholder="0" />
                            <TextInput style={styles.otp_input_field} placeholder="0" />
                            <TextInput style={styles.otp_input_field} placeholder="0" />
                            <TextInput style={styles.otp_input_field} placeholder="0" />
                            <TextInput style={styles.otp_input_field} placeholder="0" />
                            <TextInput style={styles.otp_input_field} placeholder="0" />
                        </View>

                        <Text style={styles.otp_resend_msg_text}>Don't recieve the OTP ?</Text>
                        <TouchableOpacity style={styles.resend_button_container}>
                            <Text style={styles.resend_button_text}>RESEND</Text>
                        </TouchableOpacity>

                    </View>


                    <TouchableOpacity style={styles.next_container} onPress={() => this.props.navigation.navigate('user_location_screen')}>
                        <Text style={styles.next_text}>
                            VERIFY
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
        paddingBottom: S_W * 0.2
    },
    input_fields_container_margin: {
        marginLeft: S_W * 0.05,
        marginRight: S_W * 0.05,
    },
    input_number_text:{
        fontSize: S_W * 0.035,
        color: 'white',
    },
    otp_input_field: {
        marginTop: S_W * 0.08,
        borderBottomWidth: 1,
        borderColor: 'grey',
        flex: 1,
        margin: 3,
        textAlign: 'center',
        borderColor: 'white'
    },
    otp_resend_msg_text: {
        textAlign: 'center',
        marginTop: S_W * 0.08,
        fontSize: S_W * 0.04,
        color: 'white',
        fontWeight: 'bold'
    },
    resend_button_container: {
        alignSelf: 'center',
        marginTop: S_W * 0.02,
        backgroundColor: '#222E3D',
        borderRadius: S_W * 0.01
    },
    resend_button_text: {
        color: 'white',
        fontSize: S_W * 0.04,
        padding: 5,
    },
    next_container: {
        width: '100%',
        padding: 10,
        bottom: 0,
        position: 'absolute',
        borderTopWidth: 0.8,
        borderTopColor: 'grey',
        marginRight: 50,
        backgroundColor: '#F2F2F2',
    },
    next_text: {
        fontSize: S_W * 0.055,
        textAlign: 'center',
        fontWeight: 'bold',
    }


});
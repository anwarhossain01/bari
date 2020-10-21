import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Image, Dimensions, TouchableOpacity, SafeAreaView, ScrollView, } from 'react-native';
//import Logo from '../../components/k_icons/K_Logo'

const S_W = Dimensions.get('window').width;
const const_dimensions = Dimensions.get("window");

export default class MobileNumberScreen extends Component {
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

                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scroll_container}
                    Property keyboardShouldPersistTaps='always'>

                    <Image source={require('../../assets/logo/splash_logo1.png')}
                        style={{ width: imageWidth, }}
                        resizeMode="contain"
                    />

                    <View style={styles.phone_input_container}>
                        <Text style={styles.phone_code_text}>+880</Text>
                        <TextInput
                            style={styles.phone_text_input}
                        />
                    </View>

                    <Text style={styles.verification_code_text}>ভেরিফিকেশন কোডের জন্য মোবাইল নাম্বারটি লিখুন ...</Text>

                    <TouchableOpacity style={styles.next_container} onPress={() => this.props.navigation.navigate('otp_number_screen')}>
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
        paddingBottom: S_W * 0.2
    },
    phone_input_container: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginTop: S_W * 0.08,
        paddingBottom: S_W * 0.03,
        flexWrap: 'wrap',
        marginLeft: S_W * 0.05,
        marginRight: S_W * 0.05,

    },
    phone_code_text: {
        alignSelf: 'center',
        color: 'black',
        fontSize: S_W * 0.04,
    },
    phone_text_input: {
        fontSize: S_W * 0.04,
        padding: 2,
        marginLeft: S_W * 0.02,
        flex: 1,
    },
    verification_code_text: {
        fontSize: S_W * 0.03,
        marginTop: S_W * 0.015,
        marginLeft: S_W * 0.05,
        marginRight: S_W * 0.05,
        color: 'white'
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
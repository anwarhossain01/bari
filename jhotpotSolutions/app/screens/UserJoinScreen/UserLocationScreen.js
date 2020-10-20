import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Image, Dimensions, TouchableOpacity, SafeAreaView, ScrollView, } from 'react-native';
import GoBackHeader from '../../components/GoBackHeader'

const S_W = Dimensions.get('window').width;
const const_dimensions = Dimensions.get("window");

export default class UserLocationScreen extends Component {
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


                    <TouchableOpacity style={styles.next_container} onPress={() => this.props.navigation.navigate('Main')}>
                        <Text style={styles.next_text}>
                            SAVE
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
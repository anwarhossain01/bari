import React, { Component } from "react";
import { SafeAreaView, View, Dimensions, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const S_H = Dimensions.get('window').height;
const S_W = Dimensions.get('window').width;

export default class GoBackHeader extends Component {
    render() {
        return (
            <SafeAreaView style={styles.main_container}>
                <TouchableOpacity style={styles.cross_sign_container} onPress={() => {
                this.props.pass_navigation.goBack();
              }}>
                    <Image
                        style={styles.back_icon}
                        source={require('../assets/icons/left-arrow.png')}
                    />
                </TouchableOpacity>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: S_H * 0.08,
        flexDirection: 'row',
        textAlignVertical: 'center'
    },
    cross_sign_container:{
        alignSelf: 'center'
    },
    back_icon: {
        width: S_W * 0.08,
        height: S_W * 0.08,
        marginLeft: S_W * 0.02,
    },
    title_text: {
        fontSize: S_W * 0.045,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 10,
    }

});
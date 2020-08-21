/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import Navigator from './app/navigators/ScreenStackNavigators'

export default class App extends React.Component {

    render() {
        return (

            <Navigator></Navigator>
        )
    }

}

const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        backgroundColor: 'red',

    },


});
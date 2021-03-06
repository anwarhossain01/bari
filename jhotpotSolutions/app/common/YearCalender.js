import React, { Component } from "react";
import { Modal, StyleSheet, Text, TouchableHighlight, ScrollView, Image, TouchableOpacity } from "react-native";

import ScreenSize from '../common/ScreenSize'

export default class YearCalender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            get_all_years: [],
        }
    }

    async componentDidMount() {
    
        let currentYear = new Date().getFullYear(), get_all_years = [];
        let startYear = currentYear;
        while (startYear >= currentYear - 100) {
            get_all_years.push(startYear--);
        }

        this.setState({ get_all_years });


    }

    set_birthyear = (val) => {
        this.props.set_birthyear(val)
    }


    makeModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }
    render() {
        let modalVisible = this.props.isModalVisible;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <ScrollView contentContainerStyle={styles.modalView} showsVerticalScrollIndicator={false} >

                    <TouchableOpacity style={styles.close_icon_container} onPress={() => this.props.set_birthdate()} underlayColor={'gray'}>
                        <Image style={styles.close_icon}
                            source={require('../assets/icons/close_icon.png')} />
                    </TouchableOpacity>


                    {
                        this.state.get_all_years.map((val, index) => (
                            <TouchableHighlight style={styles.modalTextContainer} key={index} onPress={() => this.set_birthyear(val)} underlayColor={'#CFCFCF'}>
                                {
                                    <Text style={styles.modalText}>{val}</Text>
                                }

                            </TouchableHighlight>
                        ))
                    }

                </ScrollView>

            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    modalView: {
        paddingBottom: ScreenSize.sw * 1,
        backgroundColor: "#22546B",
        padding: ScreenSize.sw * 0.05,
        alignItems: "center",

    },
    close_icon_container: {
        padding: ScreenSize.sw * 0.012,
        alignSelf: 'flex-end'
    },
    close_icon: {
        width: ScreenSize.sw * 0.07,
        height: ScreenSize.sw * 0.07,
        resizeMode: 'contain',
        opacity: 0.5,
    },
    modalTextContainer: {
        marginTop: ScreenSize.sw * 0.03,
        borderWidth: ScreenSize.sw * 0.003,
        width: '100%',
        padding: ScreenSize.sw * 0.03,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#323232',
        borderRadius: ScreenSize.sw * 0.1,
        marginBottom: ScreenSize.sw * 0.03,
    },
    modalText: {
        textAlign: "center",
        color: '#f2f2f2',
        fontSize: ScreenSize.sw * 0.04,
    },
});

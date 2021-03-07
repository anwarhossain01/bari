import React, { Component } from "react";
import { Modal, StyleSheet, Text, TouchableHighlight, View, ScrollView, Image, TouchableOpacity } from "react-native";
import Global from '../common/Global';
import ScreenSize from '../common/ScreenSize';
import Lang from '../common/Languages'

export default class DayCalender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang_type: Global.LANGUAGE_NAME,
            modalVisible: false,
            get_all_days: [],

        }
    }

    async componentDidMount() {
        let total_days = new Date(this.props.year, this.props.month, 0).getDate(); //returns total days of a month
        let get_all_days = [];
        let day_one = 1;

        while (day_one <= total_days) {
            get_all_days.push(day_one++);
        }

        this.setState({ get_all_days });
        console.warn(this.props.month_no)
    }

    set_birthday = (day) => {
        this.props.set_birthday(day)
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

                    <TouchableOpacity style={styles.close_icon_container} onPress={() => this.props.close_day_calender_modal()} underlayColor={'gray'}>
                        <Image style={styles.close_icon}
                            source={require('../assets/icons/close_icon.png')} />
                    </TouchableOpacity>


                    {
                        this.state.get_all_days.map((val, index) => (
                            <TouchableHighlight style={styles.modalTextContainer} key={index} onPress={() => this.set_birthday(val)} underlayColor={'#CFCFCF'}>
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
        borderColor: '#323232',
        alignItems: 'center',
        borderRadius: ScreenSize.sw * 0.1,
        marginBottom: ScreenSize.sw * 0.03,
    },
    modalText: {
        textAlign: "center",
        color: '#f2f2f2',
        fontSize: ScreenSize.sw * 0.04,
    },
});

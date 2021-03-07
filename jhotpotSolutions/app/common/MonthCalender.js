import React, { Component } from "react";
import { Modal, StyleSheet, Text, TouchableHighlight, View, ScrollView, Image, TouchableOpacity } from "react-native";
import Global from '../common/Global';
import ScreenSize from '../common/ScreenSize';
import Lang from '../common/Languages'

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

export default class MonthCalender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang_type: Global.LANGUAGE_NAME,
            modalVisible: false,
            get_all_months: [],

        }
    }

    async componentDidMount() {
        let monthNames = {
            1: Lang[this.state.lang_type].january, 2: Lang[this.state.lang_type].february, 3: Lang[this.state.lang_type].march, 4: Lang[this.state.lang_type].april, 
            5: Lang[this.state.lang_type].may, 6: Lang[this.state.lang_type].june, 7: Lang[this.state.lang_type].july, 8: Lang[this.state.lang_type].august, 
            9: Lang[this.state.lang_type].september, 10: Lang[this.state.lang_type].october, 11: Lang[this.state.lang_type].november, 12: Lang[this.state.lang_type].december
        };

        this.setState({ get_all_months: monthNames });
    }

    set_birthmonth = (birth_no, birth_name) => {
        this.props.set_birthmonth(birth_no, birth_name)
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

                    <TouchableOpacity style={styles.close_icon_container} onPress={() => this.props.close_month_calender_modal()} underlayColor={'gray'}>
                        <Image style={styles.close_icon}
                            source={require('../assets/icons/close_icon.png')} />
                    </TouchableOpacity>


                    {
                        Object.entries(this.state.get_all_months).map((val, index) => (
                            <TouchableHighlight style={styles.modalTextContainer} key={index} onPress={() => this.set_birthmonth(val[0], val[1])} underlayColor={'#CFCFCF'}>
                                {
                                    <Text style={styles.modalText}>{val[1]}</Text>
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

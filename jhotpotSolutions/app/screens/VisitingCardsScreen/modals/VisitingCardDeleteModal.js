import React from 'react';
import {
    Text,
    View,
    Modal,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import ScreenSize from "../../../common/ScreenSize";

export default class VisitingCardDeleteModal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            modalVisible: false,
            opacity: 1,
        }

    }

    makeModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    render() {
        let modalVisible = this.props.isDeleteModalVisible;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.optionModalView}>
                        <Text style={styles.modalText}>DELETE !!</Text>

                        <Text style={styles.modalWarningText}> ARE YOU SURE TO DELETE THIS VISITING CARD ?? </Text>

                        <View style={styles.button_container}>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#275A74" }}
                                onPress={() => {
                                    this.props.make_delete_alert_modal()
                                }}
                            >
                                <Text style={styles.buttonTextStyle}>YES</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#843734" }}
                                onPress={() => {
                                    this.props.make_delete_alert_modal()
                                }}
                            >
                                <Text style={styles.buttonTextStyle}>NO</Text>
                            </TouchableHighlight>
                        </View>

                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({

    centeredView: {
        justifyContent: "center",
        alignItems: "center",
    },
    optionModalView: {
        marginTop: '100%',
        backgroundColor: "white",
        borderRadius: ScreenSize.sw * 0.01,
        padding: ScreenSize.sw * 0.05,
        alignItems: "center",
        height: '50%',
    },
    openButton: {
        backgroundColor: "#F194FF",
        padding: ScreenSize.sw * 0.02,
        margin: ScreenSize.sw * 0.02,
        width: '50%',
        borderRadius: ScreenSize.sw * 0.01,
    },
    button_container: {
        flexDirection: 'row',
        marginTop: ScreenSize.sw * 0.05
    },
    buttonTextStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: ScreenSize.sw * 0.04
    },
    modalText: {
        marginBottom: ScreenSize.sw * 0.02,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: ScreenSize.sw * 0.05
    },
    modalWarningText:{
        fontSize: ScreenSize.sw * 0.036
    }

});
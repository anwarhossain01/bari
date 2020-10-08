import React from 'react';
import {
    Text,
    View,
    Modal,
    ActivityIndicator,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import ScreenSize from "../../../common/ScreenSize";
import VisitingCardService from '../../../services/VisitingCardService'

export default class VisitingCardDeleteModal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            modalVisible: false,
            opacity: 1,
            server_con: false,
        }

    }

    makeModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    async delete_visiting_card() {
        this.setState({ server_con: true })

        let returnValue = await VisitingCardService.visiting_card_delete(this.props.v_card_id, this.props.v_card_img_loc);

        if (returnValue.success == true) {
            this.props.make_delete()
            alert("SUCCESS");
            this.props.make_delete_alert_modal()
        }
        else {
            alert("Please contact with server administration");
        }

        this.setState({ server_con: false })


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

                        {
                            this.state.server_con == false ?
                                <View style={styles.button_container}>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#275A74" }}
                                        onPress={() => {
                                            this.delete_visiting_card()
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
                                :
                                <ActivityIndicator size="large" color="#275A74" />

                        }

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
    modalWarningText: {
        fontSize: ScreenSize.sw * 0.036
    }

});
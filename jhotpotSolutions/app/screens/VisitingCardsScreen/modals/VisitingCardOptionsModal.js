import React from 'react';
import {
    Text,
    View,
    Modal,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import ScreenSize from "../../../common/ScreenSize";

export default class VisitingCardOptionsModal extends React.Component {
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
        let modalVisible = this.props.isOptionsModalVisible;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View >
                    <View style={styles.optionShowModalView}>

                        <View>
                            <TouchableHighlight
                                style={{ ...styles.openButtonForOptions, backgroundColor: "#275A74" }}
                                onPress={() => {
                                    this.props.make_edit_options_modal()
                                }}
                            >
                                <Text style={styles.buttonTextStyle}>EDIT</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={{ ...styles.openButtonForOptions, backgroundColor: "#843734" }}
                                onPress={() => {
                                    this.props.make_delete_alert_modal()
                                }}
                            >
                                <Text style={styles.buttonTextStyle}>DELETE</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={{ ...styles.openButtonForOptions, backgroundColor: "grey" }}
                                onPress={() => {
                                    this.props.make_options_modal()
                                }}
                            >
                                <Text style={styles.buttonTextStyle}>CANCEL</Text>
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
    optionShowModalView: {
        marginTop: '100%',
        backgroundColor: "white",
        borderRadius: ScreenSize.sw * 0.01,
        padding: ScreenSize.sw * 0.05,
        height: '50%',
    },
    openButtonForOptions: {
        padding: ScreenSize.sw * 0.02,
        margin: ScreenSize.sw * 0.02,
        width: '100%',
        alignSelf: 'center',
        borderRadius: ScreenSize.sw * 0.01,
    },
    buttonTextStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: ScreenSize.sw * 0.04
    },

});
import React from 'react';
import {
    Text,
    View,
    Modal,
    TouchableHighlight,
    TextInput,
    StyleSheet
} from 'react-native';
import ScreenSize from "../../../common/ScreenSize";

export default class VisitingCardEditModal extends React.Component {
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
        let modalVisible = this.props.isEditModalVisible;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.optionModalView}>

                        <TextInput style={styles.titleTextInput} placeholder="Enter Visiting Card Title" />

                        <TouchableHighlight style={styles.button} onPress={() => {
                            this.props.make_edit_options_modal()
                        }}>
                            <Text style={styles.buttonText}>UPDATE</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.button} onPress={() => {
                            this.props.make_edit_options_modal()
                        }}>
                            <Text style={styles.buttonText}>BACK</Text>
                        </TouchableHighlight>

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
        width: '100%'
    },
    modalText: {
        marginBottom: ScreenSize.sw * 0.02,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: ScreenSize.sw * 0.05
    },
    titleTextInput: {
        fontSize: ScreenSize.sw * 0.04,
        width: '100%',
        height: ScreenSize.sw * 0.12,
        borderWidth: ScreenSize.sw * 0.002,
        borderRadius: ScreenSize.sw * 0.01,
        paddingLeft: ScreenSize.sw * 0.03,
        marginTop: ScreenSize.sw * 0.04,
    },
    button: {
        backgroundColor: '#275A74',
        marginTop: ScreenSize.sw * 0.04,
        width: '100%',
        borderRadius: ScreenSize.sw * 0.01,
    },
    buttonText: {
        fontSize: ScreenSize.sw * 0.04,
        padding: ScreenSize.sw * 0.025,
        color: 'white',
        textAlign: 'center'
    },

});
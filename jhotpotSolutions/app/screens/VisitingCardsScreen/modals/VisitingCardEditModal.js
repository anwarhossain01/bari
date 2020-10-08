import React from 'react';
import {
    Text,
    View,
    Modal,
    TouchableHighlight,
    ActivityIndicator,
    TextInput,
    StyleSheet
} from 'react-native';
import ScreenSize from "../../../common/ScreenSize";
import VisitingCardService from '../../../services/VisitingCardService'

export default class VisitingCardEditModal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            modalVisible: false,
            opacity: 1,
            title: "",
            server_con: false,
        }

    }

    makeModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    async update_title() {
        this.setState({ server_con: true })

        if (this.state.title != '') {
            let returnValue = await VisitingCardService.visiting_card_update(this.props.v_card_id, this.state.title);

            if (returnValue) {
                this.props.make_update(this.props.v_card_id, this.state.title)
                alert("SUCCESS");
                this.props.make_edit_options_modal()
            }
            else {
                alert("Please contact with server administration");
            }

            this.setState({ server_con: false })

        }

        else {
            alert("Please insert title");
        }

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

                        <TextInput style={styles.titleTextInput} placeholder="Enter Visiting Card Title"
                            value={this.state.title}
                            onLayout={() => this.setState({ title: this.props.v_card_title })}
                            onChangeText={text => this.setState({ title: text })} />

                        {
                            this.state.server_con == false ?
                                <View style={{width: '100%'}}>
                                    <TouchableHighlight style={styles.button} onPress={() => {
                                        this.update_title()
                                    }}>
                                        <Text style={styles.buttonText}>UPDATE</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={styles.button} onPress={() => {
                                        this.props.make_edit_options_modal()
                                    }}>
                                        <Text style={styles.buttonText}>BACK</Text>
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
        backgroundColor: "white",
        borderRadius: ScreenSize.sw * 0.01,
        padding: ScreenSize.sw * 0.05,
        alignItems: "center",
        height: '100%',
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
        borderRadius: ScreenSize.sw * 0.01,
    },
    buttonText: {
        fontSize: ScreenSize.sw * 0.04,
        padding: ScreenSize.sw * 0.025,
        color: 'white',
        textAlign: 'center'
    },

});
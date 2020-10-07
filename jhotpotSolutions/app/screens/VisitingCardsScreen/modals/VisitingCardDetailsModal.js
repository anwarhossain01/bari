import React from 'react';
import {
    Text,
    View,
    Modal,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import ScreenSize from "../../../common/ScreenSize";

export default class VisitingCardDetailsModal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            modalVisible: false,
            opacity: 1,
            image_url_modal: '',
            image_title_text: '',
        }

    }

    makeModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    render() {
        let modalVisible = this.props.isImageModalVisible;
        let imageUrl = this.props.imageUrl;
        let title = this.props.title;

        return (
            <Modal
                animationType="fade"
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ScrollView>

                            <TouchableOpacity style={styles.close_modal_container} onPress={() => this.props.makeModal()}>
                                <Image
                                    style={styles.close_modal_icon}
                                    source={require('../../../assets/icons/close_icon.png')}
                                />
                            </TouchableOpacity>

                            <Text style={styles.imageModalText}>{title}</Text>
                            <Image
                                style={styles.visiting_card_org_image}
                                source={{ uri: imageUrl }}
                            />
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({


    optionModalView: {
        backgroundColor: "white",
        borderRadius: ScreenSize.sw * 0.01,
        padding: ScreenSize.sw * 0.05,
        alignItems: "center",
        margin: ScreenSize.sw * 0.1,
    },
    modalView: {
        backgroundColor: "white",
        padding: ScreenSize.sw * 0.02,
    },
    imageModalText: {
        fontSize: ScreenSize.sw * 0.042,
        marginTop: ScreenSize.sw * 0.02,
        marginBottom: ScreenSize.sw * 0.03,
        fontWeight: 'bold'
    },
    visiting_card_org_image: {
        width: '100%',
        height: ScreenSize.sw,
        resizeMode: 'contain',
    },
    close_modal_icon: {
        height: ScreenSize.sw * 0.06,
        width: ScreenSize.sw * 0.06,
    },
    close_modal_container: {
        alignSelf: 'flex-end',
        marginRight: ScreenSize.sw * 0.03,
    },

});
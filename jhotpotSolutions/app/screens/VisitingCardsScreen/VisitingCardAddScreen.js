import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    Modal,
    ActivityIndicator,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import ScreenSize from "../../common/ScreenSize";
import ImageResizer from 'react-native-image-resizer';
import ImagePicker from 'react-native-image-crop-picker';
import VisitingCardService from '../../services/VisitingCardService';

export default class VisitingCardAddScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {
            modalVisible: false,
            opacity: 1,
            image_url: '',
            quality: 55,
            height: 0,
            width: 0,
            resizedImageUri: '',
            response_new: {},
            title: '',
            show_submit: 0,
            server_con: false,
        }

    }

    makeModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible,
            opacity: this.state.modalVisible ? 1 : 0.1,
        })
    }

    image_set(image) {
        let get_ratio = image.width / image.height;
        let check = image.width > 1080 ? 1 : 0;
        let get_width = image.width > 1080 ? 1080 : image.width;
        let get_height = check == 0 ? image.height : 1080 / get_ratio;

        if (get_height > get_width) { this.setState({ quality: 30 }) }

        this.setState({
            image_url: image.path,
            height: get_height,
            width: get_width
        });

        this.resize();
    }

    photo_upload() {
        this.makeModal()

        ImagePicker.openPicker({
        }).then(image => {
            this.image_set(image);
        });
    }

    open_camera() {
        this.makeModal()

        ImagePicker.openCamera({
        }).then(image => {
            this.image_set(image);
        });
    }

    async resize() {
        ImageResizer.createResizedImage(this.state.image_url, this.state.width, this.state.height, 'JPEG', this.state.quality
        )
            .then(response => {
                this.setState({
                    response_new: response,
                    resizedImageUri: response.uri,
                });

            })

            .catch(err => {
                console.warn(err);
                return Alert.alert(
                    'Unable to resize the photo',
                    'Check the console for full the error message',
                );
            });

    }

    image_select_option_modal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <View >
                            <TouchableHighlight
                                style={styles.openButton}
                                onPress={() => {
                                    this.open_camera()
                                }}
                            >
                                <Text style={styles.buttonTextStyle}>OPEN CAMERA</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={styles.openButton}
                                onPress={() => {
                                    this.photo_upload()
                                }}
                            >
                                <Text style={styles.buttonTextStyle}>SELECT FROM GALLERY</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={styles.openButton}
                                onPress={() => {
                                    this.makeModal()
                                }}
                            >
                                <Text style={styles.buttonTextStyle}>CANCEL</Text>
                            </TouchableHighlight>

                        </View>

                    </View>
                </View>
            </Modal>

        )
    }

    async submit_visiting_card(img_url, img_name) {
        this.setState({ server_con: true })
        let returnValue = await VisitingCardService.visiting_card_insert(this.state.title, img_url, img_name);

        if (returnValue.success) {
            alert("SUCCESS");
            this.props.navigation.navigate('VisitingCardListScreen')

        }
        else {
            alert("Please contact with server administration");
        }

        this.setState({ server_con: false })
    }

    render() {
        return (

            <SafeAreaView style={styles.main_container}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.image_select_option_modal()}
                    <TouchableHighlight style={styles.dashed_container} underlayColor="#DDDDDD" onPress={() => this.makeModal()}>
                        {
                            this.state.image_url == '' ?
                                <Image style={styles.upload_icon} source={require('../../assets/icons/upload.png')} />
                                :
                                <Image style={styles.upload_image} source={{ uri: this.state.image_url }} />

                        }

                    </TouchableHighlight>

                    <TextInput style={styles.card_title_text} placeholder="Enter Title Name" onChangeText={text => this.setState({title:text})} />


                    {
                        this.state.server_con == false ?
                            <TouchableHighlight style={styles.submit_button} onPress={() => this.submit_visiting_card(this.state.response_new.uri, this.state.response_new.name)}>
                                <Text style={styles.submit_button_text}>SUBMIT</Text>
                            </TouchableHighlight>
                            :
                            <View />
                    }

                    {
                        this.state.server_con == true ?
                            <ActivityIndicator size="large" color="#275A74" />
                            :
                            <View />
                    }


                </ScrollView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    dashed_container: {
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 1,
        height: ScreenSize.sw * 0.5,
        justifyContent: 'center',
    },
    upload_icon: {
        height: ScreenSize.sw * 0.08,
        width: ScreenSize.sw * 0.08,
        alignSelf: 'center',
    },
    upload_image: {
        width: "100%",
        height: ScreenSize.sw * 0.5,
        resizeMode: 'contain'
    },
    card_title_text: {
        borderWidth: ScreenSize.sw * 0.002,
        marginTop: ScreenSize.sw * 0.03,
        borderRadius: ScreenSize.sw * 0.01,
        height: ScreenSize.sw * 0.13,
        paddingLeft: ScreenSize.sw * 0.02,
    },
    submit_button: {
        marginTop: ScreenSize.sw * 0.1,
        backgroundColor: '#275A74',
        width: '100%'
    },
    submit_button_text: {
        color: 'white',
        fontSize: ScreenSize.sw * 0.04,
        padding: ScreenSize.sw * 0.02,
        textAlign: 'center'
    },

    centeredView: {
        justifyContent: "center",
        margin: ScreenSize.sw * 0.04
    },
    modalView: {
        marginTop: '50%',
        borderRadius: ScreenSize.sw * 0.02,
        //backgroundColor: 'white',
        //alignItems: "center",
        padding: ScreenSize.sw * 0.03,
    },
    openButton: {
        padding: ScreenSize.sw * 0.025,
        margin: ScreenSize.sw * 0.02,
        borderRadius: ScreenSize.sw * 0.02,
        backgroundColor: 'gray'
    },
    buttonTextStyle: {
        color: 'white',
        fontWeight: "bold",
        textAlign: "center",
        fontSize: ScreenSize.sw * 0.036
    },

});

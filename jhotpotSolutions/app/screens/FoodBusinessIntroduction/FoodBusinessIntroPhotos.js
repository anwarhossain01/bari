import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    Modal,
    ImageBackground,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import ScreenSize from "../../common/ScreenSize";
import ImageResizer from 'react-native-image-resizer';
import ImagePicker from 'react-native-image-crop-picker';
import Lang from '../../common/Languages'

export default class FoodBusinessIntroductionPhotos extends React.Component {
    constructor(props) {
        super();
        this.state = {
            lang_type: 'EN',
            modalVisible: false,
            opacity: 1,
            image_no: -1,

            displayImagePath: '',
            extraImage_1_Path: '',
            extraImage_2_Path: '',
            extraImage_3_Path: '',
            extraImage_4_Path: '',

            quality: 55,

            displayImageHeight: 1,
            displayImageWidth: 1,
            extraImage_1_Height: 1,
            extraImage_1_Width: 1,
            extraImage_2_Height: 1,
            extraImage_2_Width: 1,
            extraImage_3_Height: 1,
            extraImage_3_Width: 1,
            extraImage_4_Height: 1,
            extraImage_4_Width: 1,

            displayImageResponse: {},
            extraImage_1_Response: {},
            extraImage_2_Response: {},
            extraImage_3_Response: {},
            extraImage_4_Response: {},

            title: '',
            show_submit: 0,
            server_con: false,

        }

    }

    open_gallery_permission = (image_no) => {
        this.setState({
            image_no: image_no,
            modalVisible: !this.state.modalVisible,
            // opacity: this.state.modalVisible ? 1 : 0.1,
        })
    }

    photo_upload() {
        this.open_gallery_permission(this.state.image_no);

        ImagePicker.openPicker({
        }).then(image => {
            this.image_set(image);
        });

    }

    image_set(image) {
        let get_ratio = image.width / image.height;
        let check = image.width > 1080 ? 1 : 0;
        let get_width = image.width > 1080 ? 1080 : image.width;
        let get_height = check == 0 ? image.height : 1080 / get_ratio;

        if (get_height > get_width) { this.setState({ quality: 30 }) }

        if (this.state.image_no == 0) {
            //Display Image
            this.setState({
                displayImagePath: image.path,
                displayImageHeight: get_height,
                displayImageWidth: get_width
            });
        }
        else if (this.state.image_no == 1) {
            //Extra Image, No 1
            this.setState({
                extraImage_1_Path: image.path,
                extraImage_1_Height: get_height,
                extraImage_1_Width: get_width
            });
        }
        else if (this.state.image_no == 2) {
            //Extra Image No, 2
            this.setState({
                extraImage_2_Path: image.path,
                extraImage_2_Height: get_height,
                extraImage_2_Width: get_width
            });
        }
        else if (this.state.image_no == 3) {
            //Extra Image No, 3
            this.setState({
                extraImage_3_Path: image.path,
                extraImage_3_Height: get_height,
                extraImage_3_Width: get_width
            });
        }
        else if (this.state.image_no == 4) {
            //Extra Image No, 4
            this.setState({
                extraImage_4_Path: image.path,
                extraImage_4_Height: get_height,
                extraImage_4_Width: get_width
            });
        }

        this.resize(this.state.image_no, image.path, get_width, get_height);
    }

    async resize(image_no, imagePath, width, height) {
        ImageResizer.createResizedImage(imagePath, width, height, 'JPEG', this.state.quality)

            .then(response => {
                if (image_no == 0) {
                    this.setState({
                        displayImageResponse: response,
                    });
                }
                else if (image_no == 1) {
                    this.setState({
                        extraImage_1_Response: response,
                    });
                }
                else if (image_no == 2) {
                    this.setState({
                        extraImage_2_Response: response,
                    });
                }
                else if (image_no == 3) {
                    this.setState({
                        extraImage_3_Response: response,
                    });
                }
                else if (image_no == 4) {
                    this.setState({
                        extraImage_4_Response: response,
                    });
                }

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
                                    this.photo_upload()
                                }}
                            >
                                <Text style={styles.buttonTextStyle}>OPEN GALLERY</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={styles.openButton}
                                onPress={() => {
                                    this.open_gallery_permission(this.state.image_no)
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

    remove_image = (image_no) => {

        if (image_no == 0) {
            //Display Image
            this.setState({
                displayImagePath: '',
                displayImageResponse: {},
            });
        }
        else if (image_no == 1) {
            //Extra Image, No 1
            this.setState({
                extraImage_1_Path: '',
                extraImage_1_Response: {},
            });
        }
        else if (image_no == 2) {
            //Extra Image No, 2
            this.setState({
                extraImage_2_Path: '',
                extraImage_2_Response: {},
            });
        }
        else if (image_no == 3) {
            //Extra Image No, 3
            this.setState({
                extraImage_3_Path: '',
                extraImage_3_Response: {},
            });
        }
        else if (image_no == 4) {
            //Extra Image No, 4
            this.setState({
                extraImage_4_Path: '',
                extraImage_4_Response: {},
            });
        }
    }

    render() {
        return (

            <SafeAreaView style={{ flex: 1, padding: ScreenSize.sw * 0.02, opacity: this.state.opacity }}>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <Text style={styles.page_title_text}>{Lang[this.state.lang_type].food_business_introduction}</Text>

                    <View style={styles.step_indicator_container}>

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].description} </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />

                        <View style={styles.formSelectedStep}>
                            <Text style={styles.formStepText}> {Lang[this.state.lang_type].photos} </Text>
                        </View>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].mobile_number_to_contact}  </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].post}  </Text>

                    </View>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].max_photo_upload_message}</Text>

                    {this.image_select_option_modal()}
                    <TouchableHighlight style={styles.dashed_container} underlayColor="#DDDDDD" onPress={() => this.open_gallery_permission(0)}>
                        {
                            this.state.displayImagePath == '' ?
                                <Image style={styles.upload_icon} source={require('../../assets/icons/upload.png')} />
                                :
                                <ImageBackground style={styles.upload_image} source={{ uri: this.state.displayImagePath }}>
                                    <TouchableHighlight style={styles.close_icon_container} onPress={() => this.remove_image(0)} underlayColor="#DDDDDD">
                                        <Image style={styles.close_icon} source={require('../../assets/icons/close_icon.png')} />
                                    </TouchableHighlight>
                                </ImageBackground>

                        }

                    </TouchableHighlight>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableHighlight style={styles.dashed_container_others_img} underlayColor="#DDDDDD" onPress={() => this.open_gallery_permission(1)}>
                            {
                                this.state.extraImage_1_Path == '' ?
                                    <Image style={styles.upload_icon} source={require('../../assets/icons/upload.png')} />
                                    :
                                    <ImageBackground style={styles.upload_image} source={{ uri: this.state.extraImage_1_Path }}>
                                        <TouchableHighlight style={styles.close_icon_container} onPress={() => this.remove_image(1)} underlayColor="#DDDDDD">
                                            <Image style={styles.close_icon} source={require('../../assets/icons/close_icon.png')} />
                                        </TouchableHighlight>
                                    </ImageBackground>

                            }

                        </TouchableHighlight>


                        <TouchableHighlight style={styles.dashed_container_others_img} underlayColor="#DDDDDD" onPress={() => this.open_gallery_permission(2)}>
                            {
                                this.state.extraImage_2_Path == '' ?
                                    <Image style={styles.upload_icon} source={require('../../assets/icons/upload.png')} />
                                    :
                                    <ImageBackground style={styles.upload_image} source={{ uri: this.state.extraImage_2_Path }}>
                                        <TouchableHighlight style={styles.close_icon_container} onPress={() => this.remove_image(2)} underlayColor="#DDDDDD">
                                            <Image style={styles.close_icon} source={require('../../assets/icons/close_icon.png')} />
                                        </TouchableHighlight>
                                    </ImageBackground>

                            }

                        </TouchableHighlight>

                    </View>


                    <View style={{ flexDirection: 'row' }}>
                        <TouchableHighlight style={styles.dashed_container_others_img} underlayColor="#DDDDDD" onPress={() => this.open_gallery_permission(3)}>
                            {
                                this.state.extraImage_3_Path == '' ?
                                    <Image style={styles.upload_icon} source={require('../../assets/icons/upload.png')} />
                                    :
                                    <ImageBackground style={styles.upload_image} source={{ uri: this.state.extraImage_3_Path }}>
                                        <TouchableHighlight style={styles.close_icon_container} onPress={() => this.remove_image(3)} underlayColor="#DDDDDD">
                                            <Image style={styles.close_icon} source={require('../../assets/icons/close_icon.png')} />
                                        </TouchableHighlight>
                                    </ImageBackground>

                            }

                        </TouchableHighlight>


                        <TouchableHighlight style={styles.dashed_container_others_img} underlayColor="#DDDDDD" onPress={() => this.open_gallery_permission(4)}>
                            {
                                this.state.extraImage_4_Path == '' ?
                                    <Image style={styles.upload_icon} source={require('../../assets/icons/upload.png')} />
                                    :
                                    <ImageBackground style={styles.upload_image} source={{ uri: this.state.extraImage_4_Path }}>
                                        <TouchableHighlight style={styles.close_icon_container} onPress={() => this.remove_image(4)} underlayColor="#DDDDDD">
                                            <Image style={styles.close_icon} source={require('../../assets/icons/close_icon.png')} />
                                        </TouchableHighlight>
                                    </ImageBackground>

                            }

                        </TouchableHighlight>


                    </View>

                    <TouchableHighlight style={styles.next_button_container} onPress={() => this.props.navigation.navigate('FoodBusinessIntroContact')}>
                        <Text style={styles.next_button_text}>
                            {Lang[this.state.lang_type].next}
                        </Text>
                    </TouchableHighlight>


                </ScrollView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    page_title_text: {
        fontSize: ScreenSize.sw * 0.05,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    step_indicator_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: ScreenSize.sw * 0.03,
        flexWrap: 'wrap'
    },
    formSelectedStep:
    {
        borderBottomColor: '#24536B',
        borderBottomWidth: ScreenSize.sw * 0.008
    },
    formStepText: {
        fontSize: ScreenSize.sw * 0.035,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    formStepArrowImage: { marginLeft: 5, marginRight: 5, width: 20, height: 20 },
    qus_level_text: {
        textAlign: 'center',
        marginTop: ScreenSize.sw * 0.05,
        fontSize: ScreenSize.sw * 0.038,
        color: '#22546B',
    },
    dashed_container: {
        marginTop: ScreenSize.sw * 0.025,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 1,
        height: ScreenSize.sw * 0.5,
        justifyContent: 'center',
    },
    dashed_container_others_img: {
        marginTop: ScreenSize.sw * 0.025,
        borderStyle: 'dashed',
        flex: 1,
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
    close_icon_container: {
        alignSelf: 'flex-end',
    },
    close_icon: {
        height: ScreenSize.sw * 0.06,
        width: ScreenSize.sw * 0.06,
        margin: ScreenSize.sw * 0.01,
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
    centeredView: {
        //justifyContent: "center",
        // margin: ScreenSize.sw * 0.04
    },
    modalView: {
        marginTop: '120%',
        height: '100%',
        borderRadius: ScreenSize.sw * 0.02,
        backgroundColor: 'white',
        padding: ScreenSize.sw * 0.03,
    },
    openButton: {
        padding: ScreenSize.sw * 0.025,
        margin: ScreenSize.sw * 0.02,
        borderRadius: ScreenSize.sw * 0.004,
        backgroundColor: '#22546B'
    },
    buttonTextStyle: {
        color: 'white',
        fontWeight: "bold",
        textAlign: "center",
        fontSize: ScreenSize.sw * 0.036
    },
    next_button_container: {
        marginTop: ScreenSize.sw * 0.15,
        alignSelf: 'center',
        width: '100%',
        padding: ScreenSize.sw * 0.02,
        backgroundColor: '#22546B',
        marginBottom: ScreenSize.sw * 0.02,
    },
    next_button_text: {
        textAlign: 'center',
        color: 'white',
        fontSize: ScreenSize.sw * 0.04,
    }

});

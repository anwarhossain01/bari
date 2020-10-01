import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground

} from 'react-native';
import ScreenSize from '../../common/ScreenSize';
import ImageResizer from 'react-native-image-resizer';
import ImagePicker from 'react-native-image-crop-picker';
import DatabaseOffline from '../../DatabaseOffline/DatabaseOffline';
import DivisionsList from '../../components/DivisionsList';
import DistrictsList from '../../components/DistrictsList';
import PoliceStationList from '../../components/PoliceStationsList';

export default class ForGivingRent extends React.Component {
    constructor(props) {
        super();
        this.dbOffline = new DatabaseOffline();
        this.state = {
            currentStep: 1,
            notice_msg: "*** আপনি বাংলা অথবা ইংরেজী , দুটো ভাষাই ব্যবহার করতে পারেন !",
            notice_img: "*** আপনি সর্বোচ্চ ৫টি ছবি আপলোড করতে পারবেন ; ছবি আপলোড করতে না চাইলে পরবর্তী ধাপে চলে যান !",
            notice_post: '',
            mainImgSelectTex: 'মূল ছবি নির্বাচন করুন',
            extraImgSelectText: 'ছবি নির্বাচন করুন',

            all_divisions: [],
            all_districts: [],
            all_policeStations: [],
            selectedDivisionId: 0,
            selectedDistrictId: 0,
            selectedPoliceStationId: 0,

            resizedImageUri: '',
            loading: true,

            mainImagePath: '',
            extraImage_1_Path: '',
            extraImage_2_Path: '',
            extraImage_3_Path: '',
            extraImage_4_Path: '',
            ratio: 1,

            mainImageHeight: 1,
            mainImageWidth: 1,
            extraImage_1_Height: 1,
            extraImage_1_Width: 1,
            extraImage_2_Height: 1,
            extraImage_2_Width: 1,
            extraImage_3_Height: 1,
            extraImage_3_Width: 1,
            extraImage_4_Height: 1,
            extraImage_4_Width: 1,

            quality: 55,

            mainImageResponse_new: {},
            extraImage_1_Response_new: {},
            extraImage_2_Response_new: {},
            extraImage_3_Response_new: {},
            extraImage_4_Response_new: {},



        }

    }

    async componentDidMount() {



        let all_divisions = await this.dbOffline.get_all_divisions()
        this.setState({ all_divisions });

    }

    updateSelectedDivisionId = (division_id) => {

        this.setState({ selectedDivisionId: division_id });
    }

    updateSelectedDistrictId = (district_id) => {

        this.setState({ selectedDistrictId: district_id });
    }

    updateSelectedPoliceStationId = (policeStation_id) => {

        this.setState({ selectedPoliceStationId: policeStation_id });
    }
    photo_upload(image_no) {
        ImagePicker.openPicker({
            // path: 'https://www.lifeofpix.com/wp-content/uploads/2018/09/manhattan_-11-1600x2396.jpg',
            // width: 300,
            //  height: 300,
            //compressImageQuality: 0.8
            // cropping: true

        }).then(image => {
            let get_ratio = image.width / image.height;
            let check = image.width > 1080 ? 1 : 0;
            let get_width = image.width > 1080 ? 1080 : image.width;
            let get_height = check == 0 ? image.height : 1080 / get_ratio;
            // let get_quality = (image.size / 1024)

            if (get_height > get_width) { this.setState({ quality: 30 }) }

            //  console.warn('img_height',get_height);
            // console.warn('img_ration', get_ratio)
            if (image_no == 0) {
                //Main Image
                this.setState({
                    mainImagePath: image.path,
                    mainImageHeight: get_height,
                    mainImageWidth: get_width
                });
            }
            else if (image_no == 1) {
                //Extra Image No 1
                this.setState({
                    extraImage_1_Path: image.path,
                    extraImage_1_Height: get_height,
                    extraImage_1_Width: get_width
                });
            }
            else if (image_no == 2) {
                //Extra Image No 2
                this.setState({
                    extraImage_2_Path: image.path,
                    extraImage_2_Height: get_height,
                    extraImage_2_Width: get_width
                });
            }
            else if (image_no == 3) {
                //Extra Image No 3
                this.setState({
                    extraImage_3_Path: image.path,
                    extraImage_3_Height: get_height,
                    extraImage_3_Width: get_width
                });
            }
            else if (image_no == 4) {
                //Extra Image No 4
                this.setState({
                    extraImage_4_Path: image.path,
                    extraImage_4_Height: get_height,
                    extraImage_4_Width: get_width
                });
            }

            // // console.warn("oRIGINAL SIZE OF IMAGE-", (image.size/1024));
            //  console.warn("SIZE OF IMAGE-", Number((image.size / 1024).toFixed(1)));
            this.resize();
        });
    }

    async resize() {
        ImageResizer.createResizedImage(this.state.image, this.state.width, this.state.height, 'JPEG', this.state.quality
        )

            .then(response => {
                this.setState({
                    response_new: response,
                    resizedImageUri: response.uri,
                });
                // afer_comp_response = response;
                //  console.warn("COMP SIZE OF IMAGE-", Number((response.size / 1024).toFixed(1)));

                //console.warn(response);
                // this.downloadImage(this.state.resizedImageUri);
            })
            // .then( response  => {
            //   // this.setState({
            //   //   resizedImageUri: uri,
            //   // });
            //   console.warn("COMP SIZE OF IMAGE-", Number((size / 1024).toFixed(1)));
            //   console.warn(response);
            //  // this.downloadImage(this.state.resizedImageUri);
            // })
            .catch(err => {
                console.warn(err);
                return Alert.alert(
                    'Unable to resize the photo',
                    'Check the console for full the error message',
                );
            });

        // let result = await this.post_image_submit(afer_comp_response.uri, afer_comp_response.name);
    }
    render() {
        return (

            <SafeAreaView style={{ flex: 1, }}>



                <View>
                    <Text style={styles.titleText}>ভাড়া দিতে চাই</Text>
                    <Text style={styles.subTitleText}>ফ্ল্যাট - সাবলেট - রুম - মেস - দোকান - অফিস - গ্যারেজ - প্লট - অন্যান্য</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top: 5 }}>

                    <View style={this.state.currentStep == 1 ? styles.formSelectedStep : ""}>
                        <Text style={styles.formStepText}> বিবরণ </Text>
                    </View>

                    <Image
                        style={styles.formStepArrowImage}
                        source={require("../../assets/icons/right-arrow.png")} />

                    <View style={this.state.currentStep == 2 ? styles.formSelectedStep : ""}>
                        <Text style={styles.formStepText}> ঠিকানা </Text>

                    </View>
                    <Image
                        style={styles.formStepArrowImage}
                        source={require("../../assets/icons/right-arrow.png")} />

                    <View style={this.state.currentStep == 3 ? styles.formSelectedStep : ""}>
                        <Text style={styles.formStepText}> ছবি </Text>

                    </View>
                    <Image
                        style={styles.formStepArrowImage}
                        source={require("../../assets/icons/right-arrow.png")} />


                    <View style={this.state.currentStep == 4 ? styles.formSelectedStep : ""}>
                        <Text style={styles.formStepText}> পোস্ট  </Text>

                    </View>

                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={{
                        fontSize: ScreenSize.sw * 0.035,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#24536B'

                    }}> {this.state.currentStep == 3 ? this.state.notice_img : this.state.notice_msg}</Text>

                </View>

                <ScrollView>

                    {/****************STEP - 1 Start */}
                    {this.state.currentStep == 1 && <View>
                        {/* AD TITLE*/}
                        <View style={styles.inputGroupView}>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.labelText}>শিরোনাম</Text>
                                <Text style={styles.labelStar}>*</Text>
                            </View>

                            <TextInput style={styles.textInput}></TextInput>
                            <Text></Text>
                        </View>
                        {/* AD TITLE*/}



                        {/* AD DETAILS*/}
                        <View style={styles.inputGroupView}>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.labelText}>বিবরণ/বর্ণনা</Text>
                                <Text style={styles.labelStar}>*</Text>
                            </View>

                            <TextInput
                                multiline
                                style={styles.multiLineTextInput}></TextInput>
                        </View>
                        {/* AD Details*/}

                        {/* Mobile Number*/}
                        <View style={styles.inputGroupView}>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.labelText}>মোবাইল নাম্বার (যোগাযোগ করার জন্য)</Text>
                                <Text style={styles.labelStar}>*</Text>
                            </View>

                            <TextInput style={styles.textInput}></TextInput>
                            <Text style={styles.hintsText}>একাধিক নাম্বার হলে এইভাবে কমা দিয়ে লিখুন: 01890000000, 017900000000</Text>
                            <Text></Text>
                        </View>
                        {/* Mobile Number*/}
                    </View>}

                    {/****************STEP - 1 END */}


                    {/****************STEP - 2 Start */}
                    {this.state.currentStep == 2 && <View>
                        {/*Select Division drop down*/}
                        <DivisionsList updateDivisionState={this.updateSelectedDivisionId} />
                        {/*Select Division drop down*/}

                        {/*Select District drop down*/}
                        <DistrictsList
                            selectedDivisionId={this.state.selectedDivisionId}
                            updateDistrictState={this.updateSelectedDistrictId} />
                        {/*Select District drop down*/}
                        {/*Select Police Station drop down*/}
                        <PoliceStationList
                            selectedDistrictId={this.state.selectedDistrictId}
                            updatePoliceStationState={this.updateSelectedPoliceStationId} />
                        {/*Select Police Station drop down*/}

                        {/* Address*/}
                        <View style={styles.inputGroupView}>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.labelText}>ঠিকানা</Text>
                                <Text style={styles.labelStar}></Text>
                            </View>

                            <TextInput
                                multiline
                                style={styles.multiLineTextInput}></TextInput>
                        </View>
                        {/* Address*/}
                    </View>}

                    {/****************STEP - 2 End */}


                    {/****************STEP - 3 Start */}
                    {this.state.currentStep == 3 && <View style={{ marginbottom: 5 }}>
                        {/* Main Display Image*/}
                        <View style={styles.inputGroupView}>


                            <TouchableOpacity onPress={() => this.photo_upload(0)}>
                                <ImageBackground
                                    source={{ uri: this.state.mainImagePath }}
                                    style={{ width: ScreenSize.sw, height: ScreenSize.imgHeight, justifyContent: 'center', backgroundColor: 'gray', top: 5 }}
                                >

                                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: ScreenSize.sw * 0.05, color: 'white' }}>মূল ছবি নির্বাচন করুন</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        {/* Main Display Image*/}



                        {/* Extra Image*/}
                        <View style={styles.inputGroupView}>

                            <View style={{ flexDirection: "row" }}>

                                <TouchableOpacity onPress={() => this.photo_upload(1)}>
                                    <ImageBackground
                                        source={{ uri: this.state.extraImage_1_Path }}
                                        style={{ width: ScreenSize.sw / 3, height: ScreenSize.imgHeight / 3, justifyContent: 'center', backgroundColor: 'gray', marginLeft: ScreenSize.sw / 9, marginRight: ScreenSize.sw / 9 }}
                                    >

                                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: ScreenSize.sw * 0.05, color: 'white' }}> ছবি নির্বাচন করুন</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.photo_upload(2)}>
                                    <ImageBackground
                                    source={{ uri: this.state.extraImage_2_Path }}
                                        style={{ width: ScreenSize.sw / 3, height: ScreenSize.imgHeight / 3, justifyContent: 'center', backgroundColor: 'gray', marginRight: ScreenSize.sw / 9 }}
                                    >

                                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: ScreenSize.sw * 0.05, color: 'white' }}> ছবি নির্বাচন করুন</Text>
                                    </ImageBackground>
                                </TouchableOpacity>


                            </View>

                            <View style={{ flexDirection: "row", marginTop: 5 }}>

                                <TouchableOpacity onPress={() => this.photo_upload(3)}>
                                    <ImageBackground
                                    source={{ uri: this.state.extraImage_3_Path }}
                                        style={{ width: ScreenSize.sw / 3, height: ScreenSize.imgHeight / 3, justifyContent: 'center', backgroundColor: 'gray', marginLeft: ScreenSize.sw / 9, marginRight: ScreenSize.sw / 9 }}
                                    >

                                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: ScreenSize.sw * 0.05, color: 'white' }}> ছবি নির্বাচন করুন</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.photo_upload(4)}>
                                    <ImageBackground
                                    source={{ uri: this.state.extraImage_4_Path }}
                                        style={{ width: ScreenSize.sw / 3, height: ScreenSize.imgHeight / 3, justifyContent: 'center', backgroundColor: 'gray', marginRight: ScreenSize.sw / 9 }}
                                    >

                                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: ScreenSize.sw * 0.05, color: 'white' }}> ছবি নির্বাচন করুন</Text>
                                    </ImageBackground>
                                </TouchableOpacity>


                            </View>
                        </View>
                        {/* AD Details*/}


                    </View>}
                    {/****************STEP - 3 End */}





                    <View style={{ marginTop: 5, flexDirection: 'row' }}>




                        <View style={{ width: '50%', paddingLeft: '5%', paddingRight: '5%' }}>

                            {this.state.currentStep > 1 &&
                                <TouchableOpacity style={{ alignSelf: 'flex-start', width: '100%', backgroundColor: 'white', borderRadius: 5, borderWidth: 5, borderColor: 'gray' }} onPress={() => this.previousButtonClick()}>
                                    <Text style={{ textAlign: 'center', fontSize: ScreenSize.sw * 0.05, fontWeight: 'bold' }}>আগের ধাপ</Text>
                                </TouchableOpacity>
                            }

                        </View>

                        <View style={{ width: '50%', paddingLeft: '5%', paddingRight: '5%' }}>

                            <TouchableOpacity style={{ alignSelf: 'flex-end', width: '100%', backgroundColor: '#24536B', borderRadius: 5, borderWidth: 5, borderColor: '#24536B' }} onPress={() => this.nextButtonClick()}>
                                <Text style={{ textAlign: 'center', color: 'white', fontSize: ScreenSize.sw * 0.05, fontWeight: 'bold' }} >পরবর্তী ধাপ</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </ScrollView>

            </SafeAreaView>
        );
    }

    nextButtonClick() {
        this.setState({ currentStep: this.state.currentStep == 4 ? this.state.currentStep : this.state.currentStep + 1 });
    }

    previousButtonClick() {
        this.setState({ currentStep: this.state.currentStep == 1 ? this.state.currentStep : this.state.currentStep - 1 });
    }
}

const styles = StyleSheet.create({
    formSelectedStep: { borderBottomColor: '#24536B', borderBottomWidth: 5 },
    formStepText: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    formStepArrowImage: { marginLeft: 5, marginRight: 5, width: 20, height: 20 },
    titleText: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    subTitleText: {
        fontSize: ScreenSize.sw * 0.027,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputGroupView: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    labelText: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: "bold",
    },
    labelStar: {
        fontSize: ScreenSize.sw * 0.035,
        fontWeight: "bold",
        color: 'red'
    },
    textInput: {
        width: ScreenSize.sw - 20,
        height: ScreenSize.sw * 0.12,
        fontSize: ScreenSize.sw * 0.04,
        borderColor: '#24536B',
        borderRadius: 5,
        borderWidth: 2,
    },
    multiLineTextInput: {
        width: ScreenSize.sw - 20,
        height: ScreenSize.sw * 0.3,
        fontSize: ScreenSize.sw * 0.04,
        borderColor: '#24536B',
        borderRadius: 5,
        borderWidth: 2,
    },
    hintsText: {
        fontSize: ScreenSize.sw * 0.028,
        color: 'grey',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    selectTouchView: {
        borderColor: '#24536B',
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 2,
        width: ScreenSize.sw - 20,
        height: ScreenSize.sw * 0.12,
        justifyContent: "center",
        alignItems: "center",
    },
    selectText: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: "bold",
        elevation: 5,
        paddingLeft: 10,
        paddingRight: 10,
        padding: 2,
        textAlign: 'center'
    },
    selectImageStyle: { width: 20, height: 20, },



});

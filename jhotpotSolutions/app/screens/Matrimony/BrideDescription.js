import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import DatabaseOffline from '../../DatabaseOffline/DatabaseOffline';
import Lang from '../../common/Languages'
import ScreenSize from '../../common/ScreenSize';
import MaritalStatus from '../../components/MaritalStatus';
import OccupationList from '../../components/OccupationList';
import Global from '../../common/Global'

export default class BrideDescription extends React.Component {
    constructor(props) {
        super();

        this.dbOffline = new DatabaseOffline();
        this.state = {
            allProductCategories: [],
            lang_type: Global.LANGUAGE_NAME,
            checked_money: false,
            checked_product: true,
            selectedMaritalStatusId: 0,
            selectedOccupationId: 0,
            all_divisions: [],
            all_districts: [],
            all_policeStations: [],
            selectedDivisionId: 0,
            selectedDistrictId: 0,
            selectedPoliceStationId: 0,
            loading: true,
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


    updateSelectedMaritalStatusId = (marital_status_id) => {
        this.setState({ selectedMaritalStatusId: marital_status_id });
    }

    updateSelectedOccupationId = (occupation_id) => {
        this.setState({ selectedOccupationId: occupation_id });
    }


    //then pass each function with each radio button to make itself selected
    set_checked_button_money = (checked) => { this.setState({ checked_money: checked, }) }
    set_checked_button_product = (checked) => { this.setState({ checked_product: checked }) }

    render() {
        return (

            <SafeAreaView style={styles.main_container}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>

                    <Text style={styles.page_title_text}>{Lang[this.state.lang_type].want_groom}</Text>

                    <View style={styles.step_indicator_container}>

                        <View style={styles.formSelectedStep}>
                            <Text style={styles.formStepText}> {Lang[this.state.lang_type].bride_description} </Text>
                        </View>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />
                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].bride_address} </Text>

                        <Image 
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />
                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].bride_photo} </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />
                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].groom_description} </Text>


                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />
                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].post}  </Text>


                    </View>

                    {/* <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].bride_details.toUpperCase()}</Text>
                    <TextInput style={styles.des_input} multiline/> */}

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].bride_name.toUpperCase()}</Text>
                    <TextInput style={styles.input_box} />

                    <View style={styles.age_height_container}>
                        <View style={styles.half_container}>
                            <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].birthdate.toUpperCase()}</Text>
                            <TextInput style={styles.input_box} keyboardType="numeric" />
                        </View>

                        <View style={styles.half_container}>
                            <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].height.toUpperCase()}</Text>
                            <TextInput style={styles.input_box} />
                        </View>
                    </View>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].religion.toUpperCase()}</Text>
                    <TextInput style={styles.input_box} />


                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].educational_qualifications.toUpperCase()}</Text>
                    <TextInput style={styles.input_box} />

                    <View>
                        <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].occupation_list.toUpperCase()}</Text>
                        <OccupationList updateOccupationState={this.updateSelectedOccupationId} />
                    </View>

                    <View>
                        <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].marital_status_list.toUpperCase()}</Text>
                        <MaritalStatus updateMaritalStatusState={this.updateSelectedMaritalStatusId} />
                    </View>


                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].bride_details.toUpperCase()}</Text>
                    <TextInput style={styles.des_input} multiline/>


                    <TouchableHighlight style={styles.next_button_container} onPress={() => this.props.navigation.navigate('BrideAddress')}>
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
    main_container: {
        flex: 1,
        backgroundColor: 'white'
    },
    page_title_text: {
        fontSize: ScreenSize.sw * 0.05,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    scroll_margin: {
        marginLeft: ScreenSize.sw * 0.02,
        marginRight: ScreenSize.sw * 0.02
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
    formStepArrowImage: {
        marginLeft: ScreenSize.sw * 0.02,
        marginRight: ScreenSize.sw * 0.02,
        width: ScreenSize.sw * 0.05,
        height: ScreenSize.sw * 0.05,
        resizeMode: 'contain'
    },
    titleText: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    age_height_container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    half_container: {
        flex: 1,
        margin: ScreenSize.sw * 0.01,
    },
    qus_level_text: {
        textAlign: 'center',
        marginTop: ScreenSize.sw * 0.12,
        fontSize: ScreenSize.sw * 0.04,
        color: 'black',
        fontWeight: 'bold',
    },
    input_box: {
        borderColor: '#323232',
        flexDirection: 'row',
        borderRadius: ScreenSize.sw * 0.01,
        borderWidth: ScreenSize.sw * 0.004,
        width: '100%',
        marginTop: ScreenSize.sw * 0.02,
        height: ScreenSize.sw * 0.12,
        justifyContent: "center",
        alignItems: "center",
    },
    des_input: {
        borderColor: '#323232',
        flexDirection: 'row',
        borderRadius: ScreenSize.sw * 0.01,
        borderWidth: ScreenSize.sw * 0.004,
        width: '100%',
        marginTop: ScreenSize.sw * 0.02,
        height: ScreenSize.sw * 0.3,
        justifyContent: "center",
        alignItems: "center",
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

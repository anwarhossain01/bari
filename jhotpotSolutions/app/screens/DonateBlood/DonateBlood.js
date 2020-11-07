import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import DatabaseOffline from '../../DatabaseOffline/DatabaseOffline';
import Lang from '../../common/Languages'
import ScreenSize from '../../common/ScreenSize';
import BloodGroupList from '../../components/BloodGroupList';
import DivisionsList from '../../components/DivisionsList';
import DistrictsList from '../../components/DistrictsList';
import PoliceStationList from '../../components/PoliceStationsList';
import RadioButton from '../../components/RadioButton';

export default class DonateBlood extends React.Component {
    constructor(props) {
        super();

        this.dbOffline = new DatabaseOffline();

        this.state = {
            allProductCategories: [],
            lang_type: 'EN',
            selectedBloodGroupId: 0,

            all_divisions: [],
            all_districts: [],
            all_policeStations: [],
            selectedDivisionId: 0,
            selectedDistrictId: 0,
            selectedPoliceStationId: 0,

            checked_male: false,
            checked_female: false,
            checked_other: false,

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

    updateselectedBloodGroupId = (blood_groups_id) => {
        this.setState({ selectedBloodGroupId: blood_groups_id });
    }


    //pass this function to radio button component for deselect all radio buttons
    make_gender_deselected = () => {
        this.setState({
            checked_male: false,
            checked_female: false,
            checked_other: false,
        })
    }

    //then pass each function with each radio button to make itself selected
    set_radio_button_male = (checked) => { this.setState({ checked_male: true }) }
    set_radio_button_female = (checked) => { this.setState({ checked_female: true }) }
    set_radio_button_other = (checked) => { this.setState({ checked_other: true }) }


    render() {
        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>

                    <Text style={styles.page_title_text}>{Lang[this.state.lang_type].willing_to_donate_blood}</Text>


                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].your_name}</Text>
                    <TextInput style={styles.input_box} />

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].gender}</Text>
                    <View style={styles.flex_wrap_container}>

                        <View style={{ flex: 1 }}>
                            <RadioButton

                                name={Lang[this.state.lang_type].male}
                                checked={this.state.checked_male}
                                set_radio_button={this.set_radio_button_male}
                                make_one_selected_radio={this.make_gender_deselected}

                            />
                        </View>

                        <View style={{ flex: 1 }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].female}
                                checked={this.state.checked_female}
                                set_radio_button={this.set_radio_button_female}
                                make_one_selected_radio={this.make_gender_deselected}
                            />
                        </View>

                        <View style={{ flex: 1 }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].other}
                                checked={this.state.checked_other}
                                set_radio_button={this.set_radio_button_other}
                                make_one_selected_radio={this.make_gender_deselected}
                            />
                        </View>

                    </View>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].blood_group}</Text>
                    {/*Select Division drop down*/}
                    <BloodGroupList updateBloodGroupState={this.updateselectedBloodGroupId} />
                    {/*Select Division drop down*/}

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].last_blood_donation_date}</Text>
                    <TextInput style={styles.input_box} />


                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].current_division_district_thana}</Text>

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

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].address}</Text>
                    <TextInput style={styles.input_box} />

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].mobile_number_to_contact}</Text>
                    <TextInput style={styles.input_box} />
                    <Text style={styles.input_suggest_text}>{Lang[this.state.lang_type].more_than_one_mobile_numner}</Text>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].description}</Text>
                    <TextInput style={styles.description_input} multiline />


                    <TouchableHighlight style={styles.post_button_container} onPress={() => this.props.navigation.navigate('Main')}>
                        <Text style={styles.post_button_text}>
                            {Lang[this.state.lang_type].final_post}
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
    qus_level_text: {
        textAlign: 'center',
        marginTop: ScreenSize.sw * 0.05,
        fontSize: ScreenSize.sw * 0.038,
        color: '#22546B',
    },
    input_box: {
        borderColor: '#24536B',
        flexDirection: 'row',
        borderRadius: ScreenSize.sw * 0.01,
        borderWidth: ScreenSize.sw * 0.003,
        width: '100%',
        marginTop: ScreenSize.sw * 0.02,
        height: ScreenSize.sw * 0.12,
        justifyContent: "center",
        alignItems: "center",
    },
    flex_wrap_container: {
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    input_suggest_text: {
        color: 'gray',
        fontSize: ScreenSize.sw * 0.03,
        margin: ScreenSize.sw * 0.01,
    },
    description_input: {
        borderColor: '#24536B',
        flexDirection: 'row',
        borderRadius: ScreenSize.sw * 0.01,
        borderWidth: ScreenSize.sw * 0.003,
        width: '100%',
        marginTop: ScreenSize.sw * 0.02,
        height: ScreenSize.sw * 0.35,
        justifyContent: "center",
        alignItems: "center",
    },
    post_button_container: {
        marginTop: ScreenSize.sw * 0.15,
        alignSelf: 'center',
        width: '100%',
        padding: ScreenSize.sw * 0.02,
        backgroundColor: '#22546B',
        marginBottom: ScreenSize.sw * 0.02,
    },
    post_button_text: {
        textAlign: 'center',
        color: 'white',
        fontSize: ScreenSize.sw * 0.04,
    }

});

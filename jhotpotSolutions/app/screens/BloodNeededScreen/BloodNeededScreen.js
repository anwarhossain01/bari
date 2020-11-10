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

export default class BloodNeededScreen extends React.Component {
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
            loading: true,
            blood_bag_count: 1,
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

    blood_count = (no) => {
        if (this.state.blood_bag_count + no > 0) {
            this.setState({
                blood_bag_count: this.state.blood_bag_count + no
            })
        }
    }


    render() {
        return (

            <SafeAreaView style={styles.main_container}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>

                    <Text style={styles.page_title_text}>{Lang[this.state.lang_type].blood_needed}</Text>


                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].blood_group.toUpperCase()}</Text>
                    {/*Select Division drop down*/}
                    <BloodGroupList updateBloodGroupState={this.updateselectedBloodGroupId} />
                    {/*Select Division drop down*/}

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].date_of_blood_donation.toUpperCase()}</Text>
                    <TextInput style={styles.input_box} />

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].how_many_bags_of_blood_are_needed.toUpperCase()}</Text>
                    <View style={styles.blood_bag_count_container}>

                        <TouchableOpacity onPress={() => this.blood_count(+1)}>
                            <Image source={require('../../assets/icons/add.png')}
                                style={styles.plus_minus_icon}
                            />
                        </TouchableOpacity>

                        <Text style={styles.blood_bag_count_text}>{this.state.blood_bag_count}</Text>

                        <TouchableOpacity onPress={() => this.blood_count(-1)}>
                            <Image source={require('../../assets/icons/minus.png')}
                                style={styles.plus_minus_icon}
                            />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].current_division_district_thana.toUpperCase()}</Text>

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

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].address.toUpperCase()}</Text>
                    <TextInput style={styles.input_box} />

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].mobile_number_to_contact.toUpperCase()}</Text>
                    <TextInput style={styles.input_box} />
                    <Text style={styles.input_suggest_text}>{Lang[this.state.lang_type].more_than_one_mobile_numner}</Text>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].description.toUpperCase()}</Text>
                    <TextInput style={styles.description_input} multiline />


                    <TouchableHighlight style={styles.post_button_container} onPress={() => this.props.navigation.navigate('NewAd')}>
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
    main_container: {
        flex: 1,
        backgroundColor: 'white',
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
    subTitleText: {
        fontSize: ScreenSize.sw * 0.027,
        fontWeight: 'bold',
        textAlign: 'center'
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
    blood_bag_count_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: ScreenSize.sw * 0.04,
    },
    plus_minus_icon: {
        width: ScreenSize.sw * 0.055,
        height: ScreenSize.sw * 0.055,
        resizeMode: 'contain'
    },
    blood_bag_count_text: {
        fontSize: ScreenSize.sw * 0.043,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginLeft: ScreenSize.sw * 0.1,
        marginRight: ScreenSize.sw * 0.1,
    },
    input_suggest_text: {
        color: 'gray',
        fontSize: ScreenSize.sw * 0.03,
        margin: ScreenSize.sw * 0.01,
    },
    description_input: {
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

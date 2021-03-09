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
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatabaseOffline from '../../DatabaseOffline/DatabaseOffline';
import Lang from '../../common/Languages'
import ScreenSize from '../../common/ScreenSize';
import RadioButton from '../../components/RadioButton'
import Checkbox from '../../components/Checkbox'
import DivisionsList from '../../components/DivisionsList';
import DistrictsList from '../../components/DistrictsList';
import PoliceStationList from '../../components/PoliceStationsList';
import Global from '../../common/Global';
import Spinner from '../../common/Spinner';
import CustomCalender from '../../common/CustomCalender';

export default class WantToTeach extends React.Component {
    constructor(props) {
        super();

        this.dbOffline = new DatabaseOffline();
        this.state = {
            lang_type: Global.LANGUAGE_NAME,
            your_name: '',
            interested_subjects: '',
            educational_qualifications: '',
            your_mobile_no: '',

            interested_mediums: '',

            all_divisions: [],
            all_districts: [],
            all_policeStations: [],
            selectedDivisionId: 0,
            selectedDistrictId: 0,
            selectedPoliceStationId: 0,
            checked_male: false,
            checked_female: false,

            birth_year: '',
            birth_month: '',
            birth_month_no: '',
            birth_day: '',
            YearModalVisible: false,
            MonthModalVisible: false,
            DayModalVisible: false,

            interested_classes: '',


            loading: false,
        }
    }


    async componentDidMount() {

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

    setYear = (year) => {
        this.setState({ birth_year: year });
        this.setState({ birth_day: '' });
    }
    setMonth = (month_no, month) => {
        this.setState({ birth_month: month });
        this.setState({ birth_day: '' });
        this.setState({ birth_month_no: month_no });
    }
    setDay = (day) => {
        this.setState({ birth_day: day });
    }

    //pass this function to radio button component for deselect all radio buttons
    make_gender_deselected = () => {
        this.setState({
            checked_male: false,
            checked_female: false,
            checked_both: false,
        })
    }

    //then pass each function with each radio button to make itself selected
    set_radio_button_male = (checked) => {
        this.setState({ checked_male: checked });
    }
    set_radio_button_female = (checked) => {
        this.setState({ checked_female: checked });
    }


    submit_your_post = () => {
        let y_name_exist = this.state.your_name != '' ? true : false;
        let male = this.state.checked_male ? 1 : 0;
        let female = this.state.checked_female ? 2 : 0;
        let male_female_exist = (male == 1 ? true : (female == 1 ? true : false));
        let birthday_exist = (this.state.birth_year && this.state.birth_month_no && this.state.birth_day ? true : false);
        let birthday = this.state.birth_year + '-' + this.state.month_no + '-' + this.state.birth_day;
        let interested_mediums_exist = this.state.interested_mediums != '' ? true : false;
        let interested_classes_exist = this.state.interested_classes != '' ? true : false;
        let educational_qualifications_exist = this.state.educational_qualifications != '' ? true : false;
        let interested_subjects_exist = this.state.interested_subjects != '' ? true : false;
        let division_exist = this.state.selectedDivisionId != 0 ? true : false;
        let district_exist = this.state.selectedDistrictId != 0 ? true : false;
        let sub_district_exist = this.state.selectedPoliceStationId != 0 ? true : false;
        let y_mobile_no_exist = this.state.your_mobile_no != '' ? true : false;

        if (y_name_exist && male_female_exist && birthday_exist && interested_mediums_exist
            && interested_classes_exist && educational_qualifications_exist && interested_subjects_exist
            && division_exist && district_exist && sub_district_exist && y_mobile_no_exist) {

            alert("SUCCESS");

        } else {
            alert("FAILED")
        }

        //this.props.navigation.navigate('NewAd');
    }


    render() {
        return (

            <SafeAreaView style={styles.main_container}>

                {
                    this.state.loading ?
                        <Spinner />
                        :
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin} >

                            <Text style={styles.page_title_text}>{Lang[this.state.lang_type].Want_to_teach}</Text>

                            <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].your_name.toUpperCase()}</Text>
                            <TextInput style={styles.input_box} value={this.state.your_name} onChangeText={(your_name) => this.setState({ your_name })} />

                            <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].gender.toUpperCase()}</Text>
                            <View style={styles.flex_wrap_container}>

                                <View style={{ width: '50%' }}>
                                    <RadioButton

                                        name={Lang[this.state.lang_type].male}
                                        checked={this.state.checked_male}
                                        set_radio_button={this.set_radio_button_male}
                                        make_one_selected_radio={this.make_gender_deselected}

                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <RadioButton
                                        name={Lang[this.state.lang_type].female}
                                        checked={this.state.checked_female}
                                        set_radio_button={this.set_radio_button_female}
                                        make_one_selected_radio={this.make_gender_deselected}
                                    />
                                </View>

                            </View>

                            <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].your_date_of_birth.toUpperCase()}</Text>

                            <CustomCalender
                                setYear={this.setYear}
                                setMonth={this.setMonth}
                                setDay={this.setDay}
                                year={this.state.birth_year}
                                month={this.state.birth_month}
                                month_no={this.state.birth_month_no}
                                day={this.state.birth_day}

                            />


                            <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].medium.toUpperCase()}</Text>
                            <TextInput style={styles.input_box} value={this.state.interested_mediums} onChangeText={(interested_mediums) => this.setState({ interested_mediums })} />
                            <Text style={styles.input_suggest_text}>{Lang[this.state.lang_type].medium_name}</Text>


                            <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].educational_qualifications.toUpperCase()}</Text>
                            <TextInput style={styles.textarea_input_box} multiline value={this.state.educational_qualifications} onChangeText={(educational_qualifications) => this.setState({ educational_qualifications })} />

                            <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].which_class_of_students_do_you_want_to_teach}</Text>
                            <TextInput style={styles.textarea_input_box} multiline value={this.state.interested_classes} onChangeText={(interested_classes) => this.setState({ interested_classes })} />


                            <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].interested_subject_name.toUpperCase()}</Text>
                            <TextInput style={styles.input_box} value={this.state.interested_subjects} onChangeText={(interested_subjects) => this.setState({ interested_subjects })} />
                            <Text style={styles.input_suggest_text}>{Lang[this.state.lang_type].subjects_name}</Text>

                            <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].where_willing_to_teach.toUpperCase()}</Text>

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

                            <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].mobile_number_to_contact.toUpperCase()}</Text>
                            <TextInput style={styles.input_box} keyboardType="phone-pad" value={this.state.your_mobile_no} onChangeText={(your_mobile_no) => this.setState({ your_mobile_no })} />
                            <Text style={styles.input_suggest_text}>{Lang[this.state.lang_type].more_than_one_mobile_numner}</Text>


                            <TouchableHighlight style={styles.post_button_container} onPress={() => this.submit_your_post()}>
                                <Text style={styles.post_button_text}>
                                    {Lang[this.state.lang_type].final_post}
                                </Text>
                            </TouchableHighlight>

                        </ScrollView>

                }

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
        paddingLeft: ScreenSize.sw * 0.02,
        fontSize: ScreenSize.sw * 0.035,
        marginTop: ScreenSize.sw * 0.02,
        height: ScreenSize.sw * 0.12,
        justifyContent: "center",
        alignItems: "center",
    },
    birth_date_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    birth_date_input_box: {
        borderColor: '#323232',
        flexDirection: 'row',
        color: '#474747',
        borderRadius: ScreenSize.sw * 0.01,
        borderWidth: ScreenSize.sw * 0.004,
        width: '33%',
        paddingLeft: ScreenSize.sw * 0.02,
        fontSize: ScreenSize.sw * 0.035,
        marginTop: ScreenSize.sw * 0.02,
        height: ScreenSize.sw * 0.12,
        textAlignVertical: 'center'
    },
    input_suggest_text: {
        color: 'gray',
        fontSize: ScreenSize.sw * 0.03,
        margin: ScreenSize.sw * 0.01,
    },
    product_condition_text: {
        fontSize: ScreenSize.sw * 0.04,
    },
    flex_wrap_container: {
        flexWrap: 'wrap'
    },
    textarea_input_box: {
        borderColor: '#323232',
        flexDirection: 'row',
        borderRadius: ScreenSize.sw * 0.01,
        borderWidth: ScreenSize.sw * 0.004,
        width: '100%',
        fontSize: ScreenSize.sw * 0.035,
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

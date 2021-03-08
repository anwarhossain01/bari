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
            // checked_english: false,
            // checked_bangla: false,
            // checked_arabic: false,
            // checked_both: false,
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

            // checked_one: false,
            // checked_two: false,
            // checked_three: false,
            // checked_four: false,
            // checked_five: false,
            // checked_six: false,
            // checked_seven: false,
            // checked_eight: false,
            // checked_nine: false,
            // checked_ten: false,
            // checked_eleven: false,
            // checked_twelve: false,
            // checked_others: false,

            loading: false,
        }
    }


    async componentDidMount() {
        this.setState({ loading: true });

        let your_name = await AsyncStorage.getItem('teach_your_name') ? await AsyncStorage.getItem('teach_your_name') : '';
        let gender = await AsyncStorage.getItem('teach_gender') ? await AsyncStorage.getItem('teach_gender') : 0;
        let birth_year = await AsyncStorage.getItem('teach_birth_year') ? await AsyncStorage.getItem('teach_birth_year') : '';
        let birth_month = await AsyncStorage.getItem('teach_birth_month') ? await AsyncStorage.getItem('teach_birth_month') : '';
        let birth_month_no = await AsyncStorage.getItem('teach_birth_month_no') ? await AsyncStorage.getItem('teach_birth_month_no') : '';
        let birth_day = await AsyncStorage.getItem('teach_birth_day') ? await AsyncStorage.getItem('teach_birth_day') : '';
        let interested_mediums = await AsyncStorage.getItem('teach_interested_mediums') ? await AsyncStorage.getItem('teach_interested_mediums') : '';


        this.setState({ your_name });
        this.setState({ checked_male: gender == 1 ? true : false });
        this.setState({ checked_female: gender == 2 ? true : false });
        this.setState({ birth_year });
        this.setState({ birth_month });
        this.setState({ birth_month_no });
        this.setState({ birth_day });
        this.setState({ interested_mediums });



        this.setState({ loading: false });
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

    setYear=(year)=>{

        AsyncStorage.setItem('teach_birth_year', String(year)).then(
            AsyncStorage.removeItem('teach_birth_day').then(
                this.setState({ birth_year: year }),
                this.setState({ birth_day: '' }),
            )
        )

    }
    setMonth = (month_no, month) => {
        AsyncStorage.setItem('teach_birth_month', String(month)).then(
            this.setState({ birth_month: month }),
            this.setState({ birth_day: '' }),
            AsyncStorage.setItem('teach_birth_month_no', String(month_no)).then(
                AsyncStorage.removeItem('teach_birth_day').then(this.setState({ birth_month_no: month_no }))
            )
        );
    }
    setDay = (day) => {
        AsyncStorage.setItem('teach_birth_day', String(day)).then(
            this.setState({ birth_day: day })
        );

    }


    //pass this function to radio button component for deselect all radio buttons

    // make_medium_deselected_radio = () => {
    //     this.setState({
    //         checked_english: false,
    //         checked_bangla: false,
    //         checked_arabic: false,
    //         checked_both: false,
    //     })
    // }

    //then pass each function with each radio button to make itself selected

    // set_radio_button_english = (checked) => { this.setState({ checked_english: checked }) }
    // set_radio_button_bangla = (checked) => { this.setState({ checked_bangla: checked }) }
    // set_radio_button_arabic = (checked) => { this.setState({ checked_arabic: checked }) }
    // set_radio_button_both = (checked) => { this.setState({ checked_both: checked }) }


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
        AsyncStorage.setItem('teach_gender', '1').then(this.setState({ checked_male: checked }));
    }
    set_radio_button_female = (checked) => {
        AsyncStorage.setItem('teach_gender', '2').then(this.setState({ checked_female: checked }));
    }

    //then pass each function with each radio button to make itself selected

    // set_checkbox_one = (checked) => { this.setState({ checked_one: checked }) }
    // set_checkbox_two = (checked) => { this.setState({ checked_two: checked }) }
    // set_checkbox_three = (checked) => { this.setState({ checked_three: checked }) }
    // set_checkbox_four = (checked) => { this.setState({ checked_four: checked }) }
    // set_checkbox_five = (checked) => { this.setState({ checked_five: checked }) }
    // set_checkbox_six = (checked) => { this.setState({ checked_six: checked }) }
    // set_checkbox_seven = (checked) => { this.setState({ checked_seven: checked }) }
    // set_checkbox_eight = (checked) => { this.setState({ checked_eight: checked }) }
    // set_checkbox_nine = (checked) => { this.setState({ checked_nine: checked }) }
    // set_checkbox_ten = (checked) => { this.setState({ checked_ten: checked }) }
    // set_checkbox_eleven = (checked) => { this.setState({ checked_eleven: checked }) }
    // set_checkbox_twelve = (checked) => { this.setState({ checked_twelve: checked }) }
    // set_checkbox_others = (checked) => { this.setState({ checked_others: checked }) }

    set_name = (your_name) => {
        AsyncStorage.setItem('teach_your_name', String(your_name)).then(this.setState({ your_name }));
    }

    set_interested_mediums(interested_mediums){
        AsyncStorage.setItem('teach_interested_mediums', String(interested_mediums)).then(this.setState({ interested_mediums }));
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
                            <TextInput style={styles.input_box} value={this.state.your_name} onChangeText={(your_name) => this.set_name(your_name)} />

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
                            <TextInput style={styles.input_box} value={this.state.interested_mediums} onChangeText={(interested_mediums) => this.set_interested_mediums(interested_mediums)} />
                            <Text style={styles.input_suggest_text}>{Lang[this.state.lang_type].medium_name}</Text>

                            {/* <View style={styles.flex_wrap_container}>

                                <View style={{ width: '50%' }}>
                                    <RadioButton
                                        name={Lang[this.state.lang_type].english}
                                        checked={this.state.checked_english}
                                        set_radio_button={this.set_radio_button_english}
                                        make_one_selected_radio={this.make_medium_deselected_radio}

                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <RadioButton
                                        name={Lang[this.state.lang_type].bangla}
                                        checked={this.state.checked_bangla}
                                        set_radio_button={this.set_radio_button_bangla}
                                        make_one_selected_radio={this.make_medium_deselected_radio}
                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <RadioButton
                                        name={Lang[this.state.lang_type].both_en_bn}
                                        checked={this.state.checked_both}
                                        set_radio_button={this.set_radio_button_both}
                                        make_one_selected_radio={this.make_medium_deselected_radio}
                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <RadioButton
                                        name={Lang[this.state.lang_type].arabic}
                                        checked={this.state.checked_arabic}
                                        set_radio_button={this.set_radio_button_arabic}
                                        make_one_selected_radio={this.make_medium_deselected_radio}
                                    />
                                </View>


                            </View> */}

                            <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].educational_qualifications.toUpperCase()}</Text>
                            <TextInput style={styles.textarea_input_box} multiline value={this.state.educational_qualifications} onChangeText={(educational_qualifications) => this.setState({ educational_qualifications })} />

                            <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].which_class_of_students_do_you_want_to_teach}</Text>
                            <TextInput style={styles.textarea_input_box} multiline value={this.state.interested_classes} onChangeText={(interested_classes) => this.setState({ interested_classes })} />

                            {/* <View style={[styles.flex_wrap_container, { flexDirection: 'row' }]}> 

                                <View style={{ width: '50%' }}>
                                    <Checkbox
                                        name={Lang[this.state.lang_type].one_class}
                                        checked={this.state.checked_one}
                                        set_checkbox={this.set_checkbox_one}
                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <Checkbox
                                        name={Lang[this.state.lang_type].two_class}
                                        checked={this.state.checked_two}
                                        set_checkbox={this.set_checkbox_two}
                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <Checkbox
                                        name={Lang[this.state.lang_type].three_class}
                                        checked={this.state.checked_three}
                                        set_checkbox={this.set_checkbox_three}
                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <Checkbox
                                        name={Lang[this.state.lang_type].four_class}
                                        checked={this.state.checked_four}
                                        set_checkbox={this.set_checkbox_four}
                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <Checkbox
                                        name={Lang[this.state.lang_type].five_class}
                                        checked={this.state.checked_five}
                                        set_checkbox={this.set_checkbox_five}
                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <Checkbox
                                        name={Lang[this.state.lang_type].six_class}
                                        checked={this.state.checked_six}
                                        set_checkbox={this.set_checkbox_six}
                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <Checkbox
                                        name={Lang[this.state.lang_type].seven_class}
                                        checked={this.state.checked_seven}
                                        set_checkbox={this.set_checkbox_seven}
                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <Checkbox
                                        name={Lang[this.state.lang_type].eight_class}
                                        checked={this.state.checked_eight}
                                        set_checkbox={this.set_checkbox_eight}
                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <Checkbox
                                        name={Lang[this.state.lang_type].nine_class}
                                        checked={this.state.checked_nine}
                                        set_checkbox={this.set_checkbox_nine}
                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <Checkbox
                                        name={Lang[this.state.lang_type].ten_class}
                                        checked={this.state.checked_ten}
                                        set_checkbox={this.set_checkbox_ten}
                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <Checkbox
                                        name={Lang[this.state.lang_type].eleven_class}
                                        checked={this.state.checked_eleven}
                                        set_checkbox={this.set_checkbox_eleven}
                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <Checkbox
                                        name={Lang[this.state.lang_type].twelve_class}
                                        checked={this.state.checked_twelve}
                                        set_checkbox={this.set_checkbox_twelve}
                                    />
                                </View>

                                <View style={{ width: '50%' }}>
                                    <Checkbox
                                        name={Lang[this.state.lang_type].others_class}
                                        checked={this.state.checked_others}
                                        set_checkbox={this.set_checkbox_others}
                                    />
                                </View>

                            </View>


                            {
                                this.state.checked_others ?
                                    <View>
                                        <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].you_can_write_avobe_twelve_class_subject.toUpperCase()}</Text>
                                        <TextInput style={styles.input_box} />
                                    </View>
                                    :
                                    <View />
                            }

*/}
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

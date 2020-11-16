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
import RadioButton from '../../components/RadioButton'
import Checkbox from '../../components/Checkbox'
import DivisionsList from '../../components/DivisionsList';
import DistrictsList from '../../components/DistrictsList';
import PoliceStationList from '../../components/PoliceStationsList';

export default class WantToTeach extends React.Component {
    constructor(props) {
        super();

        this.dbOffline = new DatabaseOffline();
        this.state = {
            lang_type: 'BD',
            checked_english: false,
            checked_bangla: false,
            checked_arabic: false,
            checked_both: false,
            all_divisions: [],
            all_districts: [],
            all_policeStations: [],
            selectedDivisionId: 0,
            selectedDistrictId: 0,
            selectedPoliceStationId: 0,
            checked_male: false,
            checked_female: false,

            checked_one: false,
            checked_two: false,
            checked_three: false,
            checked_four: false,
            checked_five: false,
            checked_six: false,
            checked_seven: false,
            checked_eight: false,
            checked_nine: false,
            checked_ten: false,
            checked_eleven: false,
            checked_twelve: false,
            checked_others: false,

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


    //pass this function to radio button component for deselect all radio buttons
    make_medium_deselected_radio = () => {
        this.setState({
            checked_english: false,
            checked_bangla: false,
            checked_arabic: false,
            checked_both: false,
        })
    }

    //then pass each function with each radio button to make itself selected
    set_radio_button_english = (checked) => { this.setState({ checked_english: checked }) }
    set_radio_button_bangla = (checked) => { this.setState({ checked_bangla: checked }) }
    set_radio_button_arabic = (checked) => { this.setState({ checked_arabic: checked }) }
    set_radio_button_both = (checked) => { this.setState({ checked_both: checked }) }


    //pass this function to radio button component for deselect all radio buttons
    make_gender_deselected = () => {
        this.setState({
            checked_male: false,
            checked_female: false,
            checked_both: false,
        })
    }

    //then pass each function with each radio button to make itself selected
    set_radio_button_male = (checked) => { this.setState({ checked_male: checked }) }
    set_radio_button_female = (checked) => { this.setState({ checked_female: checked }) }


    //then pass each function with each radio button to make itself selected
    set_checkbox_one = (checked) => { this.setState({ checked_one: checked }) }
    set_checkbox_two = (checked) => { this.setState({ checked_two: checked }) }
    set_checkbox_three = (checked) => { this.setState({ checked_three: checked }) }
    set_checkbox_four = (checked) => { this.setState({ checked_four: checked }) }
    set_checkbox_five = (checked) => { this.setState({ checked_five: checked }) }
    set_checkbox_six = (checked) => { this.setState({ checked_six: checked }) }
    set_checkbox_seven = (checked) => { this.setState({ checked_seven: checked }) }
    set_checkbox_eight = (checked) => { this.setState({ checked_eight: checked }) }
    set_checkbox_nine = (checked) => { this.setState({ checked_nine: checked }) }
    set_checkbox_ten = (checked) => { this.setState({ checked_ten: checked }) }
    set_checkbox_eleven = (checked) => { this.setState({ checked_eleven: checked }) }
    set_checkbox_twelve = (checked) => { this.setState({ checked_twelve: checked }) }
    set_checkbox_others = (checked) => { this.setState({ checked_others: checked }) }


    render() {
        return (

            <SafeAreaView style={styles.main_container}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>

                    <Text style={styles.page_title_text}>{Lang[this.state.lang_type].Want_to_teach}</Text>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].your_name.toUpperCase()}</Text>
                    <TextInput style={styles.input_box} />

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
                    <TextInput style={styles.input_box} />

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].medium.toUpperCase()}</Text>

                    <View style={styles.flex_wrap_container}>

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


                    </View>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].educational_qualifications.toUpperCase()}</Text>
                    <TextInput style={styles.textarea_input_box} multiline />

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].which_class_of_students_do_you_want_to_teach}</Text>
                    <View style={[styles.flex_wrap_container,{flexDirection: 'row'}]}>

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



                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].interested_subject_name.toUpperCase()}</Text>
                    <TextInput style={styles.input_box} />
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
                    <TextInput style={styles.input_box} />
                    <Text style={styles.input_suggest_text}>{Lang[this.state.lang_type].more_than_one_mobile_numner}</Text>


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

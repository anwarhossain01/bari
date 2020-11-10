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

import Lang from '../../common/Languages'
import ScreenSize from '../../common/ScreenSize';
import RadioButton from '../../components/RadioButton'

export default class JobRequirements extends React.Component {
    constructor(props) {
        super();

        this.state = {
            lang_type: 'EN',
            checked_male: false,
            checked_female: false,
            checked_both: false,
            checked_salary_negotiable: false,
            checked_salary_fixed: false,
            checked_salary_range: false,
        }
    }

    async componentDidMount() {

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
    set_radio_button_male = (checked) => { this.setState({ checked_male: checked }) }
    set_radio_button_female = (checked) => { this.setState({ checked_female: checked }) }
    set_radio_button_both = (checked) => { this.setState({ checked_both: checked }) }

    //pass this function to radio button component for deselect all radio buttons
    make_salary_deselected = () => {
        this.setState({
            checked_salary_negotiable: false,
            checked_salary_fixed: false,
            checked_salary_range: false,
        })
    }

    //then pass each function with each radio button to make itself selected
    set_radio_button_salary_negotiable = (checked) => { this.setState({ checked_salary_negotiable: checked }) }
    set_radio_button_salary_fixed = (checked) => { this.setState({ checked_salary_fixed: checked }) }
    set_radio_button_salary_range = (checked) => { this.setState({ checked_salary_range: checked }) }


    render() {
        return (

            <SafeAreaView style={styles.main_container}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>

                    <Text style={styles.page_title_text}>{Lang[this.state.lang_type].recruitment_advertisement}</Text>

                    <View style={styles.step_indicator_container}>

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].description} </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")} 
                        />

                        <View style={styles.formSelectedStep}>
                            <Text style={styles.formStepText}> {Lang[this.state.lang_type].job_requirements} </Text>
                        </View>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].contact_info}  </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].post}  </Text>

                    </View>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].educational_qualifications.toUpperCase()}</Text>
                    <TextInput style={styles.input_field} />


                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].gender.toUpperCase()}</Text>
                    <View style={styles.radio_buttons_container}>

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

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].both}
                                checked={this.state.checked_both}
                                set_radio_button={this.set_radio_button_both}
                                make_one_selected_radio={this.make_gender_deselected}
                            />
                        </View>


                    </View>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].salary.toUpperCase()}</Text>
                    <View style={styles.radio_buttons_container}>

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].negotiable}
                                checked={this.state.checked_salary_negotiable}
                                set_radio_button={this.set_radio_button_salary_negotiable}
                                make_one_selected_radio={this.make_salary_deselected}

                            />
                        </View>

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].fixed}
                                checked={this.state.checked_salary_fixed}
                                set_radio_button={this.set_radio_button_salary_fixed}
                                make_one_selected_radio={this.make_salary_deselected}
                            />
                        </View>

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].range}
                                checked={this.state.checked_salary_range}
                                set_radio_button={this.set_radio_button_salary_range}
                                make_one_selected_radio={this.make_salary_deselected}
                            />
                        </View>


                    </View>

                    {
                        this.state.checked_salary_fixed ?
                            <View>
                                <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].money_amount.toUpperCase()}</Text>
                                <View style={{ flexDirection: 'row',justifyContent: 'center'}}>
                                    <TextInput style={[styles.input_field,{width: '50%'}]} />
                                    <Text style={styles.taka_text}>৳</Text>
                                </View>
                            </View>
                            :
                            <View />
                    }

                    {
                        this.state.checked_salary_range ?
                            <View>
                                <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].money_amount.toUpperCase()}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <TextInput style={[styles.input_field, { width: '40%' }]} />
                                    <Text style={styles.to_text}>{Lang[this.state.lang_type].to}</Text>
                                    <TextInput style={[styles.input_field, { width: '40%' }]} />
                                    <Text style={styles.taka_text}>৳</Text>
                                </View>
                            </View>
                            :
                            <View />
                    }

                    <TouchableHighlight style={styles.next_button_container} onPress={() => this.props.navigation.navigate('JobCommunication')}>
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
    input_field: {
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
    radio_buttons_container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    to_text: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: ScreenSize.sw * 0.04,
        marginLeft: ScreenSize.sw * 0.03,
        marginRight: ScreenSize.sw * 0.03,
    },
    taka_text: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: ScreenSize.sw * 0.06,
        marginLeft: ScreenSize.sw * 0.01,
    },
    mobile_no_text_input: {
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

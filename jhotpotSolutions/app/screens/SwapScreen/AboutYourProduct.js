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
import ProductCategoryList from '../../components/ProductCategoryList';
import RadioButton from '../../components/RadioButton'

export default class AboutYourProduct extends React.Component {
    constructor(props) {
        super();

        this.dbOffline = new DatabaseOffline();
        this.state = {
            allProductCategories: [],
            lang_type: 'BD',
            checked_new: false,
            checked_exc_cond: false,
            checked_good_cond: false,
            checked_accpt_cond: false,
            checked_damg: false,
        }
    }

    async componentDidMount() {

    }

    set_product_category_id = (product_category_id) => {

        // console.warn(product_category_id)
    }

    //pass this function to radio button component for deselect all radio buttons
    make_one_selected_radio = () => {
        this.setState({
            checked_new: false,
            checked_exc_cond: false,
            checked_good_cond: false,
            checked_accpt_cond: false,
            checked_damg: false,
        })
    }

    //then pass each function with each radio button to make itself selected
    set_radio_button_new = (checked) => { this.setState({ checked_new: checked }) }
    set_radio_button_exce_cond = (checked) => { this.setState({ checked_exc_cond: checked }) }
    set_radio_button_good_cond = (checked) => { this.setState({ checked_good_cond: checked }) }
    set_radio_button_accpt_cond = (checked) => { this.setState({ checked_accpt_cond: checked }) }
    set_radio_button_damage = (checked) => { this.setState({ checked_damg: checked }) }

    render() {
        return (

            <SafeAreaView style={styles.main_container}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>

                    <Text style={styles.page_title_text}>{Lang[this.state.lang_type].swap_of_products}</Text>

                    <View style={styles.step_indicator_container}>

                        <View style={styles.formSelectedStep}>
                            <Text style={styles.formStepText}> {Lang[this.state.lang_type].description} </Text>
                        </View>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />
                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].photos} </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].swap_product} </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />
                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].contact_info} </Text>


                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />
                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].post}  </Text>


                    </View>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].what_category_of_products_do_you_want_to_exchange.toUpperCase()}</Text>

                    <ProductCategoryList update_product_category_id={this.set_product_category_id} />

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].name_of_the_products.toUpperCase()}</Text>

                    <TextInput style={styles.input_box} />
                    <Text style={styles.input_suggest_text}>{Lang[this.state.lang_type].if_you_have_more_than_one_product}</Text>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].condition_of_the_products.toUpperCase()}</Text>

                    <View style={styles.radio_buttons_container}>

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].new}
                                checked={this.state.checked_new}
                                set_radio_button={this.set_radio_button_new}
                                make_one_selected_radio={this.make_one_selected_radio}

                            />
                        </View>

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].used_excellent_condition}
                                checked={this.state.checked_exc_cond}
                                set_radio_button={this.set_radio_button_exce_cond}
                                make_one_selected_radio={this.make_one_selected_radio}
                            />
                        </View>

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].used_good_condition}
                                checked={this.state.checked_good_cond}
                                set_radio_button={this.set_radio_button_good_cond}
                                make_one_selected_radio={this.make_one_selected_radio}
                            />
                        </View>

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].used_acceptable}
                                checked={this.state.checked_accpt_cond}
                                set_radio_button={this.set_radio_button_accpt_cond}
                                make_one_selected_radio={this.make_one_selected_radio}
                            />
                        </View>

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].damaged}
                                checked={this.state.checked_damg}
                                set_radio_button={this.set_radio_button_damage}
                                make_one_selected_radio={this.make_one_selected_radio}
                            />
                        </View>
                    </View>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].description_of_the_products.toUpperCase()}</Text>
                    
                    <TextInput style={styles.products_des_input} multiline />

                    <TouchableHighlight style={styles.next_button_container} onPress={() => this.props.navigation.navigate('ProductPhotos')}>
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
    radio_buttons_container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    products_des_input: {
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

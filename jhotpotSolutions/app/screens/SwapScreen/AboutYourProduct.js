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
import ProductCategoryList from '../../components/ProductCategoryList';
import RadioButton from '../../components/RadioButton'
import Global from '../../common/Global'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductConditionsList from '../../components/ProductConditionsList';
import Spinner from '../../common/Spinner';

export default class AboutYourProduct extends React.Component {
    constructor(props) {
        super();

        this.state = {
            allProductCategories: [],
            lang_type: Global.LANGUAGE_NAME,
            checked_new: false,
            checked_exc_cond: false,
            checked_good_cond: false,
            checked_accpt_cond: false,
            checked_damg: false,

            exchange_product_catg_id: '',
            swap_products_name: '',
            swap_product_cond_id: '',
            swap_product_details: '',

            loading: false,
        }
    }

    async componentDidMount() {
        this.setState({ loading: true });

        await AsyncStorage.removeItem('swap_exchange_product_catg_id');
        await AsyncStorage.removeItem('swap_products_name');
        await AsyncStorage.removeItem('swap_product_cond_id');
        await AsyncStorage.removeItem('swap_product_details');

        this.setState({ loading: false });


    }

    set_product_category_id = async (exchange_product_catg_id) => {
        this.setState({ exchange_product_catg_id });
        await AsyncStorage.setItem('swap_exchange_product_catg_id', String(exchange_product_catg_id));
    }

    setProductsNames = async (swap_products_name) => {
        this.setState({ swap_products_name });
        await AsyncStorage.setItem('swap_products_name', String(swap_products_name));
    }

    set_product_condition_id = async (swap_product_cond_id) => {
        this.setState({ swap_product_cond_id });
        await AsyncStorage.setItem('swap_product_cond_id', String(swap_product_cond_id));
    }

    set_swap_product_details = async (swap_product_details) => {
        this.setState({ swap_product_details });
        await AsyncStorage.setItem('swap_product_details', String(swap_product_details));
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

    // set_radio_button_new = (checked) => { this.setState({ checked_new: checked }) }
    // set_radio_button_exce_cond = (checked) => { this.setState({ checked_exc_cond: checked }) }
    // set_radio_button_good_cond = (checked) => { this.setState({ checked_good_cond: checked }) }
    // set_radio_button_accpt_cond = (checked) => { this.setState({ checked_accpt_cond: checked }) }
    // set_radio_button_damage = (checked) => { this.setState({ checked_damg: checked }) }

    step_one_post = () => {
        let exchange_product_catg_id = this.state.exchange_product_catg_id != '' ? this.state.exchange_product_catg_id : '';
        let swap_products_name = this.state.swap_products_name ? this.state.swap_products_name : '';
        let swap_product_cond_id = this.state.swap_product_cond_id ? this.state.swap_product_cond_id : '';
        let swap_product_details = this.state.swap_product_details != '' ? this.state.swap_product_details : '';

        if (exchange_product_catg_id && swap_products_name && swap_product_cond_id && swap_product_details) {
            this.props.navigation.navigate('ProductPhotos')
        } else {
            alert("FAILED")
        }

    }

    render() {
        return (

            <SafeAreaView style={styles.main_container}>

                {this.state.loading ?
                    <Spinner />
                    :

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

                        <TextInput style={styles.input_box} value={this.state.swap_products_name} onChangeText={(swap_products_name) => this.setProductsNames(swap_products_name)} />
                        <Text style={styles.input_suggest_text}>{Lang[this.state.lang_type].if_you_have_more_than_one_product}</Text>

                        <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].condition_of_the_products.toUpperCase()}</Text>

                        <ProductConditionsList update_product_condition_id={this.set_product_condition_id} />

                        {/* <View style={styles.radio_buttons_container}>

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
                    </View> */}

                        <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].description_of_the_products.toUpperCase()}</Text>

                        <TextInput style={styles.products_des_input} value={this.state.set_swap_product_details} onChangeText={(swap_product_details) => this.set_swap_product_details(swap_product_details)} multiline />

                        <TouchableHighlight style={styles.next_button_container} onPress={() => this.step_one_post()}>
                            <Text style={styles.next_button_text}>
                                {Lang[this.state.lang_type].next}
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
        fontSize: ScreenSize.sw * 0.035,
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
        fontSize: ScreenSize.sw * 0.035,
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

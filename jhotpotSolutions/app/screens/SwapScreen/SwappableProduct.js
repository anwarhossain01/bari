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
import Checkbox from '../../components/Checkbox'
import Global from '../../common/Global'

export default class SwappableProduct extends React.Component {
    constructor(props) {
        super();

        this.dbOffline = new DatabaseOffline();
        this.state = {
            allProductCategories: [],
            lang_type: Global.LANGUAGE_NAME,
            checked_money: false,
            checked_product: true,
        }
    }

    async componentDidMount() {

    }

    set_product_category_id = (product_category_id) => {

        // console.warn(product_category_id)
    }


    //then pass each function with each radio button to make itself selected
    set_checked_button_money = (checked) => { this.setState({ checked_money: checked, }) }
    set_checked_button_product = (checked) => { this.setState({ checked_product: checked }) }

    render() {
        return (

            <SafeAreaView style={styles.main_container}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>

                    <Text style={styles.page_title_text}>{Lang[this.state.lang_type].swap_of_products}</Text>

                    <View style={styles.step_indicator_container}>

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].description} </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />
                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].photos} </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />

                        <View style={styles.formSelectedStep}>
                            <Text style={styles.formStepText}> {Lang[this.state.lang_type].swap_product} </Text>
                        </View>

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

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].swap_option.toUpperCase()}</Text>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                        <View style={{ width: '50%' }}>
                            <Checkbox
                                name={Lang[this.state.lang_type].swap_with_product}
                                checked={this.state.checked_product}
                                set_checkbox={this.set_checked_button_product}
                            />
                        </View>

                        <View style={{ width: '50%' }}>
                            <Checkbox
                                name={Lang[this.state.lang_type].swap_with_money}
                                checked={this.state.checked_money}
                                set_checkbox={this.set_checked_button_money}
                            />
                        </View>


                    </View>


                    <View>
                        <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].money_amount.toUpperCase()}</Text>
                        <TextInput style={styles.input_box} />
                    </View>



                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].write_something_about_swaps.toUpperCase()}</Text>
                    <TextInput style={styles.products_des_input} multiline />


                    <TouchableHighlight style={styles.next_button_container} onPress={() => this.props.navigation.navigate('ContactInfo')}>
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
        flexWrap: 'wrap',
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

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
import Global from '../../common/Global'

export default class WantToSellDescription extends React.Component {
    constructor(props) {
        super();

        this.dbOffline = new DatabaseOffline();
        this.state = {
            allProductCategories: [],
            lang_type: Global.LANGUAGE_NAME,
            checked_new: false,
            checked_exc_cond: false,
            checked_good_cond: false,
            checked_accpt_cond: false,
            checked_damg: false,

            checked_sell_negotiable: false,
            checked_sell_fixed: false,
            checked_sell_range: false,
        }
    }

    async componentDidMount() {

    }

    set_product_category_id = (product_category_id) => {

        // console.warn(product_category_id)
    }


    //pass this function to radio button component for deselect all radio buttons
    make_sell_deselected = () => {
        this.setState({
            checked_sell_negotiable: false,
            checked_sell_fixed: false,
            checked_sell_range: false,
        })
    }

    //then pass each function with each radio button to make itself selected
    set_radio_button_sell_negotiable = (checked) => { this.setState({ checked_sell_negotiable: true }) }
    set_radio_button_sell_fixed = (checked) => { this.setState({ checked_sell_fixed: true }) }
    set_radio_button_sell_range = (checked) => { this.setState({ checked_sell_range: true }) }


    render() {
        return (

            <SafeAreaView style={styles.main_container}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>

                    <Text style={styles.page_title_text}>{Lang[this.state.lang_type].want_to_sell}</Text>

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
                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].contact_info} </Text>


                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />
                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].post}  </Text>


                    </View>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].title.toUpperCase()}{Lang[this.state.lang_type].sell_title}</Text>
                    <TextInput style={styles.input_box} />

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].description.toUpperCase()}</Text>
                    <TextInput style={styles.products_des_input} multiline />


                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].selling_price.toUpperCase()}</Text>
                    <View style={styles.radio_buttons_container}>

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].negotiable}
                                checked={this.state.checked_sell_negotiable}
                                set_radio_button={this.set_radio_button_sell_negotiable}
                                make_one_selected_radio={this.make_sell_deselected}

                            />
                        </View>

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].fixed}
                                checked={this.state.checked_sell_fixed}
                                set_radio_button={this.set_radio_button_sell_fixed}
                                make_one_selected_radio={this.make_sell_deselected}
                            />
                        </View>

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].range}
                                checked={this.state.checked_sell_range}
                                set_radio_button={this.set_radio_button_sell_range}
                                make_one_selected_radio={this.make_sell_deselected}
                            />
                        </View>


                    </View>

                    {
                        this.state.checked_sell_fixed ?
                            <View>
                                <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].money_amount.toUpperCase()}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <TextInput style={[styles.input_box, { width: '50%' }]} />
                                    <Text style={styles.taka_text}>৳</Text>
                                </View>
                            </View>
                            :
                            <View />
                    }

                    {
                        this.state.checked_sell_range ?
                            <View>
                                <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].money_amount.toUpperCase()}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <TextInput style={[styles.input_box, { width: '30%' }]} />
                                    <Text style={styles.to_text}>{Lang[this.state.lang_type].to}</Text>
                                    <TextInput style={[styles.input_box, { width: '30%' }]} />
                                    <Text style={styles.taka_text}>৳</Text>
                                </View>
                            </View>
                            :
                            <View />
                    }



                    <TouchableHighlight style={styles.next_button_container} onPress={() => this.props.navigation.navigate('WantToSellPhotos')}>
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

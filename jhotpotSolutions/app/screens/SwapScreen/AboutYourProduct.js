import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    TextInput,
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
            checked_new: 0,
            checked_exc_cond: 0,
            checked_good_cond: 0,
            checked_accpt_cond: 0,
            checked_damg: 0,
        }
    }

    async componentDidMount() {
        let allProductCategories = await this.dbOffline.get_all_product_categories();
        this.setState({ allProductCategories });

        // console.warn(allProductCategories);
    }

    set_product_category_id = (product_category_id) => {

        // console.warn(product_category_id)
    }

    set_radio_button = () => {

    }

    render() {
        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>

                    <Text style={styles.page_title_text}>{Lang[this.state.lang_type].swap_of_products}</Text>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].what_category_of_products_do_you_want_to_exchange}</Text>

                    <ProductCategoryList update_product_category_id={this.set_product_category_id} />

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].name_of_the_products}</Text>

                    <TextInput style={styles.products_names_input} />
                    <Text style={styles.input_suggest_text}>{Lang[this.state.lang_type].if_you_have_more_than_one_product}</Text>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].condition_of_the_products}</Text>

                    <View style={styles.radio_buttons_container}>
                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].new}
                                checked={this.state.checked_new}
                                set_radio_button={this.set_radio_button}
                            />
                        </View>

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].used_excellent_condition}
                                checked={this.state.checked_exc_cond}
                                set_radio_button={this.set_radio_button}
                            />
                        </View>

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].used_good_condition}
                                checked={this.state.checked_good_cond}
                                set_radio_button={this.set_radio_button}
                            />
                        </View>

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].used_acceptable}
                                checked={this.state.checked_accpt_cond}
                                set_radio_button={this.set_radio_button}
                            />
                        </View>

                        <View style={{ width: '50%' }}>
                            <RadioButton
                                name={Lang[this.state.lang_type].damaged}
                                checked={this.state.checked_damg}
                                set_radio_button={this.set_radio_button}
                            />
                        </View>
                    </View>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].description_of_the_products}</Text>
                    <TextInput style={styles.products_des_input} multiline />

                </ScrollView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    page_title_text: {
        fontSize: ScreenSize.sw * 0.05,
        fontWeight: 'bold',
    },
    scroll_margin: {
        marginLeft: ScreenSize.sw * 0.02,
        marginRight: ScreenSize.sw * 0.02
    },
    qus_level_text: {
        textAlign: 'center',
        marginTop: ScreenSize.sw * 0.05,
        fontSize: ScreenSize.sw * 0.038,
        color: '#22546B',
    },
    products_names_input: {
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
        borderColor: '#24536B',
        flexDirection: 'row',
        borderRadius: ScreenSize.sw * 0.01,
        borderWidth: ScreenSize.sw * 0.003,
        width: '100%',
        marginTop: ScreenSize.sw * 0.02,
        height: ScreenSize.sw * 0.25,
        justifyContent: "center",
        alignItems: "center",
    }

});

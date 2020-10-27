import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import ScreenSize from "../../common/ScreenSize";
import Lang from '../../common/Languages';

export default class PostPreview extends React.Component {
    constructor(props) {
        super();
        this.state = {
            lang_type: 'EN',
        }

    }

    async componentDidMount() {

    }

    render() {
        return (

            <SafeAreaView style={{ flex: 1, padding: ScreenSize.sw * 0.02, opacity: this.state.opacity }}>

                <ScrollView showsVerticalScrollIndicator={false}>

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

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].contact_info} </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />

                        <View style={styles.formSelectedStep}>
                            <Text style={styles.formStepText}> {Lang[this.state.lang_type].post}  </Text>
                        </View>

                    </View>

                    <TouchableHighlight style={styles.post_button_container} onPress={() => this.props.navigation.navigate('ProductPhotos')}>
                        <Text style={styles.post_button_text}>
                            {Lang[this.state.lang_type].post_your_product}
                        </Text>
                    </TouchableHighlight>


                </ScrollView>

            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
    page_title_text: {
        fontSize: ScreenSize.sw * 0.05,
        fontWeight: 'bold',
        textAlign: 'center'
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
    formStepArrowImage: { marginLeft: 5, marginRight: 5, width: 20, height: 20 },
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
        marginTop: ScreenSize.sw * 0.05,
        fontSize: ScreenSize.sw * 0.038,
        color: '#22546B',
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
    },
    input_suggest_text: {
        color: 'gray',
        fontSize: ScreenSize.sw * 0.03,
        margin: ScreenSize.sw * 0.01,
    },


});

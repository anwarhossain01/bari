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
import Global from '../../common/Global'

export default class BridePostPreview extends React.Component {
    constructor(props) {
        super();
        this.state = {
            lang_type: Global.LANGUAGE_NAME,
        }

    }

    async componentDidMount() {

    }

    render() {
        return (

           <SafeAreaView style={styles.main_container}>

                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollStyle}>

                    <Text style={styles.page_title_text}>{Lang[this.state.lang_type].want_groom}</Text>

                    <View style={styles.step_indicator_container}>

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].bride_description} </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].bride_address} </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />
                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].bride_photo} </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].groom_description} </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />

                        <View style={styles.formSelectedStep}>
                            <Text style={styles.formStepText}> {Lang[this.state.lang_type].post}  </Text>
                        </View>

                    </View>

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
     main_container:{
        flex: 1, 
        backgroundColor: 'white'
    },
    scrollStyle:{
        margin: ScreenSize.sw * 0.02,
    },
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

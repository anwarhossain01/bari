import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Image,

} from 'react-native';
import ScreenSize from '../../common/ScreenSize';

export default class LanguageChangeScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {
            loading: true,
            button_bang_color: 'gray',
            button_eng_color: 'white',
        }

    }

    async componentDidMount() {

    }

    lang_bangla() {
        this.setState({ button_bang_color: 'gray', button_eng_color: 'white' });
    }

    lang_eng() {
        this.setState({ button_eng_color: 'gray', button_bang_color: 'white' });
    }

    render() {
        return (

            <SafeAreaView style={styles.container}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_style}>
                    <Text style={styles.language_text}> ভাষা / Language </Text>
                    <Text style={styles.suggest_text}> (আপনি পরবর্তীতে ভাষা পরিবর্তন করতে পারবেন) </Text>

                    <View style={styles.language_settings_container}>

                        <TouchableHighlight style={[styles.lang_option_container, { backgroundColor: this.state.button_bang_color }]} onPress={() => this.lang_bangla()} underlayColor={"#C1C1C1"}>
                            <Text style={styles.bangla_option_text}>বাংলা</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={[styles.lang_option_container, styles.eng_lang_container, { backgroundColor: this.state.button_eng_color }]} onPress={() => this.lang_eng()} underlayColor={"#C1C1C1"}>
                            <Text style={styles.english_option_text}>English</Text>
                        </TouchableHighlight>

                    </View>
                </ScrollView>

                <TouchableHighlight style={styles.next_step_container} onPress={() => this.props.navigation.navigate('mobile_number_screen')}> 
                    <Text style={styles.next_step_text}>পরবর্তী ধাপ/Next Step</Text>
                </TouchableHighlight>

            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22546B',
    },
    scroll_style: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    language_text: {
        fontSize: ScreenSize.sw * 0.05,
        color: 'white',
    },
    suggest_text: {
        fontSize: ScreenSize.sw * 0.032,
        color: 'white'
    },
    language_settings_container: {
        justifyContent: 'center'
    },
    lang_option_container: {
        marginTop: ScreenSize.sw * 0.1,
        backgroundColor: '#1E1E1E',
        margin: ScreenSize.sw * 0.02,
        width: ScreenSize.sw / 2,
        padding: ScreenSize.sw * 0.025,
        borderRadius: ScreenSize.sw * 0.1,
    },
    eng_lang_container: {
        marginTop: ScreenSize.sw * 0.02,
    },
    bangla_option_text: {
        textAlign: 'center',
        fontSize: ScreenSize.sw * 0.04,
    },
    english_option_text: {
        textAlign: 'center',
        fontSize: ScreenSize.sw * 0.04,
    },
    next_step_container:{
        backgroundColor: 'white',
        padding: ScreenSize.sw * 0.02,
    },
    next_step_text: {
        textAlign: 'center',
        fontSize: ScreenSize.sw * 0.04,
    }


});

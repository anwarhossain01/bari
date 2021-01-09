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
import Global from '../../common/Global'

export default class GroomBrideHomeScreen extends React.Component {
    constructor(props) {
        super();

        this.state = {
            lang_type: Global.LANGUAGE_NAME,


            loading: true,
        }
    }


    async componentDidMount() {

    }

    render() {
        return (

            <SafeAreaView style={styles.main_container}>

                <Text style={styles.page_title_text}>{Lang[this.state.lang_type].want_groom_bride}</Text>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>


                    <TouchableHighlight style={styles.button_container} onPress={() => this.props.navigation.navigate('BrideDescription')}>
                        <Text style={styles.button_text}>
                            {Lang[this.state.lang_type].want_groom.toUpperCase()}
                        </Text>
                    </TouchableHighlight>

                    <Text style={styles.or_text}>{Lang[this.state.lang_type].or}</Text>

                    <TouchableHighlight style={styles.button_container} onPress={() => this.props.navigation.navigate('GroomDescription')}>
                        <Text style={styles.button_text}>
                            {Lang[this.state.lang_type].want_bride.toUpperCase()}
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
        marginRight: ScreenSize.sw * 0.02,
        flexGrow: 1,
        justifyContent: 'center'
    },
    qus_level_text: {
        textAlign: 'center',
        marginTop: ScreenSize.sw * 0.12,
        fontSize: ScreenSize.sw * 0.04,
        color: 'black',
        fontWeight: 'bold',
    },
    button_container: {
        marginTop: ScreenSize.sw * 0.05,
        alignSelf: 'center',
        width: '100%',
        padding: ScreenSize.sw * 0.03,
        backgroundColor: '#22546B',
        marginBottom: ScreenSize.sw * 0.02,
    },
    button_text: {
        textAlign: 'center',
        color: 'white',
        fontSize: ScreenSize.sw * 0.045,
    },
    or_text: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: 'bold',
        textAlign: 'center'
    }

});

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

export default class RentMainScreen extends React.Component {
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

                {/* <Text style={styles.page_title_text}>{Lang[this.state.lang_type].cars_rental}</Text> */}

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].rent_give_take.toUpperCase()}</Text>

                    <TouchableHighlight style={styles.button_container} onPress={() => this.props.navigation.navigate('GiveOnRentDescription')}>
                        <Text style={styles.button_text}>
                            {Lang[this.state.lang_type].owner.toUpperCase()}
                        </Text>
                    </TouchableHighlight>

                    <Text style={styles.or_text}>{Lang[this.state.lang_type].or}</Text>

                    <TouchableHighlight style={styles.button_container} onPress={() => this.props.navigation.navigate('TakeOnRentDescription')}>
                        <Text style={styles.button_text}>
                            {Lang[this.state.lang_type].renter.toUpperCase()}
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
        textAlign: 'center',
    },
    scroll_margin: {
        marginLeft: ScreenSize.sw * 0.02,
        marginRight: ScreenSize.sw * 0.02,
        flexGrow: 1,
        justifyContent: 'center',
    },
    qus_level_text: {
        textAlign: 'center',
        fontSize: ScreenSize.sw * 0.04,
        color: 'black',
        fontWeight: 'bold',
    },
    button_container: {
        marginTop: ScreenSize.sw * 0.03,
        alignSelf: 'center',
        width: '100%',
        padding: ScreenSize.sw * 0.03,
        backgroundColor: '#22546B',
        marginBottom: ScreenSize.sw * 0.02,
        borderRadius: ScreenSize.sw * 0.06,
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

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


export default class OwnerShipChoose extends React.Component {
    constructor(props) {
        super();

        this.state = {
            lang_type: 'EN',


            loading: true,
        }
    }


    async componentDidMount() {

    }

    render() {
        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

                <Text style={styles.page_title_text}>{Lang[this.state.lang_type].cars_rental}</Text>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].types_of_ownership}</Text>

                    <TouchableHighlight style={styles.button_container} onPress={() => this.props.navigation.navigate('Organization')}>
                        <Text style={styles.button_text}>
                            {Lang[this.state.lang_type].organaization}
                        </Text>
                    </TouchableHighlight>

                    <Text style={styles.or_text}>{Lang[this.state.lang_type].or}</Text>

                    <TouchableHighlight style={styles.button_container} onPress={() => this.props.navigation.navigate('IndividualOwnership')}>
                        <Text style={styles.button_text}>
                            {Lang[this.state.lang_type].individual_ownership}
                        </Text>
                    </TouchableHighlight>

                </ScrollView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
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
        marginTop: ScreenSize.sw * 0.05,
        fontSize: ScreenSize.sw * 0.038,
        color: '#22546B',
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

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


export default class BloodHomeScreen extends React.Component {
    constructor(props) {
        super();

        this.state = {
            lang_type: 'BD',


            loading: true,
        }
    }


    async componentDidMount() {

    }

    render() {
        return (

            <SafeAreaView style={styles.main_container}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>

                    <Image source={require('../../assets/icons/jps_blood_donation.png')} style={styles.image_style}></Image>

                    <Text style={styles.contain_detail_text}>
                        {Lang[this.state.lang_type].need_blood_or_willing_to_donate_blood}
                    </Text>

                    <TouchableHighlight style={styles.button_container} onPress={() => this.props.navigation.navigate('DonateBlood')}>
                        <Text style={styles.button_text}>
                            {Lang[this.state.lang_type].willing_to_donate_blood.toUpperCase()}
                        </Text>
                    </TouchableHighlight>

                    <Text style={styles.or_text}>{Lang[this.state.lang_type].or}</Text>

                    <TouchableHighlight style={styles.button_container} onPress={() => this.props.navigation.navigate('BloodNeededScreen')}>
                        <Text style={styles.button_text}>
                            {Lang[this.state.lang_type].blood_needed.toUpperCase()}
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
    image_style: {
        width: "100%",
        // resizeMode: 'cover',
        height: ScreenSize.sw / 2,
    },
    contain_detail_text: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: 'bold',
        padding: ScreenSize.sw * 0.005,
        textAlign: 'center'

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

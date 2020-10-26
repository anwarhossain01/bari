import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import ScreenSize from "../common/ScreenSize";

export default class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    select_button = () => {
       
    }



    render() {
      let val = this.props.checked;
        return (


            <SafeAreaView style={{ flex: 1 }}>

                <TouchableOpacity style={styles.radio_button_container} onPress={() => this.select_button()}>
                    {
                        val != 0 ?

                            <View>
                                <Image
                                    source={require('../assets/icons/selected_radio_button.png')}
                                    style={styles.image_style} />

                                <Text style={styles.type_name_text} >{this.props.name}</Text>
                            </View>
                            :
                            <View>
                                <Image
                                    source={require('../assets/icons/radio_button.png')}
                                    style={styles.image_style} />

                                <Text style={styles.type_name_text} >{this.props.name}</Text>
                            </View>

                    }

                </TouchableOpacity>



            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({

    radio_button_container: {
        marginTop: ScreenSize.sw * 0.05,
        flexDirection: 'row',
    },
    image_style: {
        width: ScreenSize.sw * 0.05,
        height: ScreenSize.sw * 0.05,
    },
    type_name_text: {
        fontSize: ScreenSize.sw * 0.038,
        marginLeft: ScreenSize.sw * 0.02,
    }

});

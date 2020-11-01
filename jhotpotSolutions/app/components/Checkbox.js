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

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    select_button = () => {
        //then make pressed one checkbox button selected
        this.props.set_checkbox(!this.props.checked);
    }

    render() {
        return (

            <SafeAreaView style={{ flex: 1 }}>

                <TouchableOpacity style={styles.checkbox_button_container} onPress={() => this.select_button()}>
                    {
                        this.props.checked ?

                            <View style={{flexDirection: 'row'}}>
                                <Image
                                    source={require('../assets/icons/checkbox.png')}
                                    style={styles.image_style} />

                                <Text style={styles.type_name_text} >{this.props.name}</Text>
                            </View>
                            :
                            <View style={{flexDirection: 'row'}}>
                                <Image
                                    source={require('../assets/icons/empty_checkbox.png')}
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

    checkbox_button_container: {
        marginTop: ScreenSize.sw * 0.05,
        marginLeft: ScreenSize.sw * 0.03, 
    },
    image_style: {
        width: ScreenSize.sw * 0.045,
        height: ScreenSize.sw * 0.045,
    },
    type_name_text: {
        fontSize: ScreenSize.sw * 0.038,
        marginLeft: ScreenSize.sw * 0.02,
        flex: 1,
    }

});

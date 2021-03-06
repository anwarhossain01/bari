import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
    ActivityIndicator

} from 'react-native';
import ScreenSize from '../../common/ScreenSize';
import DatabaseOffline from '../../DatabaseOffline/DatabaseOffline';
import DivisionsList from '../../components/DivisionsList';
import DistrictsList from '../../components/DistrictsList';
import PoliceStationList from '../../components/PoliceStationsList';
import Global from '../../common/Global'
import Lang from '../../common/Languages'
import CommonFunction from '../../common/CommonFunction';
import LoginRegistrationService from "../../services/LoginRegistrationService";

export default class UserLocationScreen extends React.Component {
    constructor(props) {
        super();
        this.dbOffline = new DatabaseOffline();
        this.state = {
            lang_type: Global.LANGUAGE_NAME,
            all_divisions: [],
            all_districts: [],
            all_policeStations: [],
            selectedDivisionId: 0,
            selectedDistrictId: 0,
            selectedPoliceStationId: 0,
            showSpinner: false,
            fullName: "",
        }

    }

    async componentDidMount() {
        let all_divisions = await this.dbOffline.get_all_divisions()
        this.setState({ all_divisions });
    }

    updateSelectedDivisionId = (division_id) => {

        this.setState({ selectedDivisionId: division_id });
    }

    updateSelectedDistrictId = (district_id) => {

        this.setState({ selectedDistrictId: district_id });
    }

    updateSelectedPoliceStationId = (policeStation_id) => {

        this.setState({ selectedPoliceStationId: policeStation_id });
    }

    async store_data_into_server() {
        this.setState({ showSpinner: true });
        CommonFunction.set_full_name(this.state.fullName);
        let returnData = await LoginRegistrationService.user_registration(this.state.selectedDivisionId,
            this.state.selectedDistrictId,
            this.state.selectedPoliceStationId);
        
    let next_screen=false;
        if (returnData && returnData.hasOwnProperty('status') && returnData.status) {

            let next_screen=true;
        }
        else if (returnData && returnData.hasOwnProperty('validation_error') && returnData.validation_error) {
            let next_screen=false;

        }
        else if (returnData && returnData.hasOwnProperty('try_catch') && returnData.try_catch) {

            let next_screen=false;
        }
        else {

            let next_screen=false;
        }
        console.log(returnData);

        this.setState({ showSpinner: false });

        if(next_screen)
        {
            this.props.navigation.navigate('Main');
        }
        else{
            alert("Please try again from starting..");
            this.props.navigation.navigate('mobile_number_screen');
        }
        
    }

    render() {
        return (

            <SafeAreaView style={{ flex: 1, }}>

                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size={75} color="blue" animating={this.state.showSpinner} />

                    <View>

                        <TextInput style={styles.name_textinput}
                            placeholder={Lang[this.state.lang_type].what_is_your_name.toUpperCase()}
                            placeholderTextColor={'gray'}
                            onChangeText={(fullName) => this.setState({ fullName })}
                        />

                        {/*Select Division drop down*/}
                        <DivisionsList updateDivisionState={this.updateSelectedDivisionId} />
                        {/*Select Division drop down*/}

                        {/*Select District drop down*/}
                        <DistrictsList
                            selectedDivisionId={this.state.selectedDivisionId}
                            updateDistrictState={this.updateSelectedDistrictId} />
                        {/*Select District drop down*/}
                        {/*Select Police Station drop down*/}
                        <PoliceStationList
                            selectedDistrictId={this.state.selectedDistrictId}
                            updatePoliceStationState={this.updateSelectedPoliceStationId} />
                        {/*Select Police Station drop down*/}

                        <TouchableOpacity style={styles.submit_button} onPress={() => this.store_data_into_server()}>
                            <Text style={styles.submit_button_text}>{Lang[this.state.lang_type].complete_process.toUpperCase()}</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    name_textinput: {
        borderColor: '#24536B',
        borderRadius: ScreenSize.sw * 0.012,
        borderWidth: ScreenSize.sw * 0.004,
        height: ScreenSize.sw * 0.12,
        textAlign: 'center',
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: "bold",
        margin: ScreenSize.sw * 0.02,
    },
    submit_button: {
        marginTop: ScreenSize.sw * 0.2,
        alignSelf: 'center',
        width: '80%'
    },
    submit_button_text: {
        fontSize: ScreenSize.sw * 0.04,
        backgroundColor: '#22546B',
        color: 'white',
        textAlign: 'center',
        padding: ScreenSize.sw * 0.02,
    }

});

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
    ImageBackground

} from 'react-native';
import ScreenSize from '../../common/ScreenSize';
import DatabaseOffline from '../../DatabaseOffline/DatabaseOffline';
import DivisionsList from '../../components/DivisionsList';
import DistrictsList from '../../components/DistrictsList';
import PoliceStationList from '../../components/PoliceStationsList';

export default class UserLocationScreen extends React.Component {
    constructor(props) {
        super();
        this.dbOffline = new DatabaseOffline();
        this.state = {
            all_divisions: [],
            all_districts: [],
            all_policeStations: [],
            selectedDivisionId: 0,
            selectedDistrictId: 0,
            selectedPoliceStationId: 0,
            loading: true,
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


    render() {
        return (

            <SafeAreaView style={{ flex: 1 }}>

                <ScrollView>

                    <View>

                        <TextInput style={styles.name_textinput}
                            placeholder="নাম লিখুন"
                            placeholderTextColor={'black'}
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

                        <TouchableOpacity style={styles.submit_button} onPress={() => this.props.navigation.navigate('Main')}>
                            <Text style={styles.submit_button_text}>সম্পূর্ণ করুন</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    titleText: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: 'bold',
        textAlign: 'center'
    },
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
    submit_button_text:{
        fontSize: ScreenSize.sw * 0.04,
        backgroundColor: '#22546B',
        color: 'white',
        textAlign: 'center',
        padding: ScreenSize.sw * 0.02,
    }

});

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
import DivisionsList from '../../components/DivisionsList';
import DistrictsList from '../../components/DistrictsList';
import PoliceStationList from '../../components/PoliceStationsList';
import CarTypesList from '../../components/CarTypesList';
import DatabaseOffline from '../../DatabaseOffline/DatabaseOffline';

export default class IndividualOwnership extends React.Component {
    constructor(props) {
        super();

        this.dbOffline = new DatabaseOffline();
        this.state = {
            lang_type: 'EN',

            all_divisions: [],
            all_districts: [],
            all_policeStations: [],
            selectedCarTypeId: 0,
            selectedDivisionId: 0,
            selectedDistrictId: 0,
            selectedPoliceStationId: 0,

            loading: true,
        }
    }


    async componentDidMount() {

    }

    updateSelectedCarTypeId = (car_type_id) => {

        this.setState({ selectedCarTypeId: car_type_id });
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

            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

                <Text style={styles.page_title_text}>{Lang[this.state.lang_type].cars_rental}</Text>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].your_name}</Text>
                    <TextInput style={styles.input_box} />

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].type_of_car}</Text>
                    <CarTypesList updateCarTypeState={this.updateSelectedCarTypeId} />


                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].mobile_number_to_contact}</Text>
                    <TextInput style={styles.input_box} />
                    <Text style={styles.input_suggest_text}>{Lang[this.state.lang_type].more_than_one_mobile_numner}</Text>

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


                    <TouchableHighlight style={styles.button_container} onPress={() => this.props.navigation.navigate('Main')}>
                        <Text style={styles.button_text}>
                            {Lang[this.state.lang_type].next}
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
    },
    qus_level_text: {
        textAlign: 'center',
        marginTop: ScreenSize.sw * 0.05,
        fontSize: ScreenSize.sw * 0.038,
        color: '#22546B',
    },
    input_box: {
        borderColor: '#24536B',
        flexDirection: 'row',
        borderRadius: ScreenSize.sw * 0.01,
        borderWidth: ScreenSize.sw * 0.003,
        width: '100%',
        marginTop: ScreenSize.sw * 0.02,
        height: ScreenSize.sw * 0.12,
        justifyContent: "center",
        alignItems: "center",
    },
    input_suggest_text: {
        color: 'gray',
        fontSize: ScreenSize.sw * 0.03,
        margin: ScreenSize.sw * 0.01,
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
        fontSize: ScreenSize.sw * 0.04,
    },
    or_text: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: 'bold',
        textAlign: 'center'
    }

});

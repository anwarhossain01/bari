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
import DatabaseOffline from '../../DatabaseOffline/DatabaseOffline';
import Checkbox from '../../components/Checkbox'

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

            allCarTypes: [],
            selected_car_type_ids: [],
            checked_car: false,


            loading: true,
        }
    }

    async componentDidMount() {
        let allCarTypes = await this.dbOffline.get_all_car_types();

        //add extra column checked: false
        allCarTypes = allCarTypes.map((car_types) => {
            return { ...car_types, checked: false };
        });
        this.setState({ allCarTypes });

    }

    //function to update state array with checked key value make true/false
    set_checkbox = (checked, index_no) => {
        let allCarTypes = [...this.state.allCarTypes]; //copy state array
        allCarTypes[index_no - 1] = { ...allCarTypes[index_no - 1], checked: checked }; //index-1 as array start with 0 index
        this.setState({ allCarTypes });

        //get database id of that row value to store which is selected
        let id = this.state.allCarTypes[index_no - 1].car_type_id;
        let check_exist_value_index = this.state.selected_car_type_ids.indexOf(id); //check if exist then make 'not checked' 

        if (check_exist_value_index == -1) { // -1 means not found
            let selected_car_type_ids = this.state.selected_car_type_ids;
            selected_car_type_ids.push(id);
            this.setState({ selected_car_type_ids });  //so push database table primary key id and setState
        } else {
            this.state.selected_car_type_ids.splice(check_exist_value_index, 1); //otherwise remove from selected array and setState
            this.setState({ selected_car_type_ids: this.state.selected_car_type_ids });
        }

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


                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>
                    <Text style={styles.page_title_text}>{Lang[this.state.lang_type].cars_rental}</Text>

                    <View style={styles.step_indicator_container}>

                        <View style={styles.formSelectedStep}>
                            <Text style={styles.formStepText}> {Lang[this.state.lang_type].description} </Text>
                        </View>


                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].photos} </Text>


                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].post}  </Text>

                    </View>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].your_name}</Text>
                    <TextInput style={styles.input_box} />

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].type_of_car}</Text>

                    <View style={[styles.flex_wrap_container, { flexDirection: 'row' }]}>

                        {
                            this.state.allCarTypes.map((name, index) => (

                                <View style={{ width: '50%' }} key={index}>
                                    <Checkbox
                                        name={name.car_type_name_en}
                                        checked={name.checked}
                                        index_no={index + 1}
                                        set_checkbox={this.set_checkbox}
                                    />
                                </View>
                            ))
                        }

                    </View>


                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].mobile_number_to_contact}</Text>
                    <TextInput style={styles.input_box} />
                    <Text style={styles.input_suggest_text}>{Lang[this.state.lang_type].more_than_one_mobile_numner}</Text>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].location}</Text>
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

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].address}</Text>
                    <TextInput style={styles.input_box} />

                    <TouchableHighlight style={styles.button_container} onPress={() => this.props.navigation.navigate('CarRentalPhotos')}>
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
    step_indicator_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: ScreenSize.sw * 0.03,
        flexWrap: 'wrap'
    },
    formSelectedStep:
    {
        borderBottomColor: '#24536B',
        borderBottomWidth: ScreenSize.sw * 0.008
    },
    formStepText: {
        fontSize: ScreenSize.sw * 0.035,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    formStepArrowImage: { marginLeft: 5, marginRight: 5, width: 20, height: 20 },
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
    flex_wrap_container: {
        flexWrap: 'wrap'
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

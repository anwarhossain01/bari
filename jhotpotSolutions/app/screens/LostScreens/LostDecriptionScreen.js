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

import DatabaseOffline from '../../DatabaseOffline/DatabaseOffline';
import Lang from '../../common/Languages'
import ScreenSize from '../../common/ScreenSize';
import DivisionsList from '../../components/DivisionsList';
import DistrictsList from '../../components/DistrictsList';
import PoliceStationList from '../../components/PoliceStationsList';

export default class LostDecriptionScreen extends React.Component {
    constructor(props) {
        super();

        this.dbOffline = new DatabaseOffline();
        this.state = {
            allProductCategories: [],
            lang_type: 'EN',
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

            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>

                    <Text style={styles.page_title_text}>{Lang[this.state.lang_type].lost}</Text>

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

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].lost_title}</Text>
                    <TextInput style={styles.title_input} />

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].description}</Text>
                    <TextInput style={styles.description_input} multiline />

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].can_you_guess_where_did_it_happen}</Text>

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


                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].mobile_number_to_contact}</Text>
                    <TextInput style={styles.mobile_no_text_input} />
                    <Text style={styles.input_suggest_text}>{Lang[this.state.lang_type].more_than_one_mobile_numner}</Text>


                    <TouchableHighlight style={styles.next_button_container} onPress={() => this.props.navigation.navigate('LostPhotosScreen')}>
                        <Text style={styles.next_button_text}>
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
        marginRight: ScreenSize.sw * 0.02
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
    titleText: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    subTitleText: {
        fontSize: ScreenSize.sw * 0.027,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    qus_level_text: {
        textAlign: 'center',
        marginTop: ScreenSize.sw * 0.12,
        fontSize: ScreenSize.sw * 0.04,
        color: 'black',
        fontWeight: 'bold',
    },
    title_input: {
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
    mobile_no_text_input: {
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
    description_input: {
        borderColor: '#24536B',
        flexDirection: 'row',
        borderRadius: ScreenSize.sw * 0.01,
        borderWidth: ScreenSize.sw * 0.003,
        width: '100%',
        marginTop: ScreenSize.sw * 0.02,
        height: ScreenSize.sw * 0.25,
        justifyContent: "center",
        alignItems: "center",
    },
    next_button_container: {
        marginTop: ScreenSize.sw * 0.15,
        alignSelf: 'center',
        width: '100%',
        padding: ScreenSize.sw * 0.02,
        backgroundColor: '#22546B',
        marginBottom: ScreenSize.sw * 0.02,
    },
    next_button_text: {
        textAlign: 'center',
        color: 'white',
        fontSize: ScreenSize.sw * 0.04,
    }

});

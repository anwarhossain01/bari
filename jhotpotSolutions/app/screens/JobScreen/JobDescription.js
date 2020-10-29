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
import JobList from '../../components/JobList';

export default class JobDescription extends React.Component {
    constructor(props) {
        super();

        this.dbOffline = new DatabaseOffline();
        this.state = {
            allProductCategories: [],
            lang_type: 'EN',
            all_job_categories: [],
            selectedJobCategoryId: 0,

            loading: true,
        }
    }


    async componentDidMount() {
        // let all_job_categories = await this.dbOffline.get_all_divisions()
        // this.setState({ all_job_categories });

    }

    updateSelectedJobCategoryId = (job_category_id) => {
        this.setState({ selectedJobCategoryId: job_category_id });
    }


  

    render() {
        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll_margin}>

                    <Text style={styles.page_title_text}>{Lang[this.state.lang_type].recruitment_advertisement}</Text>

                    <View style={styles.step_indicator_container}>

                        <View style={styles.formSelectedStep}>
                            <Text style={styles.formStepText}> {Lang[this.state.lang_type].description} </Text> 
                        </View>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")}
                        />
                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].job_requirements} </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")} 
                        />

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].contact_info}  </Text>

                        <Image
                            style={styles.formStepArrowImage}
                            source={require("../../assets/icons/right-arrow.png")} 
                        />

                        <Text style={styles.formStepText}> {Lang[this.state.lang_type].post}  </Text>

                    </View>

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].title}</Text>
                    <TextInput style={styles.title_input} />

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].description}</Text>
                    <TextInput style={styles.description_input} multiline />

                    <Text style={styles.qus_level_text}>{Lang[this.state.lang_type].job_category}</Text>

                    {/*Select Division drop down*/}
                    <JobList updateJobState={this.updateSelectedJobCategoryId} />
                    {/*Select Division drop down*/}



                    <TouchableHighlight style={styles.next_button_container} onPress={() => this.props.navigation.navigate('JobRequirements')}>
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
        marginTop: ScreenSize.sw * 0.05,
        fontSize: ScreenSize.sw * 0.038,
        color: '#22546B',
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
        height: ScreenSize.sw * 0.35,
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

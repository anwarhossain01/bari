import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Lang from '../common/Languages';
import ScreenSize from '../common/ScreenSize';
import YearCalender from '../common/YearCalender';
import MonthCalender from '../common/MonthCalender';
import DayCalender from '../common/DayCalender';
import Global from '../common/Global';

export default class CustomCalender extends React.Component {
    constructor(props) {
        super();

        this.state = {
            lang_type: Global.LANGUAGE_NAME,
            birth_year: '',
            birth_month: '',
            birth_month_no: '',
            birth_day: '',
            YearModalVisible: false,
            MonthModalVisible: false,
            DayModalVisible: false,

        }
    }


    async componentDidMount() {
        let birth_year = this.props.year ? this.props.year : '';
        let birth_month = this.props.month ? this.props.month : '';
        let birth_month_no = this.props.month_no ? this.props.month_no : '';
        let birth_day = this.props.day ? this.props.day : '';

        this.setState({birth_year});
        this.setState({birth_month});
        this.setState({birth_month_no});
        this.setState({birth_day});

    }


    openYear = () => {
        this.setState({ YearModalVisible: true })
    }
    openMonth = () => {
        this.setState({ MonthModalVisible: true })
    }
    openDay = () => {
        if(this.state.birth_year == '' || this.state.birth_month_no == ''){
            alert("First select birth year and month")
        }else{
            this.setState({ DayModalVisible: true })
        }
    }

    set_birthyear = (year) => {
        let birth_year = year;
        this.setState({ birth_year });
        this.setState({ birth_day: '' });
        this.setState({ YearModalVisible: !this.state.YearModalVisible });
        this.props.setYear(year);

    }

    set_birthmonth = (month_no, month_name) => {
        this.setState({ birth_month: month_name });
        this.setState({ birth_month_no: month_no });
        this.setState({ birth_day: '' });
        this.setState({ MonthModalVisible: !this.state.MonthModalVisible });
        this.props.setMonth(month_no, month_name);

    }

    set_birthday = (day) => {
        this.setState({ birth_day: day });
        this.setState({ DayModalVisible: !this.state.DayModalVisible })
        this.props.setDay(day);
    }

    close_year_calender_modal = () => {
        this.setState({ YearModalVisible: !this.state.YearModalVisible });
    }
    close_month_calender_modal = () => {
        this.setState({ MonthModalVisible: !this.state.MonthModalVisible });
    }
    close_day_calender_modal = () => {
        this.setState({ DayModalVisible: !this.state.DayModalVisible });
    }

    render() {
        return (

            <View>

                {
                    this.state.YearModalVisible ?
                        <YearCalender
                            set_birthyear={this.set_birthyear}
                            close_year_calender_modal={this.close_year_calender_modal}
                        />
                        :
                        <View />
                }

                {
                    this.state.MonthModalVisible ?
                        <MonthCalender
                            set_birthmonth={this.set_birthmonth}
                            close_month_calender_modal={this.close_month_calender_modal}
                        />
                        :
                        <View />
                }

                {
                    this.state.DayModalVisible ?
                        <DayCalender
                            set_birthday={this.set_birthday}
                            year={this.state.birth_year}
                            month={this.state.birth_month_no}
                            close_day_calender_modal={this.close_day_calender_modal}
                        />
                        :
                        <View />
                }
                <View style={styles.birth_date_container}>
                    {
                        this.state.birth_year ?
                            <Text style={styles.birth_date_input_box} onPress={() => this.openYear()}>{this.state.birth_year}</Text>
                            :
                            <Text style={[styles.birth_date_input_box, { color: '#A5A5A5' }]} onPress={() => this.openYear()}>{Lang[this.state.lang_type].birth_year}</Text>

                    }

                    {
                        this.state.birth_month ?
                            <Text style={styles.birth_date_input_box} onPress={() => this.openMonth()}>{this.state.birth_month}</Text>
                            :
                            <Text style={[styles.birth_date_input_box, { color: '#A5A5A5' }]} onPress={() => this.openMonth()}>{Lang[this.state.lang_type].birth_month}</Text>

                    }

                    {
                        this.state.birth_month ?
                            <Text style={styles.birth_date_input_box} onPress={() => this.openDay()}>{this.state.birth_day}</Text>
                            :
                            <Text style={[styles.birth_date_input_box, { color: '#A5A5A5' }]} onPress={() => this.openDay()}>{Lang[this.state.lang_type].birth_day}</Text>

                    }

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    input_box: {
        borderColor: '#323232',
        flexDirection: 'row',
        borderRadius: ScreenSize.sw * 0.01,
        borderWidth: ScreenSize.sw * 0.004,
        width: '100%',
        paddingLeft: ScreenSize.sw * 0.02,
        fontSize: ScreenSize.sw * 0.035,
        marginTop: ScreenSize.sw * 0.02,
        height: ScreenSize.sw * 0.12,
        justifyContent: "center",
        alignItems: "center",
    },
    birth_date_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    birth_date_input_box: {
        borderColor: '#323232',
        flexDirection: 'row',
        color: '#474747',
        borderRadius: ScreenSize.sw * 0.01,
        borderWidth: ScreenSize.sw * 0.004,
        width: '33%',
        paddingLeft: ScreenSize.sw * 0.02,
        fontSize: ScreenSize.sw * 0.035,
        marginTop: ScreenSize.sw * 0.02,
        height: ScreenSize.sw * 0.12,
        textAlignVertical: 'center'
    },


});

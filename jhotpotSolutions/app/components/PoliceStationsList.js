import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Modal, FlatList } from 'react-native';
import ScreenSize from '../common/ScreenSize';
import DatabaseOffline from '../DatabaseOffline/DatabaseOffline';
import Lang from '../common/Languages'
import Global from '../common/Global'

class PoliceStationsList extends React.Component {

  constructor(props) {
    super();

    this.state = {
      isVisible: false,
      allPoliceStationsList: [],
      selectedPoliceStationId: 0,
      selectedText: '',
      lang_type: Global.LANGUAGE_NAME,

    };
    this.dbOffline = new DatabaseOffline();

  }

  async componentDidUpdate(nextProps) {
    this._isMounted = true;

    // if (nextProps.selectedDistrictId != this.props.selectedDistrictId)
    //{
    let allPoliceStationsList = await this.dbOffline.get_policeStation_for_selected_district(nextProps.selectedDistrictId);
    if (this._isMounted) {
      this.setState({ allPoliceStationsList });
    }
    //}
  }
  _isMounted = false;

  async componentDidMount() {
    this._isMounted = true;

    this.setState({ selectedText: Lang[this.state.lang_type].select_thana })
    let {
      selectedDistrictId
    } = this.props;
    let allPoliceStationsList = await this.dbOffline.get_policeStation_for_selected_district(selectedDistrictId);

    if (this._isMounted) {
      this.setState({ allPoliceStationsList });
    }
  }

  renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.touchableOpacitySelection} onPress={() => this.setSelectedPoliceStationId(item)}>
        {
          this.state.lang_type == "BD" ?
            <Text style={styles.touchableText}>{item.sub_district_or_ps_name_bd}</Text>
            :
            <Text style={styles.touchableText}>{item.sub_district_or_ps_name_en}</Text>
        }
      </TouchableOpacity>
    );

  }
  setSelectedPoliceStationId(item) {
    this.setState({ selectedPoliceStationId: item.sub_district_or_ps_id });
    this.setState({ selectedText: this.state.lang_type == "BD" ? item.sub_district_or_ps_name_bd : item.sub_district_or_ps_name_en })
    this.setState({ isVisible: false });
    this.props.updatePoliceStationState(item.sub_district_or_ps_id);

  }

  componentWillUnmount() {
    // tells the component that component is now unmounted
    this._isMounted = false;
  }

  // hide show modal
  displayModal(show) {
    this.setState({ isVisible: show });
  }

  render() {

    return (
      <View>
        <View style={styles.inputGroupView} >
          <TouchableOpacity style={styles.selectTouchView} onPress={() =>
            this.props.selectedDistrictId != 0 ? this.displayModal(true) : alert("Please first select District")
          }>

            <Text style={[styles.selectText, { color: this.state.selectedPoliceStationId == 0 ? 'gray' : 'black' }]}>{this.state.selectedText}</Text>

            <Image source={require('../assets/icons/icon_down_arrow.png')}
              style={styles.selectImageStyle} />
          </TouchableOpacity>
        </View>

        <Modal

          animationType={"slide"}
          transparent={false}
          visible={this.state.isVisible}
        >

          <TouchableOpacity style={{ alignSelf: 'flex-end' }}
            onPress={() => { this.displayModal(!this.state.isVisible) }}>
            <Image source={require("../assets/icons/close_icon_black.png")}
              style={styles.closeModelImage}
            />
          </TouchableOpacity>

          <View style={styles.modalView}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={this.state.allPoliceStationsList}
              renderItem={(item) => this.renderItem(item.item)}
              keyExtractor={item => item.sub_district_or_ps_id.toString()} />
          </View>
        </Modal>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  inputGroupView: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectTouchView: {
    borderColor: '#323232',
    flexDirection: 'row',
    borderRadius: ScreenSize.sw * 0.01,
    borderWidth: ScreenSize.sw * 0.004,
    width: ScreenSize.sw - 20,
    height: ScreenSize.sw * 0.12,
    justifyContent: "center",
    alignItems: "center",
  },
  selectText: {
    fontSize: ScreenSize.sw * 0.04,
    fontWeight: "bold",
    elevation: 5,
    paddingLeft: ScreenSize.sw * 0.02,
    paddingRight: ScreenSize.sw * 0.02,
    textAlign: 'center'
  },
  selectImageStyle: {
    width: ScreenSize.sw * 0.05,
    height: ScreenSize.sw * 0.05
  },

  modalView: { backgroundColor: 'white', flex: 1 },
  closeModelImage: {
    width: ScreenSize.sw * 0.06,
    height: ScreenSize.sw * 0.06,
    alignSelf: 'flex-end',
    marginRight: ScreenSize.sw * 0.04,
    marginBottom: 0,
    marginTop: ScreenSize.sw * 0.02,
    marginLeft: ScreenSize.sw * 0.01,
  },
  touchableOpacitySelection: {
    borderColor: '#323232',
    borderWidth: ScreenSize.sw * 0.004,
    margin: ScreenSize.sw * 0.04,
    borderRadius: ScreenSize.sw * 0.01,
    padding: ScreenSize.sw * 0.015
  },
  touchableText: { fontSize: ScreenSize.sw * 0.04, fontWeight: 'bold', textAlign: 'center' },



})

export default PoliceStationsList;

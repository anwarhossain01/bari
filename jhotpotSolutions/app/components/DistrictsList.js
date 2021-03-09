import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Modal, FlatList } from 'react-native';
import ScreenSize from '../common/ScreenSize';
import DatabaseOffline from '../DatabaseOffline/DatabaseOffline';
import Lang from '../common/Languages'
import Global from '../common/Global'

class DistrictsList extends React.Component {

  constructor(props) {
    super();

    this.state = {
      isVisible: false,
      allDistricts: [],
      selectedDistrictId: 0,
      selectedText: '',
      lang_type: Global.LANGUAGE_NAME,
      isDivisionIdExist: false,

    };
    this.dbOffline = new DatabaseOffline();

  }
  _isMounted = false;

  async componentDidUpdate(nextProps) {
    this._isMounted = true;

    //if (nextProps.selectedDivisionId != this.props.selectedDivisionId)
    //{
    // this.setState({ isDivisionIdExist: nextProps.selectedDivisionId});
    //alert(nextProps.selectedDivisionId)
    let allDistricts = await this.dbOffline.get_districts_for_selected_division(nextProps.selectedDivisionId);
    if (this._isMounted) {
      this.setState({ allDistricts });
    }
    //}
  }

  async componentDidMount() {
    this._isMounted = true;
    this.setState({ selectedText: Lang[this.state.lang_type].select_district })
    let {
      selectedDivisionId
    } = this.props;
    let allDistricts = await this.dbOffline.get_districts_for_selected_division(selectedDivisionId);

    if (this._isMounted) {
      this.setState({ allDistricts });
    }
  }

  componentWillUnmount() {
    // tells the component that component is now unmounted
    this._isMounted = false;
  }

  renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.touchableOpacitySelection} onPress={() => this.setSelectedDistrictId(item)}>
        <Text style={styles.touchableText}>{item.district_name} - {item.district_bn_name}</Text>
      </TouchableOpacity>
    );

  }
  setSelectedDistrictId(item) {
    this.setState({ selectedDistrictId: item.district_id });
    this.setState({ selectedText: item.district_name + ' - ' + item.district_bn_name })
    this.setState({ isVisible: false });
    this.props.updateDistrictState(item.district_id);

  }
  // hide show modal
  displayModal(show) {
    this.setState({ isVisible: show });
  }

  render() {

    return (
      <View >
        <View style={styles.inputGroupView} >
          <TouchableOpacity style={styles.selectTouchView} onPress={() =>
            this.props.selectedDivisionId != 0 ? this.displayModal(true) : alert("Please first select Division")
          }>

            <Text style={[styles.selectText, { color: this.state.selectedDistrictId == 0 ? 'gray' : 'black' }]}>{this.state.selectedText}</Text>

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
              data={this.state.allDistricts}
              renderItem={(item) => this.renderItem(item.item)}
              keyExtractor={item => item.district_id.toString()}
            />
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

export default DistrictsList;

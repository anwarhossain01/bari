import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Modal, FlatList } from 'react-native';
import ScreenSize from '../common/ScreenSize';
import DatabaseOffline from '../DatabaseOffline/DatabaseOffline';
import Lang from '../common/Languages'
import Global from '../common/Global'

class BusinessTypeList extends React.Component {

  constructor(props) {
    super();

    this.state = {
      isVisible: false,
      allBusinessTypes: [],
      selectedBusinessTypeId: 0,
      selectedText: '',
      lang_type: Global.LANGUAGE_NAME,

    };
    this.dbOffline = new DatabaseOffline();

  }
  async componentDidMount() {
    this.setState({ selectedText: Lang[this.state.lang_type].choose })

    let allBusinessTypes = await this.dbOffline.get_all_business_types();
    this.setState({ allBusinessTypes });
  }

  renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.touchableOpacitySelection} onPress={() => this.selectedBusinessTypeId(item)}>
        {
          this.state.lang_type == 'BD' ?
            <Text style={styles.touchableText}>{item.food_business_type_name_bn}</Text>
            :
            <Text style={styles.touchableText}>{item.food_business_type_name_en}</Text>

        }
      </TouchableOpacity>
    );

  }
  selectedBusinessTypeId(item) {
    this.setState({ selectedBusinessTypeId: item.food_business_type_id });
    this.setState({ selectedText: this.state.lang_type == 'BD' ? item.food_business_type_name_bn : item.food_business_type_name_en });
    this.setState({ isVisible: false });
    this.props.updateBusinessTypeState(item.food_business_type_id);

  }
  // hide show modal
  displayModal(show) {
    this.setState({ isVisible: show });
  }

  render() {

    return (
      <View>
        <View style={styles.inputGroupView} >
          <TouchableOpacity style={styles.selectTouchView} onPress={() => {
            this.displayModal(true);
          }}>

            <Text style={styles.selectText}>{this.state.selectedText}</Text>

            <Image source={require('../assets/icons/icon_down_arrow.png')}
              style={styles.selectImageStyle} />
          </TouchableOpacity>
        </View>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.isVisible}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => { this.displayModal(!this.state.isVisible) }}>
              <Image source={require("../assets/icons/close_icon.png")}
                style={styles.closeModelImage}
              />
              <FlatList
                data={this.state.allBusinessTypes}
                renderItem={(item) => this.renderItem(item.item)}
                keyExtractor={item => item.food_business_type_id.toString()}
                numColumns={1}
              />
            </TouchableOpacity>
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
  modalView: {
    backgroundColor: 'white'
  },
  closeModelImage: {
    width: ScreenSize.sw * 0.06,
    height: ScreenSize.sw * 0.06,
    alignSelf: 'flex-end',
    margin: ScreenSize.sw * 0.04,
    marginTop: ScreenSize.sw * 0.13
  },
  touchableOpacitySelection: {
    borderColor: '#323232',
    borderWidth: ScreenSize.sw * 0.004,
    margin: ScreenSize.sw * 0.04,
    borderRadius: ScreenSize.sw * 0.01,
    padding: ScreenSize.sw * 0.015
  },
  touchableText: {
    fontSize: ScreenSize.sw * 0.04,
    fontWeight: 'bold',
    textAlign: 'center'
  },



})

export default BusinessTypeList;

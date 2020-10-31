import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Modal, FlatList } from 'react-native';
import ScreenSize from '../common/ScreenSize';
import DatabaseOffline from '../DatabaseOffline/DatabaseOffline';
import Lang from '../common/Languages'

class BusinessTypeList extends React.Component {

  constructor(props) {
    super();

    this.state = {
      isVisible: false,
      allBusinessTypes: [],
      selectedBusinessTypeId: 0,
      selectedText: '',
      lang_type: 'EN'

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
    this.setState({ selectedText: this.state.lang_type == 'BD' ? item.food_business_type_name_bn:item.food_business_type_name_en });
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
    borderColor: '#24536B',
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 2,
    width: ScreenSize.sw - 20,
    height: ScreenSize.sw * 0.12,
    justifyContent: "center",
    alignItems: "center",
  },
  selectText: {
    fontSize: ScreenSize.sw * 0.04,
    fontWeight: "bold",
    elevation: 5,
    paddingLeft: 10,
    paddingRight: 10,
    padding: 2,
    textAlign: 'center'
  },
  selectImageStyle: { width: 20, height: 20, },

  modalView: { backgroundColor: 'white' },
  closeModelImage: { width: 20, height: 20, alignSelf: 'flex-end', margin: 5 },
  touchableOpacitySelection: { borderColor: '#275A74', borderWidth: 3, margin: 5, borderRadius: 5 },
  touchableText: { fontSize: ScreenSize.sw * 0.04, fontWeight: 'bold', textAlign: 'center' },



})

export default BusinessTypeList;

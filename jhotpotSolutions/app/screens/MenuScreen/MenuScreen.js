import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';

import ScreenSize from "../../common/ScreenSize";

export default class MenuScreen extends React.Component {
  constructor(props) {
    super()

  }

  render() {
    return (

      <SafeAreaView style={{ flex: 1, }}>

        <ScrollView>
          <View style={styles.user_details_container}>

            <View style={{ flexDirection: 'row' }}>

              <Image
                style={styles.profile_image}
                source={require('../../assets/sample/profile.jpg')}
              />

              <View style={styles.user_name_num_container}>
                <Text style={styles.user_name_text}>মালেক আহমেদ</Text>
                <Text style={styles.mobile_num_text}>+৮৮০ ১৮১৭০৬১৬২৩</Text>
              </View>

              <Image
                style={styles.forward_icon}
                source={require('../../assets/icons/icon_forward_arrow.png')}
              />
            </View>



          </View>

          <TouchableHighlight style={styles.item_container} underlayColor="#DDDDDD" onPress={() => alert(5)}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.item_text}>আমার ঠিকানা</Text>
              <Image
                style={styles.forward_icon}
                source={require('../../assets/icons/icon_forward_arrow.png')}
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.item_container} underlayColor="#DDDDDD" onPress={() => alert(5)}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.item_text}>আমার বিজ্ঞাপনগুলো</Text>
              <Image
                style={styles.forward_icon}
                source={require('../../assets/icons/icon_forward_arrow.png')}
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.item_container} underlayColor="#DDDDDD" onPress={() => alert(5)}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.item_text}>ভাষা পরিবর্তন</Text>
              <Text style={styles.item_lang_text}>বাংলা</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.item_container} underlayColor="#DDDDDD" onPress={() => this.props.navigation.navigate('VisitingCardListScreen')}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.item_text}>ভিজিটিং কার্ড</Text>
              <Image
                style={styles.forward_icon}
                source={require('../../assets/icons/icon_forward_arrow.png')}
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.item_container} underlayColor="#DDDDDD" onPress={() => alert(5)}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.item_text}>ব্যক্তিগত ডকুমেন্ট (এন.আই.ডি/পাসপোর্ট/জন্ম সনদপত্র/অন্যান্য)</Text>
              <Image
                style={styles.forward_icon}
                source={require('../../assets/icons/icon_forward_arrow.png')}
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.item_container} underlayColor="#DDDDDD" onPress={() => alert(5)}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.item_text}>অ্যাপয়েন্টমেন্ট ডাইরি</Text>
              <Image
                style={styles.forward_icon}
                source={require('../../assets/icons/icon_forward_arrow.png')}
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.item_container} underlayColor="#DDDDDD" onPress={() => alert(5)}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.item_text}>সাপোর্ট নিন</Text>
              <Image
                style={styles.forward_icon}
                source={require('../../assets/icons/icon_forward_arrow.png')}
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.item_container} underlayColor="#DDDDDD" onPress={() => alert(5)}>
            <Text style={styles.item_text}>ভার্সনঃ V1.2</Text>
          </TouchableHighlight>


        </ScrollView>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  user_details_container: {
    backgroundColor: 'white',
    margin: ScreenSize.sw * 0.02,
    padding: ScreenSize.sw * 0.045,
    paddingLeft: ScreenSize.sw * 0.035,
    borderRadius: ScreenSize.sw * 0.02,
    elevation: 1,
  },

  profile_image: {
    width: ScreenSize.sw / 6,
    height: ScreenSize.sw / 6,
    borderRadius: (ScreenSize.sw / 6 * 2) / 2,
    borderWidth: 2,
    borderColor: '#f2f2f2',
  },

  user_name_num_container: {
    marginLeft: ScreenSize.sw * 0.03,
    justifyContent: 'center',
    flex: 1,
  },

  user_name_text: {
    fontWeight: 'bold',
    fontSize: ScreenSize.sw * 0.04,
  },
  mobile_num_text: {
    fontSize: ScreenSize.sw * 0.035,
  },

  item_container: {
    backgroundColor: 'white',
    padding: ScreenSize.sw * 0.045,
    margin: ScreenSize.sw * 0.02,
    borderRadius: ScreenSize.sw * 0.008,
    elevation: 1,
  },
  item_text: {
    fontSize: ScreenSize.sw * 0.042,
    flex: 1,
    color: '#275A74', 
  },
  forward_icon: {
    width: ScreenSize.sw * 0.045,
    height: ScreenSize.sw * 0.045,
    alignSelf: 'center'
  },
  item_lang_text: {
    fontSize: ScreenSize.sw * 0.036,
    fontWeight: 'bold',
  }

});

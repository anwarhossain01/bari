import React from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

import HomeScreen from '../HomeScreen/HomeScreen';
import MenuScreen from '../MenuScreen/MenuScreen';
import SearchScreen from '../SearchScreen/SearchScreen';
import NotificationScreen from '../NotificationScreen/NotificationScreen';
import FavouriteScreen from '../FavouriteScreen/FavouriteScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator  initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: 'black',
      labelStyle: { fontSize: 12 },
      style: { backgroundColor: 'white', },
      showIcon: true ,
      showLabel:false,

    }}>
        
      <Tab.Screen name="Home" component={HomeScreen} 
       options={{ tabBarLabel: 'Home',
       tabBarIcon: ({ color,focused }) => (
         <Image source={focused?require('../../assets/icons/menu_home_icon.png'):require('../../assets/icons/menu_home_icon.png')} style={{width:30,height:30,}}/>
       ),
     }}
     />
      <Tab.Screen name="Search" component={SearchScreen}
       options={{ tabBarLabel: 'Search',
       tabBarIcon: ({ color,focused }) => (
         <Image source={focused?require('../../assets/icons/menu_search_icon.png'):require('../../assets/icons/menu_search_icon.png')} style={{width:30,height:30,}}/>
       ),
       }}
        />
      <Tab.Screen name="Favourite" component={FavouriteScreen}
       options={{ tabBarLabel: 'Favourite',
       tabBarIcon: ({ color,focused }) => (
         <Image source={focused?require('../../assets/icons/menu_favourite_icon.png'):require('../../assets/icons/menu_favourite_icon.png')} style={{width:30,height:30,}}/>
       ),
       }}
        />
      <Tab.Screen name="Notification" component={NotificationScreen} 
       options={{ tabBarLabel: 'Notifications',
       tabBarIcon: ({ color,focused }) => (
         <Image source={focused?require('../../assets/icons/menu_notification_icon.png'):require('../../assets/icons/menu_notification_icon.png')} style={{width:30,height:30,}}/>
       ),
       }}
       />
      <Tab.Screen name="Menu" component={MenuScreen} 
       options={{ tabBarLabel: 'Menu',
       tabBarIcon: ({ color,focused }) => (
         <Image source={focused?require('../../assets/icons/menu_menu_icon.png'):require('../../assets/icons/menu_menu_icon.png')} style={{width:30,height:30,}}/>
       ),
       }}/>
    </Tab.Navigator>
  );
}
export default class MainScreen extends React.Component {

    constructor(props) {
        super(props);
        

        
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, }}>
              
<MyTabs/>
            </SafeAreaView>
        )
    }
}
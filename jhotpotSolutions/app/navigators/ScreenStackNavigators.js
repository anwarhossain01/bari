import React from 'react';

import SplashScreen from '../screens/SplashScreen/SplashScreen';


import MainScreen from '../screens/MainScreen/MainScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



import {
    View,
    Image,
    Text,
    StatusBar,
    Dimensions} from 'react-native';
import { color } from 'react-native-reanimated';

const dimensions = Dimensions.get("window");
const sw = dimensions.width;

const Stack = createStackNavigator();

const navigators = () => {
    return (

        <NavigationContainer>

        <StatusBar
    backgroundColor="#24536B"
    barStyle="light-content"
  />
            <Stack.Navigator
        
                screenOptions={{
                    headerStyle: {
                        backgroundColor:'#275A74',
                    },
                    headerLeft:() => (
                        <Image   source={require('../assets/logo/logo.png')}
                        style={{ height:30, width:30*6.81 }}/>
                      ),
                      headerRight:() => (
                          <View style={{marginRight:5}}>
                       <Text style={{color:'white',fontSize:sw*0.04}}>
+ Create AD / বিজ্ঞাপন দিন 
                       </Text>
                      </View>
                      ),
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
               
                <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: true ,title:null}} />
                
           
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default navigators;
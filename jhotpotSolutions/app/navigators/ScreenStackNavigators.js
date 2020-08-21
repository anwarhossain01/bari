import React from 'react';

import SplashScreen from '../screens/SplashScreen/SplashScreen';


import MainScreen from '../screens/MainScreen/MainScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {Image,Text} from 'react-native';
import { color } from 'react-native-reanimated';


const Stack = createStackNavigator();

const navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
        
                screenOptions={{
                    headerStyle: {
                        backgroundColor:'#275a74',
                    },
                    headerLeft:() => (
                        <Image   source={require('../assets/logo/logo.png')}
                        style={{ height:30, width:30*6.81 }}/>
                      ),
                      headerRight:() => (
                       <Text style={{color:'white',}}>
বিজ্ঞাপন দিন 
                       </Text>
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
import React from 'react';
import { SafeAreaView, View, Image, StyleSheet, Dimensions, Alert } from 'react-native';

const const_dimensions = Dimensions.get("window");

export default class SplashScreen extends React.Component {

   
   componentDidMount()
    {            

        let that=this;
        setTimeout(async function(){
           
            that.props.navigation.navigate('mobile_number_screen');
          
          }, 5000)

    }

   
    render() {
        let dimensions = const_dimensions;
        let imageHeight = Math.round((dimensions.width * 9) / 16);
        let imageWidth = dimensions.width;
        return (

            <SafeAreaView style={styles.MainContainer}>
                <View style={styles.mainView}>
                    <Image source={require('../../assets/logo/splash_logo1.png')} 
                    style={{ width: imageWidth, }}
                    resizeMode="contain"
                    />
                    </View>
                
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        backgroundColor:'#275A74'
    },

    mainView: {


        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'


    },

    footer_img_view: {
        flex: 0.2,
        bottom: 0,
        position: "absolute",

    },



});
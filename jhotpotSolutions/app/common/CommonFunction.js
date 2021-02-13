import AsyncStorage from '@react-native-async-storage/async-storage';


export default class CommonFunction {

    static async setSession_language_name(value) {
        try {
            await AsyncStorage.setItem('language_name', value)
        } catch (e) {

        }
    }


    static async setSession_mobile_number(value) {
        try {
            await AsyncStorage.setItem('mobile_number', value)
        } catch (e) {

        }
    }

    static async getSession_mobile_number(value) {
        try {
            let mobile_number = await AsyncStorage.getItem('mobile_number');
            return mobile_number;
        } catch (e) {

            return null;
        }
    }

    static async setSession_mobile_number_is_Verified(value) {
        try {
            await AsyncStorage.setItem('mobile_number_verified', value)
        } catch (e) {

        }
    }

    static async set_device_information(value) {
        try {
            await AsyncStorage.setItem('device_token', value.token);
            await AsyncStorage.setItem('device_os_type', value.os)
        } catch (e) {

        }
    }

    static async get_device_token() {
        try {
            let device_token = await AsyncStorage.getItem('device_token');
            return device_token;
        } catch (e) {

        }
    }

    static async get_device_os_type() {
        try {
            await AsyncStorage.getItem('device_os_type');
            return device_os;
        } catch (e) {

        }
    }

    static async set_full_name(value) {
        try {
            await AsyncStorage.setItem('full_name', value);
        } catch (e) {

        }
    }

    static async get_full_name() {
        try {
            let full_name=await AsyncStorage.getItem('full_name');
            return full_name;
        } catch (e) {

        }
    }

}
import {
    
    Dimensions,
    
} from 'react-native';

export default class ScreenSize
{
    static sw=Dimensions.get('window').width;
    static sh=Dimensions.get('window').height;
    static imgHeight = Math.round((this.sw * 9) / 16);
}
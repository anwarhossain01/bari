import {
    
    Dimensions,
    
} from 'react-native';

export default class ScreenSize
{
    static sw=Dimensions.get('window').width;
    static sh=Dimensions.get('window').height;
}
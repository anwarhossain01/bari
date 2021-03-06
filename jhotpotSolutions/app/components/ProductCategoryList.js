import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Modal, FlatList } from 'react-native';
import ScreenSize from '../common/ScreenSize';
import DatabaseOffline from '../DatabaseOffline/DatabaseOffline';
import Lang from '../common/Languages'
import Global from '../common/Global'
import AsyncStorage from '@react-native-async-storage/async-storage';

class ProductCategoryList extends React.Component {

    constructor(props) {
        super();

        this.state = {
            selectedProductCatgId: 0,
            isVisible: false,
            allProductCategories: [],
            selectedText: '',
            lang_type: Global.LANGUAGE_NAME,
        };
        this.dbOffline = new DatabaseOffline();

    }

    _isMounted = false;
    async componentDidMount() {
        this._isMounted = true;

        this.setState({ selectedText: Lang[this.state.lang_type].choose })
        await AsyncStorage.removeItem('product_catg_name');
        let allProductCategories = await this.dbOffline.get_all_product_categories();
        if (this._isMounted) {
            this.setState({ allProductCategories });
        }
    }

    componentWillUnmount() {
        // tells the component that component is now unmounted
        this._isMounted = false;
    }

    renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.touchableOpacitySelection} onPress={() => this.setSelectedDistrictId(item)}>
                {
                    this.state.lang_type == "BD" ?
                        <Text style={styles.touchableText}>{item.selling_product_category_name_bd}</Text>
                        :
                        <Text style={styles.touchableText}>{item.selling_product_category_name_en}</Text>

                }
            </TouchableOpacity>
        );

    }
    async setSelectedDistrictId(item) {
        await AsyncStorage.setItem('product_catg_name', this.state.lang_type == "BD" ? item.selling_product_category_name_bd : item.selling_product_category_name_en);
        this.setState({ selectedProductCatgId: item.product_category_id });
        this.setState({ selectedText: this.state.lang_type == "BD" ? item.selling_product_category_name_bd : item.selling_product_category_name_en });
        this.setState({ isVisible: false });
        this.props.update_product_category_id(item.selling_product_category_id);

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
                                data={this.state.allProductCategories}
                                renderItem={(item) => this.renderItem(item.item)}
                                keyExtractor={item => item.selling_product_category_id.toString()}
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
        marginTop: ScreenSize.sw * 0.03,
        justifyContent: "center",
        alignItems: "center",
    },
    selectTouchView: {
        borderColor: '#323232',
        flexDirection: 'row',
        borderRadius: ScreenSize.sw * 0.01,
        borderWidth: ScreenSize.sw * 0.004,
        width: ScreenSize.sw - ScreenSize.sw * 0.04,
        height: ScreenSize.sw * 0.12,
        justifyContent: "center",
        alignItems: "center",
    },
    selectText: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: "bold",
        paddingLeft: ScreenSize.sw * 0.02,
        paddingRight: ScreenSize.sw * 0.02,
    },
    selectImageStyle: {
        width: ScreenSize.sw * 0.045,
        height: ScreenSize.sw * 0.045
    },
    modalView: {
        backgroundColor: 'white'
    },
    closeModelImage: {
        width: ScreenSize.sw * 0.05,
        height: ScreenSize.sw * 0.05,
        alignSelf: 'flex-end',
        margin: ScreenSize.sw * 0.02,
    },
    touchableOpacitySelection: {
        borderColor: '#275A74',
        borderWidth: ScreenSize.sw * 0.003,
        margin: ScreenSize.sw * 0.02,
        borderRadius: ScreenSize.sw * 0.01,
        padding: ScreenSize.sw * 0.02
    },
    touchableText: {
        fontSize: ScreenSize.sw * 0.04,
        fontWeight: 'bold',
        textAlign: 'center'
    },

})

export default ProductCategoryList;

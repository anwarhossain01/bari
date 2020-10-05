import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    FlatList,
    Modal,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import ScreenSize from "../../common/ScreenSize";

const DATA = [
    {
        id: '1',
    },
    {
        id: '2',
    },
    {
        id: '3',
    },
];

export default class VisitingCardListScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {
            searchValue: '',
            closeIconShow: false,
            modalVisible: false,
        }

    }

    searchItems = (searchValue) => {
        if (searchValue) {
            this.setState({
                searchValue: searchValue,
                closeIconShow: true
            })
        }
        else {
            this.setState({
                searchValue: '',
                closeIconShow: false
            })
        }
    }

    closeSearch = () => {
        this.setState({
            searchValue: '',
            closeIconShow: false
        })
    }

    makeModal() {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    imageShowModal() {
        return (
            <Modal
                animationType="fade"
                visible={this.state.modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <TouchableOpacity style={styles.close_modal_container} onPress={() => this.makeModal()}>
                            <Image
                                style={styles.close_modal_icon}
                                source={require('../../assets/icons/close_icon.png')}
                            />
                        </TouchableOpacity>
                        <Image
                            style={styles.visiting_card_org_image}
                            source={require('../../assets/sample/visting_card.jpg')}
                        />

                    </View>
                </View>
            </Modal>

        )
    }

    renderItem = () => {

        return (
            <TouchableOpacity style={styles.visiting_card_container} onPress={() => this.makeModal()}>
                <Image
                    style={styles.visiting_card_image}
                    source={require('../../assets/sample/visting_card.jpg')}
                />
                <Text style={styles.visiting_card_text}>IT Coaching Center</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (

            <SafeAreaView style={{ flex: 1, padding: ScreenSize.sw * 0.02 }}>

                {this.imageShowModal()}

                <View style={styles.search_container}>
                    <Image
                        style={styles.search_icon}
                        source={require('../../assets/icons/search_icon.png')}
                    />
                    <TextInput placeholder="Search"
                        style={styles.searchinput}
                        onChangeText={(searchValue) => { this.searchItems(searchValue) }}
                        value={this.state.searchValue}
                    />
                    {
                        this.state.closeIconShow ?
                            <TouchableOpacity style={styles.search_close_container}
                                onPress={() => this.closeSearch()}>
                                <Image
                                    style={styles.close_icon}
                                    source={require('../../assets/icons/close.png')}
                                />
                            </TouchableOpacity>
                            :
                            <View />
                    }

                </View>

                <FlatList
                    contentContainerStyle={{ paddingTop: ScreenSize.sw * 0.04 }}
                    data={DATA}
                    showsVerticalScrollIndicator={false}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    search_container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: ScreenSize.sw * 0.02,
        padding: ScreenSize.sw * 0.01,
    },
    search_icon: {
        height: ScreenSize.sw * 0.06,
        width: ScreenSize.sw * 0.06,
        alignSelf: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    searchinput: {
        flex: 1,
        padding: 2,
        fontSize: ScreenSize.sw * 0.04,

    },
    search_close_container: {
        alignSelf: 'center',
        marginLeft: 5,
        marginRight: 15,
    },
    close_icon: {
        height: ScreenSize.sw * 0.037,
        width: ScreenSize.sw * 0.037,

    },
    visiting_card_container: {
        backgroundColor: 'white',
        marginBottom: ScreenSize.sw * 0.06,
        padding: ScreenSize.sw * 0.02,
        borderRadius: ScreenSize.sw * 0.015,
        elevation: 1,
    },
    visiting_card_image: {
        width: ScreenSize.sw,
        height: ScreenSize.sw / 2,
        resizeMode: 'contain',
    },
    visiting_card_text: {
        fontSize: ScreenSize.sw * 0.042,
        textAlign: 'center',
        marginTop: ScreenSize.sw * 0.02,
    },



    centeredView: {
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        padding: ScreenSize.sw * 0.06,
    },

    visiting_card_org_image: {
        width: ScreenSize.sw,
        height: "100%",
        resizeMode: 'contain'
    },
    close_modal_icon: {
        height: ScreenSize.sw * 0.06,
        width: ScreenSize.sw * 0.06,
    },
    close_modal_container: {
        alignSelf: 'flex-end',
        marginRight: ScreenSize.sw * 0.03,
    }

});

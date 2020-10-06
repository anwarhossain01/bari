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
import VisitingCardService from '../../services/VisitingCardService';
import Global from '../../common/Global'

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
            visiting_cards_info: [],
            image_url_modal: '',
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

    imageShowModal(val) {
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
                            source={{ uri: val }}
                        />

                    </View>
                </View>
            </Modal>

        )
    }

    call_modal(url) {
        this.setState({image_url_modal: url});
        this.makeModal();
    }

    renderItem = (data) => {
        return (
            <TouchableOpacity style={styles.visiting_card_container} onPress={() => this.call_modal(Global.IMAGE_URL + data.visiting_original_image_location)}>
                <Image
                    style={styles.visiting_card_image}
                    source={{ uri: Global.IMAGE_URL + data.visiting_original_image_location }}
                />

                <Text style={styles.visiting_card_text}>{data.visiting_card_title}</Text>

                <TouchableHighlight style={styles.delete_card_button}>
                    <Text style={styles.delete_card_text}>DELETE</Text>
                </TouchableHighlight>

            </TouchableOpacity>
        )
    }

    async componentDidMount() {
        let returnValue = [];
        returnValue = await VisitingCardService.get_all_visiting_cards();
        if (returnValue.length > 0) {
            let visiting_cards_info = returnValue;
            this.setState({ visiting_cards_info });

        }
        else {
            alert("Please contact with server administration");
        }
    }

    render() {
        return (

            <SafeAreaView style={{ flex: 1, padding: ScreenSize.sw * 0.02 }}>

                {this.imageShowModal(this.state.image_url_modal)}

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
                    data={this.state.visiting_cards_info}
                    showsVerticalScrollIndicator={false}
                    renderItem={item => this.renderItem(item.item)}
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

        borderRadius: ScreenSize.sw * 0.015,
        elevation: 1,
    },
    visiting_card_image: {
        width: ScreenSize.sw,
        height: ScreenSize.sw / 2,
        resizeMode: 'cover',
    },
    delete_card_button: {
        backgroundColor: '#843734',
        borderRadius: ScreenSize.sw * 0.006,
        marginTop: ScreenSize.sw * 0.02,
        width: '80%',
        alignSelf: 'center'
    },
    delete_card_text: {
        textAlign: 'center',
        fontSize: ScreenSize.sw * 0.028,
        fontWeight: 'bold',
        padding: ScreenSize.sw * 0.01,
        color: 'white'
    },
    visiting_card_text: {
        fontSize: ScreenSize.sw * 0.042,
        textAlign: 'center',
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

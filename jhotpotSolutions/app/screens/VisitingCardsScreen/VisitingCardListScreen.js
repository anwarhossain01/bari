import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    FlatList,
    StyleSheet
} from 'react-native';

import VisitingCardService from '../../services/VisitingCardService';
import Global from '../../common/Global'
import OptionShowModal from './modals/VisitingCardOptionsModal'
import VisitingCardDeleteModal from './modals/VisitingCardDeleteModal'
import VisitingCardDetailsModal from './modals/VisitingCardDetailsModal'
import VisitingCardEditModal from './modals/VisitingCardEditModal'
import ScreenSize from "../../common/ScreenSize";

export default class VisitingCardListScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {
            searchValue: '',
            closeIconShow: false,
            imageModalVisible: false,
            optionModalVisible: false,
            deleteModalVisible: false,
            editModalVisible: false,
            visiting_cards_info: [],
            image_url_modal: '',
            image_title_text: '',
            opacity: 1,
        }

    }

    // make close icon visible after value insert
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

    // make close icon invisible after value empty
    closeSearch = () => {
        this.setState({
            searchValue: '',
            closeIconShow: false
        })
    }

    // open/close modal for image/title show
    makeModal() {
        this.setState({
            imageModalVisible: !this.state.imageModalVisible
        })
    }

    // set image and title to pass details modal
    call_image_modal(url, title) {
        this.setState({ image_url_modal: url });
        this.setState({ image_title_text: title })
        this.makeModal();
    }

    // delete warning modal
    make_delete_alert_modal() {
        this.setState({
            deleteModalVisible: !this.state.deleteModalVisible,
            optionModalVisible: !this.state.optionModalVisible,
        })
    }

    // show options(edit/delete) modal 
    make_options_modal() {
        this.setState({
            optionModalVisible: !this.state.optionModalVisible,
        })
    }

    // make edit modal visible
    make_edit_options_modal() {
        this.setState({
            editModalVisible: !this.state.editModalVisible,
        })
    }

    renderItem = (data) => {
        return (
            <View style={styles.visiting_card_container} >
                <TouchableOpacity style={styles.menu_icon_container} onPress={() => this.setState({ optionModalVisible: true })}>
                    <Image
                        style={styles.menu_icon}
                        source={require('../../assets/icons/menu.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.call_image_modal(Global.IMAGE_URL + data.visiting_original_image_location, data.visiting_card_title)}>

                    {
                        data.visiting_card_title.length > 100 ?
                            <Text style={styles.visiting_card_text}>{data.visiting_card_title.substring(0, 100) + "..."}</Text>
                            :
                            <Text style={styles.visiting_card_text}>{data.visiting_card_title}</Text>

                    }

                    <Image
                        style={styles.visiting_card_image}
                        source={{ uri: Global.IMAGE_URL + data.visiting_original_image_location }}
                    />
                </TouchableOpacity>

            </View>
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

            <SafeAreaView style={{ flex: 1, padding: ScreenSize.sw * 0.02, opacity: this.state.opacity }}>


                {/* options show edit/delete */}
                <OptionShowModal isOptionsModalVisible={this.state.optionModalVisible}
                    make_options_modal={() => this.make_options_modal()}
                    make_delete_alert_modal={() => this.make_delete_alert_modal()} 
                    make_edit_options_modal={() => this.make_edit_options_modal()} />

                {/* delete alert */}
                <VisitingCardDeleteModal isDeleteModalVisible={this.state.deleteModalVisible}
                    make_delete_alert_modal={() => this.make_delete_alert_modal()} />

                {/* details show image/title alert */}
                <VisitingCardDetailsModal isImageModalVisible={this.state.imageModalVisible}
                    makeModal={() => this.makeModal()}
                    imageUrl={this.state.image_url_modal}
                    title={this.state.image_title_text} />

                {/* edit box modal */}
                <VisitingCardEditModal isEditModalVisible={this.state.editModalVisible}
                    make_edit_options_modal={() => this.make_edit_options_modal()} />

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
    menu_icon_container: {
        alignSelf: 'flex-end',
        marginRight: ScreenSize.sw * 0.02
    },
    menu_icon: {
        width: ScreenSize.sw * 0.05,
        height: ScreenSize.sw * 0.05,
        resizeMode: 'contain',
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
        fontSize: ScreenSize.sw * 0.04,
        textAlign: 'center',
        padding: ScreenSize.sw * 0.02
    },


});

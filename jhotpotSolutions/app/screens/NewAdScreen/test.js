import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import ImageResizer from 'react-native-image-resizer';
import ImagePicker from 'react-native-image-crop-picker';
import Download_image from './image_cropper/Download_image'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    marginBottom: 50,
    backgroundColor: 'black'
  },
  resizeButton: {
    color: '#333333',
    fontWeight: 'bold',
    marginTop: 25,
  },
});

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      resizedImageUri: '',
      loading: true,
      image: '',
      ratio: 1,
      height: 1,
      width: 1,
      quality: 55,

      response_new: {}
    };
  }

  photo_upload() {
    ImagePicker.openPicker({
      // path: 'https://www.lifeofpix.com/wp-content/uploads/2018/09/manhattan_-11-1600x2396.jpg',
      // width: 300,
      //  height: 300,
      //compressImageQuality: 0.8
      // cropping: true

    }).then(image => {
      let get_ratio = image.width / image.height;
      let check = image.width > 1080 ? 1 : 0;
      let get_width = image.width > 1080 ? 1080 : image.width;
      let get_height = check == 0 ? image.height : 1080 / get_ratio;
     // let get_quality = (image.size / 1024)

      if (get_height > get_width) { this.setState({ quality: 30 }) }

      //  console.warn('img_height',get_height);
      // console.warn('img_ration', get_ratio)
      this.setState({
        image: image.path,
        height: get_height,
        width: get_width
      });
      // // console.warn("oRIGINAL SIZE OF IMAGE-", (image.size/1024));
      //  console.warn("SIZE OF IMAGE-", Number((image.size / 1024).toFixed(1)));
      this.resize();
    });
  }

  async resize() {
    ImageResizer.createResizedImage(this.state.image, this.state.width, this.state.height, 'JPEG', this.state.quality
    )

      .then(response => {
        this.setState({
          response_new: response,
          resizedImageUri: response.uri,
        });
        // afer_comp_response = response;
        //  console.warn("COMP SIZE OF IMAGE-", Number((response.size / 1024).toFixed(1)));

        //console.warn(response);
        // this.downloadImage(this.state.resizedImageUri);
      })
      // .then( response  => {
      //   // this.setState({
      //   //   resizedImageUri: uri,
      //   // });
      //   console.warn("COMP SIZE OF IMAGE-", Number((size / 1024).toFixed(1)));
      //   console.warn(response);
      //  // this.downloadImage(this.state.resizedImageUri);
      // })
      .catch(err => {
        console.warn(err);
        return Alert.alert(
          'Unable to resize the photo',
          'Check the console for full the error message',
        );
      });

    // let result = await this.post_image_submit(afer_comp_response.uri, afer_comp_response.name);
  }
  async submit_image() {
    //console.warn(this.state.response_new.uri)
    let result = await this.post_image_submit(this.state.response_new.uri, this.state.response_new.name);

    console.warn(result)
  }

  async post_image_submit(img_uri, img_name) {
    //  / alert(img_uri)
    let formData = new FormData();
    formData.append('image_location', { type: 'image/jpeg', uri: img_uri, name: img_name });
    try {
      let response = await fetch('http://10.0.2.2/sqlite_image_cache_test_others/backend/api/make_post_image', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data',
          'X-CSRF-TOKEN': '{{ csrf_token() }}',
          contentType: false,
          processData: false,
        },

        body: formData,

      });
      let responseJsonData = await response.json();
      console.warn(responseJsonData)
      return responseJsonData;
    }
    catch (e) {
      console.warn(e)
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView >
          <Text onPress={() => this.photo_upload()} style={{ marginTop: 50 }}>PHOTO</Text>
          {this.state.image ? (
            <Image style={styles.image} source={{ uri: this.state.image }} />
          ) : null}
          <TouchableOpacity onPress={() => this.resize()}>
            <Text style={styles.resizeButton} style={{ marginTop: 50 }}>Click me to resize the image</Text>
          </TouchableOpacity>
          {this.state.resizedImageUri ? (
            <Image
              style={styles.image}
              source={{ uri: this.state.resizedImageUri }}
            />
          ) : null}

          <TouchableOpacity>
            <Text style={{ marginTop: 30 }} onPress={() => this.submit_image()}>SUBMIT</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>

    );
  }
}
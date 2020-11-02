import React, { Component } from "react";
import {
  Button,
  Text,
  Image,
  View,
  Platform,
  AsyncStorage,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageList from "./ImageList";
import TabBar from "./TabBar";

export default class Gallery extends Component {
  state = {};

  arr = [];

  async componentDidMount() {
    {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    }

    let value = JSON.parse(await AsyncStorage.getItem("imagelist"));
    this.setState({
      image: value,
    });
    {
      if (this.arr != null) {
        this.arr = value;
      }
    }
    console.log(value);
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.arr.push({
        name: result.uri.toString(),
        key: Math.random().toString(),
      });
      await AsyncStorage.setItem("imagelist", JSON.stringify(this.arr));
      let value = JSON.parse(await AsyncStorage.getItem("imagelist"));
      this.setState({
        image: value,
      });
      console.log(this.state.image);
    }
  };

  removeImageHandler = async (key) => {
    console.log(key);
    let removeImage = this.state.image.filter(function (e) {
      return e.key !== key;
    });
    AsyncStorage.setItem("imagelist", JSON.stringify(removeImage));
    this.setState({
      image: removeImage,
    });
    this.arr = removeImage;
  };

  render() {
    const { image } = this.state;
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <TabBar pickImage={this.pickImage} />

        <FlatList
          data={image}
          renderItem={({ item }) => (
            <ImageList
              arr={this.arr}
              item={item}
              removeImageHandler={this.removeImageHandler}
            />
          )}
        />
      </View>
    );
  }
}

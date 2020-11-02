import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Modal,
  Button,
} from "react-native";

import IconAntDesign from "react-native-vector-icons/AntDesign";

export default class ImageList extends Component {
  state = {
    modalOpen: false,
    imageName: "",
  };

  openImage = (name) => {
    this.setState({ modalOpen: true, imageName: name });
  };

  closeImage = () => {
    console.log("close");
    this.setState({
      modalOpen: false,
    });
  };

  render() {
    const { item, removeImageHandler } = this.props;

    return (
      <TouchableOpacity style={styles.item}>
        <Modal animationType="fade" transparent visible={this.state.modalOpen}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableWithoutFeedback>
              <View
                style={{
                  backgroundColor: "#fbf7f0",
                  marginTop: "34%",
                  height: "88%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "11%",
                }}
              >
                <Image
                  source={{ uri: this.state.imageName }}
                  style={{ width: 400, height: 400 }}
                ></Image>
                <Button onPress={() => this.closeImage()} title="Close" />
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>

        <ImageBackground
          source={{ uri: item.name }}
          style={{ width: 340, height: 200 }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "silver",
              opacity: 0.8,
              width: "100%",
              height: "49%",
              marginBottom: "1%",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => this.openImage(item.name)}
          >
            <IconAntDesign color="green" name="eye" size={35}></IconAntDesign>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "silver",
              opacity: 0.8,
              width: "100%",
              height: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => removeImageHandler(item.key)}
          >
            <IconAntDesign color="red" name="delete" size={35}></IconAntDesign>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderColor: "#bbb",
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 15,
  },
});

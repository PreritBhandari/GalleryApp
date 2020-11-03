import React, { Component } from "react";
import {
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import IconAntDesign from "react-native-vector-icons/AntDesign";

export default class TabBar extends Component {
  render() {
    const { pickImage } = this.props;
    return (
      <SafeAreaView style={styles.topbar}>
        <View>
          <TouchableOpacity
            style={{
              paddingBottom: "5%",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={pickImage}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Pick Image &nbsp;&nbsp;&nbsp;&nbsp;
              <IconAntDesign name="pluscircle" size={35}></IconAntDesign>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: "#232b2b",
  },
});

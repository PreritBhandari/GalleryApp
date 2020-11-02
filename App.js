import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Gallery from "./components/Gallery";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Gallery />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

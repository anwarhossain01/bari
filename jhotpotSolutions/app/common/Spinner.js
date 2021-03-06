import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Spinner = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#1C3D75"/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //backgroundColor: 'red',
  },
});

export default Spinner;
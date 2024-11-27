import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const UserSignIn = () => {
  const { width, height } = Dimensions.get("window");

  return (
    <View style={[styles.container, { width, height }]}>
      <Text style={styles.text}>UserSignIn</Text>
    </View>
  );
};

export default UserSignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
  },
});

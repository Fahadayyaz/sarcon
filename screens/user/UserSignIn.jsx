import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const UserSignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"auto"} />
      <Text style={styles.text}>UserSignIn</Text>
    </SafeAreaView>
  );
};

export default UserSignIn;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 30,
  },
});

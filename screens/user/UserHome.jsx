import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const UserHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content__Container}></View>
    </SafeAreaView>
  );
};

export default UserHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content__Container: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
    backgroundColor: "blue",
  },
});

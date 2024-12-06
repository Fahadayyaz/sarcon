import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const ProviderHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={{ color: "#fff" }}>Header goes here</Text>

      <View style={styles.content__container}></View>
    </SafeAreaView>
  );
};

export default ProviderHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(6, 18, 31)",
  },

  content__container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(6, 18, 31)",
  },
});

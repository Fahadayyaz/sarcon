import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const ProviderSignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"auto"} />
      <Text style={styles.text}>Provider SignIn</Text>
    </SafeAreaView>
  );
};

export default ProviderSignIn;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 30,
  },
});

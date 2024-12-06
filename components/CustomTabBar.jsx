import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomTabBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content__container}>
        <Text style={{ color: "#fff" }}>
          this is a text in the tab bar text
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131417",
    position: "absolute",
  },
  content__container: {
    width: "100%",
    height: "30%",
    alignSelf: "center",
    marginBottom: 0,
  },
});

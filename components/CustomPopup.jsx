import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

const CustomPopup = ({ text, children, onPress, text2, source }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.content__container} onPress={onPress}>
        <View style={styles.popup}>
          <Image
            source={source}
            style={{ height: 70.48, width: 70.48, alignSelf: "center" }}
          />
          {children}
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              alignSelf: "center",
              marginTop: 15,
            }}
          >
            {text}
          </Text>
          <Text style={{ fontSize: 14, alignSelf: "center", marginTop: 5 }}>
            {text2}
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default CustomPopup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(47, 128, 237, 0.7)",
    position: "absolute",
  },
  content__container: {
    width: "90%",
    height: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
  popup: {
    backgroundColor: "#fff",
    width: "100%",
    height: "30%",
    borderRadius: 30,
    padding: "5%",
  },
});

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const UserUploadPhoto = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"auto"} />
      <Image
        source={require("./../../assets/topCornerCircles.png")}
        style={{
          width: 100.45,
          height: 114.34,
          top: 0,
          left: -10,
          position: "absolute",
          resizeMode: "contain",
        }}
      />
      <View style={styles.contentContainer}>
        <Image
          source={require("./../../assets/uploadLogo.png")}
          style={{
            width: 147,
            height: 147.67,
            marginTop: "25%",
            alignSelf: "center",
          }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 28 }}>
          Upload Id Card or Passport
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default UserUploadPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    height: "100%",
    width: "90%",
    alignSelf: "center",
    backgroundColor: "blue",
  },
});

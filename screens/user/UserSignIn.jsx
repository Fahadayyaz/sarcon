import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Fontisto from "@expo/vector-icons/Fontisto";

const UserSignIn = () => {
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
      <View style={styles.content__container}>
        <Image
          source={require("./../../assets/phoneMan.png")}
          style={{
            width: 240.84,
            height: 198.75,
            marginTop: "25%",
            alignSelf: "center",
          }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 28, marginTop: 15 }}>
          Sign In
        </Text>
        <Text style={{ color: "gray", fontSize: 14 }}>
          Please login to continue.
        </Text>
        {/* email and password container */}
        <View>
          {/* email container */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 44,
              paddingLeft: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Fontisto
                name="email"
                size={24}
                color="black"
                style={{ paddingRight: 5 }}
              />
              <TextInput placeholder="Email Address" />
            </View>
            <Fontisto
              name="email"
              size={24}
              color="black"
              style={{ marginRight: 15 }}
            />
          </View>
          {/* password container */}
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserSignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content__container: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
    // backgroundColor: "lightblue",
  },
  text: {
    fontSize: 30,
  },
});

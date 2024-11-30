import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const UserForgotPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
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
      <View style={styles.content__Container}>
        <Image
          source={require("./../../assets/forgotPasswordLogo.png")}
          style={{
            width: 163.48,
            height: 163.48,
            marginTop: "25%",
            alignSelf: "center",
          }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 28, marginTop: "5%" }}>
          Forgot Password?
        </Text>
        <Text style={{color:"#8A8A8A", fontSize:14,}}>
        Opps. It happens to the best of us. Input your email to fix the issue.
        </Text>
        <ScrollView></ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UserForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content__Container: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
  },
});

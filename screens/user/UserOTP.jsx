import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const UserOTP = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Image
        source={require("./../../assets/topCornerCircles.png")}
        style={styles.top__corner__image}
      />
      <View style={styles.content__container}>
        <Image
          source={require("./../../assets/otpEnvelopLogo.png")}
          style={styles.otpEnvelopLogo}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontWeight: "bold", fontSize: 28, marginTop: "5%" }}>
            Enter OTP
          </Text>
          <Text style={{ color: "#8A8A8A", fontSize: 14 }}>
            Enter the otp which we send into your email for verfication
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UserOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  top__corner__image: {
    width: 100.45,
    height: 114.34,
    top: 0,
    left: -10,
    position: "absolute",
    resizeMode: "contain",
  },
  content__container: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
  },
  otpEnvelopLogo: {
    width: 163.48,
    height: 163.48,
    marginTop: "25%",
    alignSelf: "center",
  },
});

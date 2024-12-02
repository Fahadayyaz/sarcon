import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const ProviderSignIn = () => {
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false); // State to toggle visibility
  const navigation = useNavigation();

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
          source={require("./../../assets/doorMan.png")}
          style={{
            width: 233.84,
            height: 192.97,
            marginTop: "25%",
            alignSelf: "center",
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontWeight: "bold", fontSize: 28, marginTop: 15 }}>
            Sign In
          </Text>
          <Text style={{ color: "#838383", fontSize: 14 }}>
            Please login to continue.
          </Text>
          {/* email and password container */}
          <View>
            {/* email input container */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: isEmailFocused ? "#0474ED" : "#fff",
                borderRadius: 44,
                paddingLeft: 10,
                marginTop: 15,
                backgroundColor: "#F2F2F2",
              }}
            >
              <Fontisto
                name="email"
                size={24}
                color={isEmailFocused ? "#0474ED" : "#838383"}
                style={{ paddingRight: 5 }}
              />
              <TextInput
                placeholder="Email Address"
                placeholderTextColor={isEmailFocused ? "#0474ED" : "#838383"}
                style={{ width: "100%", height: 48 }}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
            </View>

            {/* password input container */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: isPasswordFocused ? "#0474ED" : "#fff",
                borderRadius: 44,
                paddingHorizontal: 10, // Adjust spacing
                marginTop: 15,
                backgroundColor: "#F2F2F2",
              }}
            >
              <Feather
                name="lock"
                size={24}
                color={isPasswordFocused ? "#0474ED" : "#838383"}
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={isPasswordFocused ? "#0474ED" : "#838383"}
                secureTextEntry={!isPasswordVisible} // Toggle secure entry
                style={{
                  flex: 1, // Take remaining space
                  height: 48,
                }}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!isPasswordVisible)}
              >
                <Feather
                  name={isPasswordVisible ? "eye-off" : "eye"} // Toggle icon
                  size={24}
                  color={isPasswordFocused ? "#0474ED" : "#838383"}
                  style={{ paddingRight: 10 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Pressable
            onPress={() => navigation.navigate("ProviderForgotPassword")}
            style={{ alignSelf: "flex-end", marginTop: 10 }}
          >
            <Text
              style={{ color: "#0474ED", fontSize: 14, fontWeight: "bold" }}
            >
              Forgot password?
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("ProviderSubscriptionPlan")}
            style={{
              width: "100%",
              height: 48,
              backgroundColor: "#0474ED",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 54,
              marginTop: "20%",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>
              Login
            </Text>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: "10%",
            }}
          >
            <Text
              style={{ color: "#838383", fontSize: 14, fontWeight: "bold" }}
            >
              Don't have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate("ProviderSignUp")}>
              <Text
                style={{ color: "#0474ED", fontSize: 14, fontWeight: "bold" }}
              >
                {" "}
                Sign Up
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProviderSignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content__container: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
  },
  text: {
    fontSize: 30,
  },
});

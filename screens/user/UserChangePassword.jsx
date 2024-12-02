import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";

const UserChangePassword = () => {
  // focused
  const [isOldPasswordFocused, setOldPasswordFocused] = useState(false);
  const [isNewPasswordFocused, setNewPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  // visible
  const [isOldPasswordVisible, setOldPasswordVisible] = useState(false); // State to toggle visibility
  const [isNewPasswordVisible, setNewPasswordVisible] = useState(false); // State to toggle visibility
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State to toggle visibility
  const navigation = useNavigation();

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
          source={require("./../../assets/changePasswordLogo.png")}
          style={{
            width: 163.48,
            height: 163.48,
            marginTop: "25%",
            alignSelf: "center",
          }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontWeight: "bold", fontSize: 28, marginTop: "5%" }}>
            Change Password
          </Text>
          <Text style={{ color: "#8A8A8A", fontSize: 14 }}>
            Please enter new credentials
          </Text>
          {/* old password section */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: isOldPasswordFocused ? "#0474ED" : "#fff",
              borderRadius: 44,
              paddingHorizontal: 10, // Adjust spacing
              marginTop: "10%",
              backgroundColor: "#F2F2F2",
            }}
          >
            <Feather
              name="lock"
              size={24}
              color={isOldPasswordFocused ? "#0474ED" : "#838383"}
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Enter New Password"
              placeholderTextColor={
                isOldPasswordFocused ? "#0474ED" : "#838383"
              }
              secureTextEntry={!isOldPasswordVisible} // Toggle secure entry
              style={{
                flex: 1, // Take remaining space
                height: 48,
              }}
              onFocus={() => setOldPasswordFocused(true)}
              onBlur={() => setOldPasswordFocused(false)}
            />
            <TouchableOpacity
              onPress={() => setOldPasswordVisible(!isOldPasswordVisible)}
            >
              <Feather
                name={isOldPasswordVisible ? "eye-off" : "eye"} // Toggle icon
                size={24}
                color={isOldPasswordFocused ? "#0474ED" : "#838383"}
                style={{ paddingRight: 10 }}
              />
            </TouchableOpacity>
          </View>
          {/* new password input container */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: isNewPasswordFocused ? "#0474ED" : "#fff",
              borderRadius: 44,
              paddingHorizontal: 10, // Adjust spacing
              marginTop: 15,
              backgroundColor: "#F2F2F2",
            }}
          >
            <Feather
              name="lock"
              size={24}
              color={isNewPasswordFocused ? "#0474ED" : "#838383"}
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Enter New Password"
              placeholderTextColor={
                isNewPasswordFocused ? "#0474ED" : "#838383"
              }
              secureTextEntry={!isNewPasswordVisible} // Toggle secure entry
              style={{
                flex: 1, // Take remaining space
                height: 48,
              }}
              onFocus={() => setNewPasswordFocused(true)}
              onBlur={() => setNewPasswordFocused(false)}
            />
            <TouchableOpacity
              onPress={() => setNewPasswordVisible(!isNewPasswordVisible)}
            >
              <Feather
                name={isNewPasswordVisible ? "eye-off" : "eye"} // Toggle icon
                size={24}
                color={isNewPasswordFocused ? "#0474ED" : "#838383"}
                style={{ paddingRight: 10 }}
              />
            </TouchableOpacity>
          </View>
          {/* confirm password input container */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: isConfirmPasswordFocused ? "#0474ED" : "#fff",
              borderRadius: 44,
              paddingHorizontal: 10, // Adjust spacing
              marginTop: 15,
              backgroundColor: "#F2F2F2",
            }}
          >
            <Feather
              name="lock"
              size={24}
              color={isConfirmPasswordFocused ? "#0474ED" : "#838383"}
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={
                isConfirmPasswordFocused ? "#0474ED" : "#838383"
              }
              secureTextEntry={!isConfirmPasswordVisible} // Toggle secure entry
              style={{
                flex: 1, // Take remaining space
                height: 48,
              }}
              onFocus={() => setConfirmPasswordFocused(true)}
              onBlur={() => setConfirmPasswordFocused(false)}
            />
            <TouchableOpacity
              onPress={() =>
                setConfirmPasswordVisible(!isConfirmPasswordVisible)
              }
            >
              <Feather
                name={isConfirmPasswordVisible ? "eye-off" : "eye"} // Toggle icon
                size={24}
                color={isConfirmPasswordFocused ? "#0474ED" : "#838383"}
                style={{ paddingRight: 10 }}
              />
            </TouchableOpacity>
          </View>
          {/* submit button */}
          <Pressable
            onPress={() => navigation.navigate("UserEmailVerification")}
            style={{
              width: "100%",
              height: 48,
              backgroundColor: "#0474ED",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 54,
              marginTop: "30%",
              marginBottom: "10%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Submit
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UserChangePassword;

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

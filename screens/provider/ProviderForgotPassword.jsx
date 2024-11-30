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
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const ProviderForgotPassword = () => {
  const [isEmailFocused, setEmailFocused] = useState(false);
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
          source={require("./../../assets/forgotPasswordLogo.png")}
          style={{
            width: 163.48,
            height: 163.48,
            marginTop: "25%",
            alignSelf: "center",
          }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontWeight: "bold", fontSize: 28, marginTop: "5%" }}>
            Forgot Password?
          </Text>
          <Text style={{ color: "#8A8A8A", fontSize: 14 }}>
            Opps. It happens to the best of us. Input your email to fix the
            issue.
          </Text>
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
          {/* submit button */}
          <Pressable
            onPress={() => navigation.navigate("ProviderForgotPassword")}
            style={{
              width: "100%",
              height: 48,
              backgroundColor: "#0474ED",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 54,
              marginTop: "20%",
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
              Login
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProviderForgotPassword;

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

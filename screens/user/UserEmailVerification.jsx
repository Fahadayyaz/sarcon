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

const UserForgotPassword = () => {
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
          source={require("./../../assets/emailVerificationLogo.png")}
          style={{
            width: 163.48,
            height: 163.48,
            marginTop: "25%",
            alignSelf: "center",
          }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontWeight: "bold", fontSize: 28, marginTop: "5%" }}>
            Email Verification
          </Text>
          <Text style={{ color: "#8A8A8A", fontSize: 14 }}>
            We have sent a link at your email abc123@gmail.com verifiy it
          </Text>

          {/* back to login button */}
          <Pressable
            onPress={() => navigation.navigate("UserSignIn")}
            style={{
              width: "100%",
              height: 48,
              backgroundColor: "#0474ED",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 54,
              marginTop: "40%",
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
              Back to Login
            </Text>
          </Pressable>
        </ScrollView>
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

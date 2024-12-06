import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input";
import { useAtom } from "jotai";
import { roleAtom } from "../../state";

export default function SignIn() {
  const navigation = useNavigation();
  const [userRole] = useAtom(roleAtom);

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
          <Input icon={Fontisto} iconName="email" placeholder="Email Address" />
          <Input
            icon={Feather}
            iconName="lock"
            secureTextEntry={true}
            placeholder="Password"
          />
          <Pressable
            onPress={() => navigation.navigate("ForgotPassword")}
            style={{ alignSelf: "flex-end", marginTop: 10 }}
          >
            <Text
              style={{ color: "#0474ED", fontSize: 14, fontWeight: "bold" }}
            >
              Forgot password?
            </Text>
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate(
                userRole === "user" ? "UserRoutes" : "ProviderRoutes"
              )
            }
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
            <Pressable onPress={() => navigation.navigate("SignUp")}>
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
}

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

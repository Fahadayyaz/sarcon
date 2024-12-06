import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Subscribed = () => {
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
          source={require("./../../assets/subscribedSuccessfullyLogo.png")}
          style={{
            width: 332.62,
            height: 330.22,
            marginTop: "40%",
            alignSelf: "center",
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: "5%",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Subscribed Successfully
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "#8A8A8A",
              fontSize: 14,
              alignSelf: "center",
            }}
          >
            Your Subscription has been Successfully
          </Text>
          <Pressable
            onPress={() => navigation.navigate("SignIn")}
            style={{
              width: "100%",
              height: 48,
              backgroundColor: "#0474ED",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 54,
              marginTop: "50%",
              marginBottom: "20%",
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

export default Subscribed;

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

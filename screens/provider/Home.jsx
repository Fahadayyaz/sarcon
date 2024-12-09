import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header__container}>
        <TouchableOpacity>
          <Fontisto name="nav-icon-a" size={12} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: "#fff" }}>Hey,👋Jenifer Alex</Text>
        <View
          style={{
            flexDirection: "row",
            width: 48,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={18}
              color="#fff"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="bell-badge-outline"
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content__container}>
        <View style={styles.inner__container}>
          <View style={styles.upper__two__boxes__container}></View>
          <TouchableOpacity
            style={{
              width: "40%",
              height: "20%",
              backgroundColor: "#F3F4F9",
              borderRadius: 20.31,
            }}
          ></TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
          <View style={styles.lower__two__boxes__container}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(6, 18, 31)",
    alignItems: "center",
  },
  header__container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    width: "90%",
    height: "8%",
    bottom: "1%",
  },
  content__container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
  },
  inner__container: {
    width: "90%",
  },
  upper__two__boxes__container: {
    flexDirection: "row",
  },
  lower__two__boxes__container: {
    flexDirection: "row",
  },
});

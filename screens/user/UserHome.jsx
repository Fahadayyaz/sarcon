import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";

const UserHome = () => {
  const [isEmailFocused, setEmailFocused] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content__Container}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.location__logo}>
              <FontAwesome6 name="location-dot" size={24} color="#0474ED" />
            </View>
            <View style={styles.header__text__box}>
              <Text>My Location</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "#0474ED", fontWeight: "bold" }}>
                  Barcelona, Spain
                </Text>
                <AntDesign
                  name="down"
                  size={14}
                  color="black"
                  style={{ marginTop: 3, marginLeft: 5 }}
                />
              </View>
            </View>
          </View>
          <View style={styles.header__display__picture}></View>
        </View>
        {/* email input container */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: isEmailFocused ? "#0474ED" : "#C9C9C9",
            borderRadius: 44,
            paddingLeft: 10,
            marginTop: 15,
            backgroundColor: "#F2F2F2",
          }}
        >
          <Fontisto
            name="search"
            size={24}
            color={isEmailFocused ? "#0474ED" : "#838383"}
            style={{ paddingRight: 5 }}
          />
          <TextInput
            placeholder="Search here"
            placeholderTextColor={isEmailFocused ? "#0474ED" : "#C9C9C9"}
            style={{ width: "100%", height: 48 }}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Categories</Text>
          <Pressable>
            <Text style={{ color: "#0474ED", fontWeight: "bold" }}>
              See all
            </Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexDirection: "row", paddingVertical: 10 }}
          style={{ width: "100%" }}
        >
          <View
            style={{
              width: 93,
              height: 131,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "gray",
              borderRadius: 11,
              marginRight: 10,
            }}
          >
            <Text>Power Tools</Text>
          </View>
          <View
            style={{
              width: 93,
              height: 131,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "gray",
              borderRadius: 11,
              marginRight: 10,
            }}
          >
            <Text>Power Tools</Text>
          </View>
          <View
            style={{
              width: 93,
              height: 131,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "gray",
              borderRadius: 11,
              marginRight: 10,
            }}
          >
            <Text>Lifting Tools</Text>
          </View>
          <View
            style={{
              width: 93,
              height: 131,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "gray",
              borderRadius: 11,
              marginRight: 10,
            }}
          >
            <Text>Cutting Tools</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UserHome;

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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  location__logo: {
    width: 55,
    height: 53,
    borderRadius: 9,
    backgroundColor: "#F2F8FE",
    justifyContent: "center",
    alignItems: "center",
  },
  header__text__box: {
    marginLeft: 10,
    justifyContent: "center",
  },
  header__display__picture: {
    width: 49,
    height: 49,
    borderRadius: 50,
    backgroundColor: "orange",
  },
});

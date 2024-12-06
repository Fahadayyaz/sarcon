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
          <View style={styles.header__display__picture}>
            <Image
              source={require("./../../assets/userDp.png")}
              style={{
                width: 49,
                height: 49,
                alignSelf: "center",
              }}
            />
          </View>
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
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            All Categories
          </Text>
          <Pressable>
            <Text style={{ color: "#0474ED", fontWeight: "bold" }}>
              See all
            </Text>
          </Pressable>
        </View>

        {/* First horizontal ScrollView */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width: "100%", marginTop: 10 }}
        >
          <Pressable style={styles.power__Tools__Card}>
            <Image
              source={require("./../../assets/powerTool.png")}
              style={{
                width: 72,
                height: 72,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontSize: 11,
                fontWeight: "medium",
                textAlign: "center",
              }}
            >
              Power Tools
            </Text>
          </Pressable>
          <Pressable style={styles.hand__Tools__Card}>
            <Image
              source={require("./../../assets/handTool.png")}
              style={{
                width: 61,
                height: 55.02,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontSize: 11,
                fontWeight: "medium",
                textAlign: "center",
              }}
            >
              Hand Tools
            </Text>
          </Pressable>
          <Pressable style={styles.cutting__Tools__Card}>
            <Image
              source={require("./../../assets/cuttingTool.png")}
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontSize: 11,
                fontWeight: "medium",
                textAlign: "center",
              }}
            >
              Cutting Tools
            </Text>
          </Pressable>
          <Pressable style={styles.lifting__Tools__Card}>
            <Image
              source={require("./../../assets/liftingTool.png")}
              style={{
                width: 33.39,
                height: 50.32,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontSize: 11,
                fontWeight: "medium",
                textAlign: "center",
              }}
            >
              Lifting Tools
            </Text>
          </Pressable>
        </ScrollView>

        {/* Second horizontal ScrollView */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width: "100%", marginTop: 10 }}
        >
          <Pressable style={styles.havac__Tools__Card}>
            <Image
              source={require("./../../assets/hvacTools.png")}
              style={{
                width: 48.87,
                height: 46.69,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontSize: 11,
                fontWeight: "medium",
                textAlign: "center",
              }}
            >
              Havac Tools
            </Text>
          </Pressable>
          <Pressable style={styles.gardening__Tools__Card}>
            <Image
              source={require("./../../assets/gardeningTools.png")}
              style={{
                width: 78.09,
                height: 50.53,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontSize: 11,
                fontWeight: "medium",
                textAlign: "center",
              }}
            >
              Gardening Tools
            </Text>
          </Pressable>
          <Pressable style={styles.welding__Tools__Card}>
            <Image
              source={require("./../../assets/weldingHelmets.png")}
              style={{
                width: 50,
                height: 58.92,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontSize: 11,
                fontWeight: "medium",
                textAlign: "center",
              }}
            >
              Welding Tools
            </Text>
          </Pressable>
          <Pressable style={styles.cleaning__Tools__Card}>
            <Image
              source={require("./../../assets/cleaningTools.png")}
              style={{
                width: 68,
                height: 68,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontSize: 11,
                fontWeight: "medium",
                textAlign: "center",
              }}
            >
              Cleaning Tools
            </Text>
          </Pressable>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Recomended for you
          </Text>
          <Pressable>
            <Text style={{ color: "#0474ED", fontWeight: "bold" }}>
              See all
            </Text>
          </Pressable>
        </View>
        <View style={styles.recomended__first}>
            
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content__Container: {
    width: "90%",
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
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  power__Tools__Card: {
    width: 93,
    height: 131,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F8FE",
    borderRadius: 11,
    marginRight: 10,
  },
  hand__Tools__Card: {
    width: 93,
    height: 131,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F8FE",
    borderRadius: 11,
    marginRight: 10,
  },
  cutting__Tools__Card: {
    width: 93,
    height: 131,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F8FE",
    borderRadius: 11,
    marginRight: 10,
  },
  lifting__Tools__Card: {
    width: 93,
    height: 131,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F8FE",
    borderRadius: 11,
    marginRight: 10,
  },
  havac__Tools__Card: {
    width: 93,
    height: 131,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F8FE",
    borderRadius: 11,
    marginRight: 10,
  },
  gardening__Tools__Card: {
    width: 93,
    height: 131,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F8FE",
    borderRadius: 11,
    marginRight: 10,
  },
  welding__Tools__Card: {
    width: 93,
    height: 131,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F8FE",
    borderRadius: 11,
    marginRight: 10,
  },
  cleaning__Tools__Card: {
    width: 93,
    height: 131,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F8FE",
    borderRadius: 11,
    marginRight: 10,
  },
});

export default UserHome;

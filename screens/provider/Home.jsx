import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
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
      <ScrollView style={styles.content__container}>
        <View style={styles.inner__container}>
          <View style={styles.upper__two__boxes__container}>
            <TouchableOpacity
              style={{
                width: "48%",
                height: 161.02,
                justifyContent: "center",
                backgroundColor: "#F3F4F9",
                borderRadius: 20.31,
              }}
            >
              <View
                style={{
                  width: "80%",
                  height: "80%",
                  // backgroundColor: "red",
                  alignSelf: "center",
                }}
              >
                <Pressable
                  style={{
                    width: 26.11,
                    height: 26.11,
                    borderRadius: 24,
                    backgroundColor: "#3474FF",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "flex-end",
                  }}
                >
                  <Feather name="arrow-up-right" size={18} color="#FEFEFE" />
                </Pressable>
                <Image
                  source={require("./../../assets/createService.png")}
                  style={{
                    width: 42,
                    height: 42.99,
                    marginTop: 10,
                  }}
                />
                <Text
                  style={{
                    fontSize: 14.51,
                    marginTop: 10,
                    color: "#1E1E1E",
                    fontWeight: "bold",
                  }}
                >
                  Create Service
                </Text>
                <Text
                  style={{
                    fontSize: 13.06,
                    color: "#1E1E1E",
                  }}
                >
                  Add New
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "48%",
                height: 161.02,
                justifyContent: "center",
                backgroundColor: "#F3F4F9",
                borderRadius: 20.31,
              }}
            >
              <View
                style={{
                  width: "80%",
                  height: "80%",
                  // backgroundColor: "red",
                  alignSelf: "center",
                }}
              >
                <Pressable
                  style={{
                    width: 26.11,
                    height: 26.11,
                    borderRadius: 24,
                    backgroundColor: "#3474FF",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "flex-end",
                  }}
                >
                  <Feather name="arrow-up-right" size={18} color="#FEFEFE" />
                </Pressable>
                <Image
                  source={require("./../../assets/createService.png")}
                  style={{
                    width: 42,
                    height: 42.99,
                    marginTop: 10,
                  }}
                />
                <Text
                  style={{
                    fontSize: 14.51,
                    marginTop: 10,
                    color: "#1E1E1E",
                    fontWeight: "bold",
                  }}
                >
                  Create Service
                </Text>
                <Text
                  style={{
                    fontSize: 13.06,
                    color: "#1E1E1E",
                  }}
                >
                  Add New
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.lower__two__boxes__container}>
            <TouchableOpacity
              style={{
                width: "48%",
                height: 161.02,
                justifyContent: "center",
                backgroundColor: "#F3F4F9",
                borderRadius: 20.31,
              }}
            >
              <View
                style={{
                  width: "80%",
                  height: "80%",
                  // backgroundColor: "red",
                  alignSelf: "center",
                }}
              >
                <Pressable
                  style={{
                    width: 26.11,
                    height: 26.11,
                    borderRadius: 24,
                    backgroundColor: "#3474FF",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "flex-end",
                  }}
                >
                  <Feather name="arrow-up-right" size={18} color="#FEFEFE" />
                </Pressable>
                <Image
                  source={require("./../../assets/createService.png")}
                  style={{
                    width: 42,
                    height: 42.99,
                    marginTop: 10,
                  }}
                />
                <Text
                  style={{
                    fontSize: 14.51,
                    marginTop: 10,
                    color: "#1E1E1E",
                    fontWeight: "bold",
                  }}
                >
                  Create Service
                </Text>
                <Text
                  style={{
                    fontSize: 13.06,
                    color: "#1E1E1E",
                  }}
                >
                  Add New
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "48%",
                height: 161.02,
                justifyContent: "center",
                backgroundColor: "#F3F4F9",
                borderRadius: 20.31,
              }}
            >
              <View
                style={{
                  width: "80%",
                  height: "80%",
                  // backgroundColor: "red",
                  alignSelf: "center",
                }}
              >
                <Pressable
                  style={{
                    width: 26.11,
                    height: 26.11,
                    borderRadius: 24,
                    backgroundColor: "#3474FF",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "flex-end",
                  }}
                >
                  <Feather name="arrow-up-right" size={18} color="#FEFEFE" />
                </Pressable>
                <Image
                  source={require("./../../assets/createService.png")}
                  style={{
                    width: 42,
                    height: 42.99,
                    marginTop: 10,
                  }}
                />
                <Text
                  style={{
                    fontSize: 14.51,
                    marginTop: 10,
                    color: "#1E1E1E",
                    fontWeight: "bold",
                  }}
                >
                  Create Service
                </Text>
                <Text
                  style={{
                    fontSize: 13.06,
                    color: "#1E1E1E",
                  }}
                >
                  Add New
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    height: "100%",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    // backgroundColor: "pink",
  },
  upper__two__boxes__container: {
    flexDirection: "row",
    width: "100%",
    height: 161.02,
    justifyContent: "space-between",
  },
  lower__two__boxes__container: {
    width: "100%",
    height: 161.02,
    marginTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

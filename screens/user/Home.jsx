import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { categories } from "../../constants";

const Home = () => {
  const [isEmailFocused, setEmailFocused] = useState(false);

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
        <ScrollView
          vertical
          showsVerticalScrollIndicator={false}
          style={{
            width: "100%",
            marginTop: 10,
          }}
        >
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
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginTop: 10,
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
            }}
          >
            {categories.slice(0, 6).map((category) => (
              <Pressable key={category.id} style={styles.power__Tools__Card}>
                <Image
                  source={{ uri: category.image }}
                  style={{
                    width: 72,
                    height: 72,
                    alignSelf: "center",
                    borderRadius: 12,
                  }}
                />
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "medium",
                    textAlign: "center",
                  }}
                >
                  {category.name}
                </Text>
              </Pressable>
            ))}
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              marginTop: "10%",
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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              width: "100%",
              marginTop: 10,
            }}
          >
            <View style={styles.recomended__box}>
              <View
                style={{
                  width: "90%",
                  height: 155,
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("./../../assets/powerToolsThumbnail.png")}
                  style={{
                    width: "100%",
                    height: 115,
                    borderRadius: 12,
                    marginTop: 10,
                  }}
                />
                <View
                  style={{
                    width: "100%",
                    top: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>Power Tools</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      $18/
                    </Text>
                    <Text style={{ fontSize: 16 }}> hr</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <Image
                    source={require("./../../assets/fiveStars.png")}
                    style={{
                      width: 89.46,
                      height: 17.89,
                      marginLeft: -2,
                    }}
                  />
                  <Text style={{ fontSize: 11, color: "#777777" }}>
                    {"(240 Reviews)"}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.recomended__box}>
              <View
                style={{
                  width: "90%",
                  height: 155,
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("./../../assets/powerToolsThumbnail.png")}
                  style={{
                    width: "100%",
                    height: 115,
                    borderRadius: 12,
                    marginTop: 10,
                  }}
                />
                <View
                  style={{
                    width: "100%",
                    top: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>Power Tools</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      $18/
                    </Text>
                    <Text style={{ fontSize: 16 }}> hr</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <Image
                    source={require("./../../assets/fiveStars.png")}
                    style={{
                      width: 89.46,
                      height: 17.89,
                      marginLeft: -2,
                    }}
                  />
                  <Text style={{ fontSize: 11, color: "#777777" }}>
                    {"(240 Reviews)"}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.recomended__box}>
              <View
                style={{
                  width: "90%",
                  height: 155,
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("./../../assets/powerToolsThumbnail.png")}
                  style={{
                    width: "100%",
                    height: 115,
                    borderRadius: 12,
                    marginTop: 10,
                  }}
                />
                <View
                  style={{
                    width: "100%",
                    top: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>Power Tools</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      $18/
                    </Text>
                    <Text style={{ fontSize: 16 }}> hr</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <Image
                    source={require("./../../assets/fiveStars.png")}
                    style={{
                      width: 89.46,
                      height: 17.89,
                      marginLeft: -2,
                    }}
                  />
                  <Text style={{ fontSize: 11, color: "#777777" }}>
                    {"(240 Reviews)"}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

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
    width: "30%",
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F8FE",
    borderRadius: 11,
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

  recomended__box: {
    width: 210,
    height: 170,
    borderRadius: 12,
    marginTop: 17,
    marginRight: 10,
    backgroundColor: "#F2F8FE",
  },
});

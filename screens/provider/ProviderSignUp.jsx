import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import React from "react";

import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input";

const ProviderSignUp = () => {
  const navigation = useNavigation();

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
          source={require("./../../assets/phoneMan.png")}
          style={{
            width: 147,
            height: 147.67,
            marginTop: "25%",
            alignSelf: "center",
          }}
        />
        <ScrollView
          style={{ height: "100%", width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={{ fontWeight: "bold", fontSize: 28, marginTop: 15 }}>
            Sign Up
          </Text>
          <Text style={{ color: "#838383", fontSize: 14 }}>
            Please SignUp to join us.
          </Text>
          <Input icon={EvilIcons} iconName="user" placeholder="Name" />
          <Input icon={Fontisto} iconName="email" placeholder="Email Address" />
          <Input icon={Feather} iconName="phone" placeholder="Phone" />
          <Input
            icon={Feather}
            iconName="lock"
            secureTextEntry={true}
            placeholder="Password"
          />
          <Input
            icon={Feather}
            iconName="lock"
            secureTextEntry={true}
            placeholder="Confirm Password"
          />
          <Input icon={EvilIcons} iconName="location" placeholder="Address" />
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                title="Marker Title"
                description="Marker Description"
              />
            </MapView>
          </View>
          <Text style={{ color: "#838383", fontSize: 14, marginTop: "10%" }}>
            I agree to terms and conditions and privacy.
          </Text>
          <Pressable
            onPress={() => navigation.navigate("ProviderUploadPhoto")}
            style={{
              width: "100%",
              height: 48,
              backgroundColor: "#0474ED",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 54,
              marginTop: "5%",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>
              SignUp
            </Text>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: 20,
              marginBottom: 40,
            }}
          >
            <Text
              style={{ color: "#838383", fontSize: 14, fontWeight: "bold" }}
            >
              Already have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate("ProviderSignIn")}>
              <Text
                style={{ color: "#0474ED", fontSize: 14, fontWeight: "bold" }}
              >
                {" "}
                Login
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProviderSignUp;

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
  mapContainer: {
    height: 150,
    marginTop: 20,
    borderRadius: 24,
    overflow: "hidden",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

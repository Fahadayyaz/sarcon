import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useState } from "react";

import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const UserSignUp = () => {
  const [isNameFocused, setNameFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPhoneFocused, setPhoneFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false); // State to toggle visibility
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State to toggle visibility
  const [isAddressFocused, setAddressFocused] = useState(false);

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
          {/* SignUp form container */}
          <View>
            {/* name input container */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: isNameFocused ? "#0474ED" : "#fff",
                borderRadius: 44,
                paddingLeft: 10,
                marginTop: 15,
                backgroundColor: "#F2F2F2",
              }}
            >
              <EvilIcons
                name="user"
                size={34}
                color={isNameFocused ? "#0474ED" : "#838383"}
                style={{ marginLeft: -5, paddingRight: -10 }}
              />
              <TextInput
                placeholder="Name"
                placeholderTextColor={isNameFocused ? "#0474ED" : "#838383"}
                style={{ width: "100%", height: 48 }}
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
              />
            </View>
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

            {/* phone input container */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: isPhoneFocused ? "#0474ED" : "#fff",
                borderRadius: 44,
                paddingLeft: 10,
                marginTop: 15,
                backgroundColor: "#F2F2F2",
              }}
            >
              <Feather
                name="phone"
                size={24}
                color={isPhoneFocused ? "#0474ED" : "#838383"}
                style={{ paddingRight: 5 }}
              />
              <TextInput
                placeholder="Phone"
                placeholderTextColor={isPhoneFocused ? "#0474ED" : "#838383"}
                style={{ width: "100%", height: 48 }}
                onFocus={() => setPhoneFocused(true)}
                onBlur={() => setPhoneFocused(false)}
              />
            </View>

            {/* password input container */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: isPasswordFocused ? "#0474ED" : "#fff",
                borderRadius: 44,
                paddingHorizontal: 10, // Adjust spacing
                marginTop: 15,
                backgroundColor: "#F2F2F2",
              }}
            >
              <Feather
                name="lock"
                size={24}
                color={isPasswordFocused ? "#0474ED" : "#838383"}
                style={{ marginRight: 5 }}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={isPasswordFocused ? "#0474ED" : "#838383"}
                secureTextEntry={!isPasswordVisible} // Toggle secure entry
                style={{
                  flex: 1, // Take remaining space
                  height: 48,
                }}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!isPasswordVisible)}
              >
                <Feather
                  name={isPasswordVisible ? "eye-off" : "eye"} // Toggle icon
                  size={24}
                  color={isPasswordFocused ? "#0474ED" : "#838383"}
                  style={{ paddingRight: 10 }}
                />
              </TouchableOpacity>
            </View>
            {/* confirm password input container */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: isConfirmPasswordFocused ? "#0474ED" : "#fff",
                borderRadius: 44,
                paddingHorizontal: 10, // Adjust spacing
                marginTop: 15,
                backgroundColor: "#F2F2F2",
              }}
            >
              <Feather
                name="lock"
                size={24}
                color={isConfirmPasswordFocused ? "#0474ED" : "#838383"}
                style={{ marginRight: 5 }}
              />
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor={
                  isConfirmPasswordFocused ? "#0474ED" : "#838383"
                }
                secureTextEntry={!isConfirmPasswordVisible} // Toggle secure entry
                style={{
                  flex: 1, // Take remaining space
                  height: 48,
                }}
                onFocus={() => setConfirmPasswordFocused(true)}
                onBlur={() => setConfirmPasswordFocused(false)}
              />
              <TouchableOpacity
                onPress={() =>
                  setConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
              >
                <Feather
                  name={isConfirmPasswordVisible ? "eye-off" : "eye"} // Toggle icon
                  size={24}
                  color={isConfirmPasswordFocused ? "#0474ED" : "#838383"}
                  style={{ paddingRight: 10 }}
                />
              </TouchableOpacity>
            </View>
            {/* address input container */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: isAddressFocused ? "#0474ED" : "#fff",
                borderRadius: 44,
                paddingLeft: 10,
                marginTop: 15,
                backgroundColor: "#F2F2F2",
              }}
            >
              <EvilIcons
                name="location"
                size={34}
                color={isAddressFocused ? "#0474ED" : "#838383"}
                style={{ marginLeft: -5, paddingRight: -10 }}
              />
              <TextInput
                placeholder="Address"
                placeholderTextColor={isAddressFocused ? "#0474ED" : "#838383"}
                style={{ width: "100%", height: 48 }}
                onFocus={() => setAddressFocused(true)}
                onBlur={() => setAddressFocused(false)}
              />
            </View>
          </View>
          {/* map here */}
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 37.78825, // Default latitude
                longitude: -122.4324, // Default longitude
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
          {/* terms and conditions text */}
          <Text style={{ color: "#838383", fontSize: 14, marginTop: "10%" }}>
            I agree to terms and conditions and privacy.
          </Text>
          <Pressable
            onPress={() => navigation.navigate("UserUploadPhoto")}
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
            <Pressable onPress={() => navigation.navigate("UserSignIn")}>
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

export default UserSignUp;

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

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import { RadioButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Login = ({ navigation }) => {
  const [checked, setChecked] = useState("user");

  const handleNavigation = () => {
    if (checked === "user") {
      navigation.navigate("UserSignIn");
    } else if (checked === "provider") {
      navigation.navigate("ProviderSignIn");
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="auto" backgroundColor="#ffffff" />
      <View style={styles.contentContainer}>
        <Image
          source={require("./../assets/sarconIcon.png")}
          style={{
            width: 184,
            height: 62,
            alignSelf: "center",
            marginBottom: 40,
          }}
        />
        <ScrollView>
          <Text style={{ fontWeight: "bold", fontSize: 28 }}>Are You!</Text>
          <Text style={{ color: "gray", fontSize: 14 }}>
            Please Select your role for this app.
          </Text>

          {/* User Radio Button */}
          <View style={styles.radioContainer}>
            <RadioButton
              value="user"
              status={checked === "user" ? "checked" : "unchecked"}
              onPress={() => setChecked("user")}
            />
            <Text style={styles.radio__Text}>User</Text>
          </View>
          <View
            style={[
              styles.card,
              { borderColor: checked === "user" ? "#0474ED" : "#cccccc" }, // Change border color based on selection
            ]}
          >
            <Image
              source={require("./../assets/userSide.png")}
              style={{
                width: "100%",
                height: 201,
                borderRadius: 22,
              }}
            />
          </View>

          {/* Provider Radio Button */}
          <View style={styles.radioContainer}>
            <RadioButton
              value="provider"
              status={checked === "provider" ? "checked" : "unchecked"}
              onPress={() => setChecked("provider")}
            />
            <Text style={styles.radio__Text}>Provider</Text>
          </View>
          <View
            style={[
              styles.card,
              { borderColor: checked === "provider" ? "#0474ED" : "#cccccc" }, // Change border color based on selection
            ]}
          >
            <Image
              source={require("./../assets/providerSide.png")}
              style={{
                width: "100%",
                height: 201,
                borderRadius: 22,
              }}
            />
          </View>
          <Pressable
            style={{
              width: 135,
              height: 48,
              backgroundColor: "#0474ED",
              borderRadius: 54,
              marginTop: 15,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
            }}
            onPress={handleNavigation} // Call navigation function onPress
          >
            <AntDesign name="arrowright" size={24} color="white" />
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  contentContainer: {
    width: "90%",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  radio__Text: {
    fontSize: 16,
    color: "black",
  },
  card: {
    borderRadius: 24,
    borderWidth: 3,
    marginTop: 10, // Add spacing between cards
  },
});

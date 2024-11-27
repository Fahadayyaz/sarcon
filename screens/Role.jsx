import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { RadioButton } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context"; // Expo-compatible SafeAreaView

const Login = () => {
  const [checked, setChecked] = useState("user"); // State to manage selected option

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
          <Text style={styles.radioText}>User</Text>
        </View>

        {/* Provider Radio Button */}
        <View style={styles.radioContainer}>
          <RadioButton
            value="provider"
            status={checked === "provider" ? "checked" : "unchecked"}
            onPress={() => setChecked("provider")}
          />
          <Text style={styles.radioText}>Provider</Text>
        </View>
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
  radioText: {
    fontSize: 16,
    color: "black",
  },
});

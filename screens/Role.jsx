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
  const [selected, setSelected] = useState("user");

  const handleNavigation = () => {
    navigation.navigate(checked === "user" ? "UserSignIn" : "ProviderSignIn");
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
          <RoleButton
            checked={selected}
            setChecked={setSelected}
            image={require("./../assets/userSide.png")}
            label="user"
          />
          <RoleButton
            checked={selected}
            setChecked={setSelected}
            image={require("./../assets/providerSide.png")}
            label="provider"
          />
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
            onPress={handleNavigation}
          >
            <AntDesign name="arrowright" size={24} color="white" />
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

function RoleButton({ checked, setChecked, image, label }) {
  return (
    <>
      <View style={styles.radioContainer}>
        <RadioButton
          value={label}
          onPress={() => setChecked(label)}
          status={checked === label ? "checked" : "unchecked"}
        />
        <Text style={styles.radio__Text}>{label}</Text>
      </View>
      <Pressable
        onPress={() => setChecked(label)}
        style={{
          ...styles.card,
          borderColor: checked === label ? "#0474ED" : "#cccccc",
        }}
      >
        <Image
          source={image}
          style={{ width: "100%", height: 201, borderRadius: 22 }}
        />
      </Pressable>
    </>
  );
}

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
    textTransform: "capitalize",
  },
  card: {
    borderRadius: 24,
    borderWidth: 3,
    marginTop: 10,
  },
});

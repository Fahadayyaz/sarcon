import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import { RadioButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useAtom } from "jotai";
import { roleAtom } from "../../state";

const roles = {
  user: "user",
  provider: "provider",
};

export default function Role({ navigation }) {
  const [selected, setSelected] = useAtom(roleAtom);

  const handleNavigation = () => {
    if (!selected) return alert("Please select a role to continue.");

    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="auto" backgroundColor="#ffffff" />
      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/sarconIcon.png")}
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
            isSelected={selected === roles.user}
            onPress={() => setSelected(roles.user)}
            image={require("../../assets/userSide.png")}
            label={roles.user}
          />
          <RoleButton
            isSelected={selected === roles.provider}
            onPress={() => setSelected(roles.provider)}
            image={require("../../assets/providerSide.png")}
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
}

function RoleButton({ isSelected, onPress, image, label }) {
  return (
    <>
      <View style={styles.radioContainer}>
        <RadioButton
          value={label}
          onPress={onPress}
          status={isSelected ? "checked" : "unchecked"}
        />
        <Text style={styles.radio__Text}>{label}</Text>
      </View>
      <Pressable
        onPress={onPress}
        style={{
          ...styles.card,
          borderColor: isSelected ? "#0474ED" : "#cccccc",
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

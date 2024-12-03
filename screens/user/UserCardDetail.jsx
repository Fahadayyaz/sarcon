import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const UserCardDetail = () => {
  const [isNameFocused, setNameFocused] = useState(false);
  const [isCardNumberFocused, setCardNumberFocused] = useState(false);
  const [isExpiryDateFocused, setExpiryDateFocused] = useState(false);
  const [isCvvFocused, setCvvFocused] = useState(false);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* Header Section */}
      <View style={styles.header__box}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            width: 48,
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </Pressable>
        <Text style={styles.header__text}>Card Detail</Text>
      </View>
      <View style={styles.content__container}>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 20 }}>
          Enter Detail
        </Text>
        <ScrollView
          style={{
            width: "100%",
            height: "100%",
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* name section */}
          <Text style={styles.input__heading}>Name</Text>
          {/* name input container */}
          <View
            style={{
              alignItems: "center",
              borderWidth: 1,
              borderColor: isNameFocused ? "#0474ED" : "#fff",
              borderRadius: 44,
              paddingLeft: 10,
              marginTop: 10,
              backgroundColor: "#F2F2F2",
            }}
          >
            <TextInput
              placeholder="Jenner Annie"
              placeholderTextColor={isNameFocused ? "#0474ED" : "#838383"}
              style={styles.input}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
            />
          </View>

          {/* card number section */}
          <Text style={styles.input__heading}>Card Number</Text>
          {/* card number input container */}
          <View
            style={{
              alignItems: "center",
              borderWidth: 1,
              borderColor: isCardNumberFocused ? "#0474ED" : "#fff",
              borderRadius: 44,
              paddingLeft: 10,
              marginTop: 10,
              backgroundColor: "#F2F2F2",
            }}
          >
            <TextInput
              placeholder="4111 - 1111 - 1111 - 1111"
              placeholderTextColor={isCardNumberFocused ? "#0474ED" : "#838383"}
              style={styles.input}
              onFocus={() => setCardNumberFocused(true)}
              onBlur={() => setCardNumberFocused(false)}
            />
          </View>
          {/* Expiry date section */}
          <Text style={styles.input__heading}>Expiry Date</Text>
          {/* Expiry date input container */}
          <View
            style={{
              alignItems: "center",
              borderWidth: 1,
              borderColor: isExpiryDateFocused ? "#0474ED" : "#fff",
              borderRadius: 44,
              paddingLeft: 10,
              marginTop: 10,
              backgroundColor: "#F2F2F2",
            }}
          >
            <TextInput
              placeholder="10/2025"
              placeholderTextColor={isExpiryDateFocused ? "#0474ED" : "#838383"}
              style={styles.input}
              onFocus={() => setExpiryDateFocused(true)}
              onBlur={() => setExpiryDateFocused(false)}
            />
          </View>
          {/* Cvv section */}
          <Text style={styles.input__heading}>Cvv</Text>
          {/* Cvv input container */}
          <View
            style={{
              alignItems: "center",
              borderWidth: 1,
              borderColor: isCvvFocused ? "#0474ED" : "#fff",
              borderRadius: 44,
              paddingLeft: 10,
              marginTop: 10,
              backgroundColor: "#F2F2F2",
            }}
          >
            <TextInput
              placeholder="045"
              placeholderTextColor={isCvvFocused ? "#0474ED" : "#838383"}
              style={styles.input}
              onFocus={() => setCvvFocused(true)}
              onBlur={() => setCvvFocused(false)}
            />
          </View>
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UserCardDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header__box: {
    flexDirection: "row",
    borderBottomLeftRadius: 24,
    width: "100%",
    height: "8%",
    backgroundColor: "#000",
    alignItems: "center",
  },
  header__text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  content__container: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
  },
  input__heading: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 48,
  },
});

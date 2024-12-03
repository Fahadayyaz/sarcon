import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

const UserPayments = ({ route, navigation }) => {
  const { selectedPlan } = route.params;

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handleRadioButtonPress = () => {
    setSelectedPaymentMethod(
      selectedPaymentMethod === "apple" ? null : "apple"
    );
  };

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
        <Text style={styles.header__text}>Subscription Plan</Text>
      </View>
      <View style={styles.content__container}>
        <LinearGradient
          colors={["#fff", "#0474ED"]}
          start={{ x: 0, y: 0 }} // Start from left
          end={{ x: 4, y: 4 }} // End at right
          style={styles.planBox}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.planText}>{selectedPlan.name}</Text>
            <Text style={styles.planText}>{selectedPlan.price}</Text>
          </View>
          <Text style={styles.plan__description}>
            Description: {selectedPlan.description}
          </Text>
        </LinearGradient>
        {/* Payment options */}
        <View
          style={{
            width: "100%",
            height: 60.33,
            flexDirection: "row",
            borderRadius: 12.93,
            backgroundColor: "#F3F4F9",
            marginTop: "5%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Ionicons name="logo-apple" size={24} color="#999999" />
          <Text style={{ fontSize: 18, marginLeft: "-40%" }}>Apple Pay</Text>

          {/* Radio Button */}
          <TouchableOpacity
            onPress={handleRadioButtonPress}
            style={styles.radioButtonContainer}
          >
            <View
              style={[
                styles.radioButton,
                selectedPaymentMethod === "apple" && styles.radioButtonSelected,
              ]}
            />
          </TouchableOpacity>
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
  header__box: {
    flexDirection: "row",
    borderBottomLeftRadius: 24,
    width: "100%",
    height: "8%",
    backgroundColor: "#000",
    alignItems: "center",
    paddingHorizontal: 10,
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
    alignItems: "center",
  },
  planBox: {
    marginTop: "10%",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  planText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  plan__description: {
    fontSize: 16,
    color: "#333",
  },
  radioButtonContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1.3,
    borderColor: "#0474ED",
  },
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 50,

    backgroundColor: "transparent",
  },
  radioButtonSelected: {
    backgroundColor: "#0474ED",
    borderRadius: 50,
  },
});

export default UserPayments;

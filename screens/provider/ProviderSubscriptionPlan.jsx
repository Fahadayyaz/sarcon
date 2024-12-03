import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProviderSubscriptionPlan = ({ navigation }) => {
  const [selectedPlanId, setSelectedPlanId] = useState(null); // State to track the selected card

  const plans = [
    {
      id: 1,
      name: "Plan1",
      price: "$12/month",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 2,
      name: "Plan2",
      price: "$14/month",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 3,
      name: "Plan3",
      price: "$16/month",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

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

      {/* Plans Section */}
      <View style={styles.content__container}>
        {plans.map((plan) => (
          <TouchableOpacity
            key={plan.id}
            style={[
              styles.planBox,
              selectedPlanId === plan.id && { backgroundColor: "#0474ED" }, // Red background for the selected plan
            ]}
            onPress={() => {
              setSelectedPlanId(plan.id); // Set the touched plan's ID
              navigation.navigate("ProviderPayments", { selectedPlan: plan });
            }}
          >
            <View style={styles.planRow}>
              <Text
                style={[
                  styles.planText,
                  selectedPlanId === plan.id && { color: "#fff" }, // Text color white for the selected plan
                ]}
              >
                {plan.name}
              </Text>
              <Text
                style={[
                  styles.priceText,
                  selectedPlanId === plan.id && { color: "#fff" }, // Text color white for the selected plan
                ]}
              >
                {plan.price}
              </Text>
            </View>
            <Text
              style={[
                styles.planDescription,
                selectedPlanId === plan.id && { color: "#fff" }, // Text color white for the selected plan
              ]}
            >
              {plan.description}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content__container: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 140,
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
  planBox: {
    width: "100%",
    padding: 20,
    backgroundColor: "#F3F4F9",
    borderRadius: 11,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  planRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  planText: {
    fontSize: 16,
    fontWeight: "900",
    color: "#333",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "900",
    color: "#0474ED",
  },
  planDescription: {
    marginTop: 10,
    color: "#666",
  },
});

export default ProviderSubscriptionPlan;

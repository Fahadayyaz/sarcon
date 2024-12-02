import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProviderPayments = ({ route }) => {
  const { selectedPlan } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Details</Text>
      <View style={styles.planBox}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  planBox: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
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
});

export default ProviderPayments;

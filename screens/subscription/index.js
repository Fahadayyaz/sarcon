import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardDetails from "./CardDetails";
import Subscribed from "./Subscribed";
import PaymentMethods from "./PaymentMethods";
import SubscriptionPlan from "./SubscriptionPlan";

const Stack = createNativeStackNavigator();

export default function SubscriptionRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SubscriptionPlan" component={SubscriptionPlan} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
      <Stack.Screen name="CardDetails" component={CardDetails} />
      <Stack.Screen name="Subscribed" component={Subscribed} />
    </Stack.Navigator>
  );
}

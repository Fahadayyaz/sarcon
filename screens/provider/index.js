import React from "react";
import Home from "./Home";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function ProviderRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="ProviderHome" component={Home} />
    </Tab.Navigator>
  );
}

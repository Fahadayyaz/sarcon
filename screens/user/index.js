import React from "react";
import Home from "./Home";
import Chats from "./Chats";
import Services from "./Services";
import Settings from "./Settings";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Ionicons from "react-native-vector-icons/Ionicons";

const routes = [
  {
    name: "UserHome",
    component: Home,
    icon: Ionicons,
    iconName: "home-outline",
  },
  {
    name: "UserChats",
    component: Chats,
    icon: Ionicons,
    iconName: "chatbubble-outline",
  },
  {
    name: "UserServices",
    component: Services,
    icon: Ionicons,
    iconName: "briefcase-outline",
  },
  {
    name: "UserSettings",
    component: Settings,
    icon: Ionicons,
    iconName: "settings-outline",
    hide: true,
  },
];

export default function UserRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#131417",
          height: 70,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
        tabBarItemStyle: {
          display: "flex",
          paddingVertical: 10,
        },
      }}
    >
      {routes.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            tabBarLabel: route.name,
            tabBarIcon: ({ color, size, focused }) => (
              <route.icon name={route.iconName} size={size} color={color} />
            ),
            tabBarHideOnKeyboard: route.hide,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./screens/Splash";
import Role from "./screens/Role";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }} // Global setting for all screens
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Role" component={Role} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./screens/Splash";
import Role from "./screens/Role";
import UserSignIn from "./screens/user/UserSignIn";
import ProviderSignIn from "./screens/provider/ProviderSignIn";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Poppins_SemiBold: require("../sarcon/assets/fonts/Poppins-SemiBold.ttf"),
    Poppins_Medium: require("../sarcon/assets/fonts/Poppins-Medium.ttf"),
    PlusJakartaSans_Regular: require("../sarcon/assets/fonts/PlusJakartaSans-Regular.ttf"),
    PlusJakartaSans_Medium: require("../sarcon/assets/fonts/PlusJakartaSans-Medium.ttf"),
    PlusJakartaSans_Bold: require("../sarcon/assets/fonts/PlusJakartaSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Role" component={Role} />
        <Stack.Screen name="UserSignIn" component={UserSignIn} />
        <Stack.Screen name="ProviderSignIn" component={ProviderSignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

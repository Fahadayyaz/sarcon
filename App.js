import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./screens/Splash";
import Role from "./screens/Role";
import UserSignIn from "./screens/user/UserSignIn";
import UserSignUp from "./screens/user/UserSignUp";
import UserForgotPassword from "./screens/user/UserForgotPassword";
import UserUploadPhoto from "./screens/user/UserUploadPhoto";

import ProviderSignIn from "./screens/provider/ProviderSignIn";
import ProviderSignUp from "./screens/provider/ProviderSignUp";
import { useFonts } from "expo-font";
import ProviderForgotPassword from "./screens/provider/ProviderForgotPassword";
import ProviderUploadPhoto from "./screens/provider/ProviderUploadPhoto";

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
    return null; // Or show a loading screen
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserForgotPassword"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Role" component={Role} />
        <Stack.Screen name="UserSignIn" component={UserSignIn} />
        <Stack.Screen name="UserSignUp" component={UserSignUp} />
        <Stack.Screen
          name="UserForgotPassword"
          component={UserForgotPassword}
        />
        <Stack.Screen name="UserUploadPhoto" component={UserUploadPhoto} />

        {/* provider section here */}

        <Stack.Screen name="ProviderSignIn" component={ProviderSignIn} />
        <Stack.Screen name="ProviderSignUp" component={ProviderSignUp} />
        <Stack.Screen
          name="ProviderForgotPassword"
          component={ProviderForgotPassword}
        />
        <Stack.Screen
          name="ProviderUploadPhoto"
          component={ProviderUploadPhoto}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

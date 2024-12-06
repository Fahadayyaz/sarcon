import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import AuthRoutes from "./screens/auth";
import ProviderRoutes from "./screens/provider";
import SubscriptionRoutes from "./screens/subscription";
import UserRoutes from "./screens/user";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    Poppins_SemiBold: require("../sarcon/assets/fonts/Poppins-SemiBold.ttf"),
    Poppins_Medium: require("../sarcon/assets/fonts/Poppins-Medium.ttf"),
    PlusJakartaSans_Regular: require("../sarcon/assets/fonts/PlusJakartaSans-Regular.ttf"),
    PlusJakartaSans_Medium: require("../sarcon/assets/fonts/PlusJakartaSans-Medium.ttf"),
    PlusJakartaSans_Bold: require("../sarcon/assets/fonts/PlusJakartaSans-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (error) {
    console.log(error);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
        <Stack.Screen name="ProviderRoutes" component={ProviderRoutes} />
        <Stack.Screen name="UserRoutes" component={UserRoutes} />
        <Stack.Screen
          name="SubscriptionRoutes"
          component={SubscriptionRoutes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

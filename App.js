import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./screens/Splash";
import Role from "./screens/Role";

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    Poppins_SemiBold: require("../Zyra/assets/fonts/Poppins-SemiBold.ttf"),
    Poppins_Medium: require("../Zyra/assets/fonts/Poppins-Medium.ttf"),
    PlusJakartaSans_Regular: require("../Zyra/assets/fonts/PlusJakartaSans-Regular.ttf"),
    PlusJakartaSans_Medium: require("../Zyra/assets/fonts/PlusJakartaSans-Medium.ttf"),
    PlusJakartaSans_Bold: require("../Zyra/assets/fonts/PlusJakartaSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

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

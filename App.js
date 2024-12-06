import { NavigationContainer } from "@react-navigation/native";
import ProviderCardDetail from "./screens/provider/ProviderCardDetail";
import ProviderChangePassword from "./screens/provider/ProviderChangePassword";
import ProviderEmailVerification from "./screens/provider/ProviderEmailVerification";
import ProviderForgotPassword from "./screens/provider/ProviderForgotPassword";
import ProviderHome from "./screens/provider/ProviderHome";
import ProviderOTP from "./screens/provider/ProviderOTP";
import ProviderPayments from "./screens/provider/ProviderPayments";
import ProviderSignIn from "./screens/provider/ProviderSignIn";
import ProviderSignUp from "./screens/provider/ProviderSignUp";
import ProviderSubscribed from "./screens/provider/ProviderSubscribed";
import ProviderSubscriptionPlan from "./screens/provider/ProviderSubscriptionPlan";
import ProviderUploadPhoto from "./screens/provider/ProviderUploadPhoto";
import React, { useEffect } from "react";
import Role from "./screens/Role";
import * as SplashScreen from "expo-splash-screen";
import UserCardDetail from "./screens/user/UserCardDetail";
import UserChangePassword from "./screens/user/UserChangePassword";
import UserEmailVerification from "./screens/user/UserEmailVerification";
import UserForgotPassword from "./screens/user/UserForgotPassword";
import UserHome from "./screens/user/UserHome";
import UserOTP from "./screens/user/UserOTP";
import UserPayments from "./screens/user/UserPayments";
import UserSignIn from "./screens/user/UserSignIn";
import UserSignUp from "./screens/user/UserSignUp";
import UserSubscribed from "./screens/user/UserSubscribed";
import UserSubscriptionPlan from "./screens/user/UserSubscriptionPlan";
import UserUploadPhoto from "./screens/user/UserUploadPhoto";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

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
      <Stack.Navigator
        initialRouteName="Role"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Role" component={Role} />
        <Stack.Screen name="UserSignIn" component={UserSignIn} />
        <Stack.Screen name="UserSignUp" component={UserSignUp} />
        <Stack.Screen
          name="UserForgotPassword"
          component={UserForgotPassword}
        />
        <Stack.Screen name="UserUploadPhoto" component={UserUploadPhoto} />
        <Stack.Screen name="UserOTP" component={UserOTP} />
        <Stack.Screen
          name="UserChangePassword"
          component={UserChangePassword}
        />
        <Stack.Screen
          name="UserEmailVerification"
          component={UserEmailVerification}
        />
        <Stack.Screen
          name="UserSubscriptionPlan"
          component={UserSubscriptionPlan}
        />
        <Stack.Screen name="UserPayments" component={UserPayments} />
        <Stack.Screen name="UserCardDetail" component={UserCardDetail} />
        <Stack.Screen name="UserSubscribed" component={UserSubscribed} />
        <Stack.Screen name="UserHome" component={UserHome} />
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
        <Stack.Screen name="ProviderOTP" component={ProviderOTP} />
        <Stack.Screen
          name="ProviderChangePassword"
          component={ProviderChangePassword}
        />
        <Stack.Screen
          name="ProviderEmailVerification"
          component={ProviderEmailVerification}
        />
        <Stack.Screen
          name="ProviderSubscriptionPlan"
          component={ProviderSubscriptionPlan}
        />
        <Stack.Screen name="ProviderPayments" component={ProviderPayments} />
        <Stack.Screen
          name="ProviderCardDetail"
          component={ProviderCardDetail}
        />
        <Stack.Screen
          name="ProviderSubscribed"
          component={ProviderSubscribed}
        />
        <Stack.Screen name="ProviderHome" component={ProviderHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

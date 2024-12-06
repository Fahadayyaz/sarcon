import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Role from "./Role";
import ChangePassword from "./ChangePassword";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import UploadPhoto from "./UploadPhoto";
import Otp from "./Otp";
import EmailVerification from "./EmailVerification";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Role" component={Role} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="EmailVerification" component={EmailVerification} />
    </Stack.Navigator>
  );
}

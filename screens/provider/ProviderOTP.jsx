import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useRef, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const ProviderOTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const navigation = useNavigation();

  const handleInputChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus(); // پچھلے باکس پر کرسر لے جائیں
    }
  };

  const handleNextPress = () => {
    const otpCode = otp.join("");
    if (otpCode.length === 4) {
      navigation.navigate("ProviderChangePassword");
    } else {
      alert("Please enter a valid 4-digit OTP.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Image
        source={require("./../../assets/topCornerCircles.png")}
        style={styles.top__corner__image}
      />
      <View style={styles.content__container}>
        <Image
          source={require("./../../assets/otpEnvelopLogo.png")}
          style={styles.otpEnvelopLogo}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontWeight: "bold", fontSize: 28, marginTop: "5%" }}>
            Enter OTP
          </Text>
          <Text style={{ color: "#8A8A8A", fontSize: 14 }}>
            Enter the otp which we send into your email for verification
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                value={digit}
                onChangeText={(value) => handleInputChange(value, index)}
                keyboardType="numeric"
                maxLength={1}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.otpInput}
                onKeyPress={(event) => handleKeyPress(event, index)}
              />
            ))}
          </View>

          <Pressable onPress={handleNextPress} style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Next</Text>
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProviderOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  top__corner__image: {
    width: 100.45,
    height: 114.34,
    top: 0,
    left: -10,
    position: "absolute",
    resizeMode: "contain",
  },
  content__container: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
  },
  otpEnvelopLogo: {
    width: 163.48,
    height: 163.48,
    marginTop: "25%",
    alignSelf: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10%",
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    textAlign: "center",
    fontSize: 20,
    borderRadius: 8,
  },
  nextButton: {
    width: "100%",
    height: 48,
    backgroundColor: "#0474ED",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 54,
    marginTop: "35%",
    marginBottom: "10%",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

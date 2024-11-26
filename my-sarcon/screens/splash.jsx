import React, { useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const Splash = ({ navigation }) => {
  useEffect(() => {
    // 3 seconds ke baad Login screen par navigate karega
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigation]);

  return (
    <ImageBackground
      source={require("./../assets/splashScreen.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.text}>Welcome</Text>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
});
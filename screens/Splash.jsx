import React, { useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Role");
    }, 9000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require("./../assets/splashScreen.png")}
      style={styles.container}
      resizeMode="cover"
    ></ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

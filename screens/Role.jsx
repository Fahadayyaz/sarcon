import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import React from "react";

const Login = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="auto" backgroundColor="#ffffff" />
      <View style={styles.contentContainer}>
        <Image
          source={require("./../assets/sarconIcon.png")}
          style={{
            width: 184,
            height: 62,
            alignSelf: "center",
            marginBottom: 40,
          }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 28 }}>Are You!</Text>
        <Text style={{ color: "gray", fontSize: 14 }}>
          Please Select your role for this app.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  contentContainer: {
    width: "90%",
  },
});

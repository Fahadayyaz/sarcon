import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomTabBar = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView
        style={[styles.container, isKeyboardVisible && styles.hidden]}
      >
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.tabButton}>
            <Ionicons name="home-outline" size={24} color="#fff" />
            <Text style={styles.tabText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton}>
            <Ionicons name="chatbubble-outline" size={24} color="#fff" />
            <Text style={styles.tabText}>Chats</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton}>
            <Ionicons name="briefcase-outline" size={24} color="#fff" />
            <Text style={styles.tabText}>Services</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton}>
            <Ionicons name="settings-outline" size={24} color="#fff" />
            <Text style={styles.tabText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131417",
    position: "fixed",
    bottom: 0,
    width: "100%",
    paddingVertical: 10,
  },
  hidden: {
    bottom: -100,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: Platform.OS === "ios" ? 20 : 10,
  },
  tabButton: {
    alignItems: "center",
  },
  tabText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
  },
});

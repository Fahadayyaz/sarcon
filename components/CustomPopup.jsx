import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const CustomPopup = ({ text, style, children, onPress, text2, source }) => {
  const [modalVisibal, setModalVisibal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable style={styles.content__container} onPress={onPress}>
        <View style={styles.popup}>
          <Image
            source={source}
            style={{ height: 70.48, width: 70.48, alignSelf: "center" }}
          />
          {children}
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              alignSelf: "center",
              marginTop: 15,
            }}
          >
            {text}
          </Text>
          <Text style={{ fontSize: 14, alignSelf: "center", marginTop: 5 }}>
            {text2}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CustomPopup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(47, 128, 237, 0.7)",
  },
  content__container: {
    width: "100%",
    height: "100%",
    padding: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "#fff",
    width: "100%",
    height: "30%",
    alignItems: "center",
    borderRadius: 30,
    padding: 20,
    alignSelf: "center",
  },
});

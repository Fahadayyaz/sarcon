import { View, Text, Image, Button, Modal, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import CustomPopup from "../components/CustomPopup";
import { useNavigation } from "@react-navigation/native";

export default function Test() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonPress = () => {
    setModalVisible(true);
    setTimeout(() => {
      navigation.navigate("UserSignIn");
      setModalVisible(false);
    }, 3000);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
      <Text>test</Text>

      <Button title="Open Modal" onPress={handleButtonPress} />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <CustomPopup
            source={require("../assets/changePasswordLogo.png")}
            text={"Submit Successfully"}
            text2={
              "Your document has been submitted successfully. It will take 24-48 hours for approval."
            }
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

import * as ImagePicker from "expo-image-picker";

import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import CustomPopup from "../../components/CustomPopup";
import Feather from "@expo/vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function UploadPhoto() {
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonPress = () => {
    setModalVisible(true);
    setTimeout(() => {
      navigation.navigate("SignIn");
      setModalVisible(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("./../../assets/topCornerCircles.png")}
        style={styles.topCornerImage}
      />
      <View style={styles.contentContainer}>
        <Image
          source={require("./../../assets/uploadLogo.png")}
          style={styles.uploadLogo}
        />
        <Text style={styles.title}>Upload Id Card or Passport</Text>
        <Text style={styles.subtitle}>
          Opps. It happens to the best of us. Input your email to fix the issue.
        </Text>
        <View style={styles.uploadContainer}>
          {!image && (
            <Pressable onPress={pickImage} style={styles.uploadButton}>
              <Feather name="upload" size={42} color="black" />
              <Text style={styles.uploadText}>Upload Image</Text>
            </Pressable>
          )}
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <CustomPopup
              source={require("../../assets/submitted.png")}
              text={"Submit Successfully"}
              text2={
                "Your document has been submitted successfully. It will take 24-48 hours for approval."
              }
            />
          </View>
        </Modal>
        <Pressable
          onPress={handleButtonPress}
          style={{
            width: "100%",
            height: 48,
            backgroundColor: "#0474ED",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 54,
            marginTop: "20%",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>
            Submit
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  topCornerImage: {
    width: 100.45,
    height: 114.34,
    top: 0,
    left: -10,
    position: "absolute",
    resizeMode: "contain",
  },
  contentContainer: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  uploadLogo: {
    width: 147,
    height: 147.67,
    marginTop: "25%",
    alignSelf: "center",
  },
  title: {
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 28,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 14,
    color: "#8A8A8A",
    textAlign: "center",
  },
  uploadContainer: {
    width: "100%",
    height: 198,
    borderWidth: 1,
    borderRadius: 31,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  uploadButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  uploadText: {
    textAlign: "center",
    fontSize: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

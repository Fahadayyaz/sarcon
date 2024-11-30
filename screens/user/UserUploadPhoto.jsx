import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const UserUploadPhoto = () => {
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

      // Navigate after 2 seconds
      setTimeout(() => {
        navigation.navigate("UserOTP");
      }, 2000);
    }
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
          {!image && ( // Show Pressable only if no image is uploaded
            <Pressable onPress={pickImage} style={styles.uploadButton}>
              <Feather name="upload" size={42} color="black" />
              <Text style={styles.uploadText}>Upload Image</Text>
            </Pressable>
          )}
          {image && ( // Show uploaded image
            <Image source={{ uri: image }} style={styles.image} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserUploadPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    overflow: "hidden", // Prevent content from overflowing
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
    resizeMode: "cover", // Adjust image scaling
  },
});

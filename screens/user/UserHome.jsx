import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";

const UserHome = () => {
  const [isEmailFocused, setEmailFocused] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.contentContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <View style={styles.location__logo__box}>
              <FontAwesome6 name="location-dot" size={24} color="#0474ED" />
            </View>
            <View style={styles.headerTextBox}>
              <Text>My Location</Text>
              <View style={styles.locationDetails}>
                <Text style={styles.locationText}>Barcelona, Spain</Text>
                <AntDesign
                  name="down"
                  size={14}
                  color="black"
                  style={styles.locationIcon}
                />
              </View>
            </View>
          </View>
          <View style={styles.profilePicture} />
        </View>

        {/* Search Bar */}
        <View
          style={[
            styles.searchBar,
            { borderColor: isEmailFocused ? "#0474ED" : "#C9C9C9" },
          ]}
        >
          <Fontisto
            name="search"
            size={24}
            color={isEmailFocused ? "#0474ED" : "#838383"}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search here"
            placeholderTextColor={isEmailFocused ? "#0474ED" : "#C9C9C9"}
            style={styles.searchInput}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
        </View>

        {/* Categories */}
        <View style={styles.categoriesHeader}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <Pressable>
            <Text style={styles.seeAllText}>See all</Text>
          </Pressable>
        </View>

        {/* Horizontal ScrollView */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          {renderCategoryCard(
            require("./../../assets/powerTool.png"),
            "Power Tools"
          )}
          {renderCategoryCard(
            require("./../../assets/handTool.png"),
            "Hand Tools"
          )}
          {renderCategoryCard(
            require("./../../assets/cuttingTool.png"),
            "Cutting Tools"
          )}
          {renderCategoryCard(
            require("./../../assets/liftingTool.png"),
            "Lifting Tools"
          )}
        </ScrollView>
        {/* second scrollview here */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          {renderCategoryCard(
            require("./../../assets/powerTool.png"),
            "HVAC Tools Equipment"
          )}
          {renderCategoryCard(
            require("./../../assets/gardeningTools.png"),
            "Gardening Tools"
          )}
          {renderCategoryCard(
            require("./../../assets/weldingHelmets.png"),
            "Welding Helmets"
          )}
          {renderCategoryCard(
            require("./../../assets/cleaningTools.png"),
            "Cleaning Tools"
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// Helper function to render category cards
const renderCategoryCard = (imageSource, label) => (
  <Pressable style={styles.categoryCard}>
    <Image source={imageSource} style={styles.categoryImage} />
    <Text style={styles.categoryText}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTextBox: {
    marginLeft: 10,
  },
  locationDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  location__logo__box: {
    backgroundColor: "#F2F8FE",
    width: 55,
    height: 53,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  locationText: {
    color: "#0474ED",
    fontWeight: "bold",
  },
  locationIcon: {
    marginTop: 3,
    marginLeft: 5,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 44,
    paddingLeft: 10,
    marginTop: 15,
    backgroundColor: "#F2F2F2",
  },
  searchIcon: {
    paddingRight: 5,
  },
  searchInput: {
    flex: 1,
    height: 48,
  },
  categoriesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  categoriesTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAllText: {
    color: "#0474ED",
    fontWeight: "bold",
  },
  scrollContainer: {
    marginTop: 15,
    backgroundColor: "red",
  },
  categoryCard: {
    width: 93,
    height: 131,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFB",
    borderRadius: 18,
    marginRight: 10,
  },
  categoryImage: {
    width: 61,
    height: 55,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: "500",
    marginTop: 10,
    textAlign: "center",
  },
});

export default UserHome;

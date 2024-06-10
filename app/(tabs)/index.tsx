import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import Colors from "@/constants/Colors";
import CategoriesBtn from "@/components/CategoriesBtn";
import Listings from "@/components/Listings";
import ListingData from "@/data/destinations.json";
import TopGroups from "@/components/TopGroups";
import Group from "@/data/group.json";

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [categories, setCategories] = useState("All");

  const onCatChange = (category: string) => {
    console.log("Cat", category);

    setCategories(category);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{ width: 48, height: 48, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),

          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 20,
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <FontAwesome name="bell" size={20} color={"black"} />
            </TouchableOpacity>
          ),
        }}
      />

      <View style={[styles.container, { paddingTop: headerHeight + 5 }]}>
        <Text style={styles.headerText}>Explore the Beautiful world</Text>

        <View style={styles.searchContainer}>
          <View style={{ flex: 1, position: "relative" }}>
            <TextInput placeholder="Search Place..." style={styles.input} />

            <View style={{ position: "absolute", top: 15, left: 10 }}>
              <Ionicons name="search" size={24} color="black" />
            </View>
          </View>
          <TouchableOpacity style={styles.filterContainer}>
            <Ionicons name="options" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <CategoriesBtn onCatChange={onCatChange} />
          <Listings ListingData={ListingData} categories={categories} />
          <TopGroups GroupData={Group} />
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },

  headerText: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
  },

  searchContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  input: {
    backgroundColor: "white",
    height: 50,
    paddingHorizontal: 10,
    paddingLeft: 40,
    borderRadius: 10,
  },

  filterContainer: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

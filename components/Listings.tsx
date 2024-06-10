import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ListingDataType } from "@/types/types";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type renderProp = {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  price: string;
  duration: string;
  location: string;
  category: string;
};

type list = {
  categories: string;
};

const Listings = ({ ListingData, categories }: ListingDataType & list) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("updated listing");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [categories]);

  const RenderItem = ({ name, id, image, location, price }: renderProp) => {
    return (
      <TouchableOpacity
        onPress={() => router.push(`listing/${id}`)}
        activeOpacity={0.6}
        style={{
          padding: 10,
          backgroundColor: Colors.white,
          borderRadius: 10,
        //   marginTop: 10,
        }}
      >
        <View style={{ position: "relative" }}>
          <Image
            source={{ uri: image }}
            style={{ width: 170, height: 170, borderRadius: 10 }}
          />

          <TouchableOpacity
            style={[
              styles.save,
              { position: "absolute", bottom: -15, right: 15 },
            ]}
          >
            <Ionicons name="bookmark-outline" color={"white"} size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>

          <View style={styles.locationPriceContainer}>
            <View style={styles.locationContainer}>
              <Ionicons name="location" color={Colors.primaryColor} size={24} />
              <Text numberOfLines={1}>{location}</Text>
            </View>
            <View style={styles.locationContainer}>
              <Text style={{ color: Colors.primaryColor, fontWeight: "600" }}>
                ${price}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={loading ? [] : ListingData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RenderItem {...item} />}
        horizontal
        contentContainerStyle={{ columnGap: 20 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  save: {
    backgroundColor: Colors.primaryColor,
    padding: 7,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "white",
  },

  textContainer: {
    marginTop: 30,
  },

  name: {
    fontWeight: "700",
  },

  locationPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});

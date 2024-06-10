import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { GroupDataType } from "@/types/types";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type groups = {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  image: string;
};

const TopGroups = ({ GroupData }: GroupDataType) => {
  const RenderItem = ({ image, name, id, rating, reviews }: groups) => (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={() => router.push(`listing/${id}`)}>
      <View>
        <Image
          source={{ uri: image }}
          style={{ width: 80, height: 100, borderRadius: 10 }}
        />
      </View>

      <View>
        <Text style={{ fontWeight: "600" }}>{name}</Text>
        <View style={styles.reviews}>
          <Ionicons name="star" size={20} color={Colors.primaryColor} />
          <View style={styles.rating}>
            <Text>{rating}</Text>
            <Text style={{color: "grey"}}>({reviews})</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={styles.title}>Top Travel Groups</Text>
      <View>
        <FlatList
          data={GroupData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RenderItem {...item} />}
          horizontal
          contentContainerStyle={{ columnGap: 20 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default TopGroups;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingRight: 20,
    borderRadius: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.black,
  },

  reviews: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 5,
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
});

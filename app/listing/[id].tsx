import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { useLocalSearchParams } from "expo-router";
import destination from "@/data/destinations.json";
import Colors from "@/constants/Colors";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Animated, {
  interpolate,
  SlideInDown,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const Details = () => {
  const { id } = useLocalSearchParams();

  const details = destination.find((d) => d.id === id);

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffSet = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffSet.value,
            [-300, 0, 300],
            [-300 / 2, 0, 300 * 0.75]
          ),
        },

        {
          scale: interpolate(scrollOffSet.value, [-300, 0, 300], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        contentContainerStyle={{ paddingBottom: 150 }}
        ref={scrollRef}
      >
        <Animated.Image
          source={{ uri: details?.image }}
          style={[{ width: width, height: 300 }, imageAnimatedStyle]}
        />

        <View style={styles.contentWrapper}>
          <Text style={styles.listingName}>{details?.name}</Text>
          <View style={styles.listingLocationWrapper}>
            <FontAwesome5
              name="map-marker-alt"
              size={18}
              color={Colors.primaryColor}
            />
            <Text style={styles.listingLocationTxt}>{details?.location}</Text>
          </View>
          <View style={styles.highlightWrapper}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.highlightIcon}>
                <Ionicons name="time" size={18} color={Colors.primaryColor} />
              </View>
              <View>
                <Text style={styles.highlightTxt}>Duration</Text>
                <Text style={styles.highlightTxtVal}>
                  {details?.duration} Days
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.highlightIcon}>
                <FontAwesome
                  name="users"
                  size={18}
                  color={Colors.primaryColor}
                />
              </View>

              <View>
                <Text style={styles.highlightTxt}>Person</Text>
                <Text style={styles.highlightTxtVal}>{details?.duration}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.highlightIcon}>
                <Ionicons name="star" size={18} color={Colors.primaryColor} />
              </View>
              <View>
                <Text style={styles.highlightTxt}>Rating</Text>
                <Text style={styles.highlightTxtVal}>{details?.rating}</Text>
              </View>
            </View>
          </View>

          <Text style={styles.listingDetails}>{details?.description}</Text>
        </View>
      </Animated.ScrollView>

      <Animated.View style={styles.footer} entering={SlideInDown.delay(200)}>
        <TouchableOpacity
          onPress={() => {}}
          style={[styles.footerBtn, styles.footerBookBtn]}
        >
          <Text style={styles.footerBtnTxt}>Book Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.footerBtn}>
          <Text style={styles.footerBtnTxt}>${details?.price}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  contentWrapper: {
    padding: 20,
    backgroundColor: Colors.white,
  },
  listingName: {
    fontSize: 24,
    fontWeight: "500",
    color: Colors.black,
    letterSpacing: 0.5,
  },
  listingLocationWrapper: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  listingLocationTxt: {
    fontSize: 14,
    marginLeft: 5,
    color: Colors.black,
  },
  highlightWrapper: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  highlightIcon: {
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 5,
    alignItems: "center",
  },
  highlightTxt: {
    fontSize: 12,
    color: "#999",
  },
  highlightTxtVal: {
    fontSize: 14,
    fontWeight: "600",
  },
  listingDetails: {
    fontSize: 16,
    color: Colors.black,
    lineHeight: 25,
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    padding: 20,
    paddingBottom: 30,
    width: width,
  },
  footerBtn: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  footerBookBtn: {
    flex: 2,
    backgroundColor: Colors.primaryColor,
    marginRight: 20,
  },
  footerBtnTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});

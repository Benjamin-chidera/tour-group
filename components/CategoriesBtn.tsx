import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import Colors from "@/constants/Colors";
import { Destination } from "@/data/destinations";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type props = {
  onCatChange: (category: string) => void;
};

const CategoriesBtn = ({ onCatChange }: props) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index: number) => {
    const selectItem = itemRef.current[index];
    setActiveIndex(index);

    selectItem?.measure((x) =>
      scrollRef.current?.scrollTo({ x: x, y: 0, animated: true })
    );

    onCatChange(Destination[index].title);
  };

  return (
    <View>
      <Text style={styles.title}>Categories</Text>

      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: 20, marginHorizontal: 10 }}
      >
        {Destination.map((d, index) => (
          <TouchableOpacity
            key={index}
            style={
              activeIndex === index ? styles.catBtnActive : styles.container
            }
            onPress={() => handleSelectCategory(index)}
            ref={(el) => (itemRef.current[index] = el)}
          >
            <MaterialCommunityIcons
              name={d.iconName as any}
              size={20}
              color={activeIndex === index ? Colors.white : Colors.black}
            />
            <Text
              style={
                activeIndex === index
                  ? styles.activeTextIndex
                  : styles.catBtnText
              }
            >
              {d.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesBtn;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.black,
  },

  catBtnText: {
    marginLeft: 5,
    color: Colors.black,
  },

  catBtnActive: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  activeTextIndex: {
    // fontSize: 22,
    // fontWeight: "700",
    color: Colors.white,
  },
});

import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItem = ({ item }) => {
  const { title, imageUrl, duration, affordability, complexity } = item;
  const navigation = useNavigation();
  const handlePress = function () {
    navigation.navigate("MealDetails", {
      mealId: item.id,
    });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed && styles.buttonPressed]}
        onPress={handlePress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails item={item} />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    overflow: Platform.OS === "android" && "hidden",
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
    shadowOpacity: 0.35,
    shadowColor: "#000",
  },
  innerContainer: {
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    padding: 8,
  },

  buttonPressed: {
    opacity: 0.5,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetails = ({ item, extraStyles, textStyle }) => {
  const { duration, complexity, affordability } = item;
  return (
    <View style={[styles.details, extraStyles]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

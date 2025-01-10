import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MealItem from "../MealItem";

const MealList = ({ items }) => {
  const renderMeal = function ({ item }) {
    return <MealItem item={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderMeal}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

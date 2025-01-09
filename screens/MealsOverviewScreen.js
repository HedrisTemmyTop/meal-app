import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;
  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId
  ).title;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, []);
  const renderMeal = function ({ item }) {
    return <MealItem item={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMeal}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

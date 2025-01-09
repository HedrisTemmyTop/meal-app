import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
  const meal = MEALS.find((meal) => meal.id === route.params.mealId);
  const [color, setColor] = useState("");
  const handlePress = function () {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="star" color="#fff" onPress={handlePress} />;
      },
    });
  }, [navigation]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>

      <MealDetails
        textStyle={styles.textStyle}
        extraStyles={styles.extraStyles}
        item={meal}
      />
      <View style={styles.listWrapper}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />

          <Subtitle>Steps</Subtitle>

          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 22,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    nargin: 8,
    textAlign: "center",
    color: "#fff",
  },
  textStyle: {
    color: "#fff",
  },
  extraStyles: {},
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  listContainer: {
    width: "80%",
  },
  listWrapper: {
    alignItems: "center",
  },
});

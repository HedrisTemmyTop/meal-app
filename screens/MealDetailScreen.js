import React, { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
// import { useFavoriteCtx } from "../store/context/favourites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  const { ids } = useSelector((state) => state.favoriteReducer);
  const dispatch = useDispatch();
  //   const { ids, removeFavorite, addFavorite } = useFavoriteCtx();
  const isMealFavourite = ids.includes(mealId);
  const handlePress = function () {
    if (isMealFavourite)
      dispatch(
        removeFavorite({
          id: mealId,
        })
      );
    else dispatch(addFavorite({ id: mealId }));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isMealFavourite ? "star" : "star-outline"}
            color="#fff"
            onPress={handlePress}
          />
        );
      },
    });
  }, [navigation, handlePress]);
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

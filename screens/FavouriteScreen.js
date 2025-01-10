import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealList from "../components/MealList/MealList";
import { useFavoriteCtx } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavouriteScreen = () => {
  //   const { ids } = useFavoriteCtx();
  const { ids } = useSelector((state) => state.favoriteReducer);
  const favourites = MEALS.filter((meal) => ids.includes(meal.id));
  return (
    <View style={styles.container}>
      {favourites.length === 0 && (
        <View style={styles.textWrapper}>
          <Text style={styles.text}>You have no favorite meal yet!</Text>
        </View>
      )}
      {favourites.length !== 0 && <MealList items={favourites} />}
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  textWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

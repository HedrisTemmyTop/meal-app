import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = function ({ item }) {
    const handlePress = function () {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    };
    return (
      <CategoryGrid
        title={item.title}
        color={item.color}
        onPress={handlePress}
      />
    );
  };
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#24180f",
  },
});

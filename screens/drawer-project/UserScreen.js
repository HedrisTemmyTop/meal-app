import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const UserScreen = ({ navigation }) => {
  const handleOpenDrawer = function () {
    navigation.toggleDrawer();
  };
  return (
    <View>
      <Text>UserScreen</Text>
      <Button onPress={handleOpenDrawer} title="Click me" />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/drawer-project/WelcomeScreen";
import UserScreen from "./screens/drawer-project/UserScreen";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        {/* <Stack.Navigator
          screenOptions={{
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#351401",
            },
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            options={{
              title: "All Categories",
            }}
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route }) => {

            //   return {
            //     title: route.params.categoryId,
            //   };
            // }}
          />
          <Stack.Screen name="MealDetails" component={MealDetailScreen} />
        </Stack.Navigator> */}
        {/* <Drawer.Navigator
          screenOptions={{
            drawerActiveBackgroundColor: "#f0e1ff",
            drawerActiveTintColor: "#3c0a6b",

            headerStyle: {
              backgroundColor: "#3c0a6b",
            },

            headerTintColor: "#fff",
          }}
        >
          <Drawer.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              drawerLabel: "Welcome Screen",
              drawerIcon: ({ color }) => (
                <Ionicons name="home" size={18} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="User"
            component={UserScreen}
            options={{
              drawerIcon: ({ color }) => (
                <Ionicons name="person" size={18} color={color} />
              ),
            }}
          />
        </Drawer.Navigator> */}
        <BottomTab.Navigator
          screenOptions={{
            // drawerActiveBackgroundColor: "#f0e1ff",
            // drawerActiveTintColor: "#3c0a6b",

            headerStyle: {
              backgroundColor: "#3c0a6b",
            },

            headerTintColor: "#fff",
          }}
        >
          {/* <Drawer.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              // drawerLabel: "Welcome Screen",
              tabBarIcon: ({ color }) => (
                <Ionicons name="home" size={18} color={color} />
              ),
            }}
          /> */}
          {/* <Drawer.Screen
            name="User"
            component={UserScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="person" size={18} color={color} />
              ),
            }}
          /> */}
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

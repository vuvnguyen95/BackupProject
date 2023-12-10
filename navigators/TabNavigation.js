import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

// Import your screens here
import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/AddScreen";
import { NavigationContainer } from "@react-navigation/native";
import WorkoutScreen from "../screens/WorkoutScreen";
import CookbookScreen from "../screens/CookbookScreen";
import { View, SafeAreaView } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Today">
          <Tab.Screen
            name="Today"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="calendar"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Create"
            component={AddScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="plus" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Your Workouts"
            component={WorkoutScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="dumbbell"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Your Cookbook"
            component={CookbookScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="food-fork-drink"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default TabNavigator;

import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BrowseWorkout from '../components/BrowseWorkout';
import SavedWorkouts from './SavedWorkouts';

const Tab = createMaterialTopTabNavigator();

const WorkoutScreen = () => {
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  return (
    <ScrollView style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          name="Browse Workouts"
          component={BrowseWorkout}
          options={{ tabBarLabel: "Browse" }}
        />
        <Tab.Screen
          name="Saved Workouts"
          component={() => (
            <SavedWorkouts
              workouts={savedWorkouts}
              setSavedWorkouts={setSavedWorkouts}
            />
          )}
          options={{ tabBarLabel: "Saved" }}
        />
      </Tab.Navigator>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default WorkoutScreen;

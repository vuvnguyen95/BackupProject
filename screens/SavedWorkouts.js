import React from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

const SavedWorkouts = ({ workouts, setSavedWorkouts }) => {
    useEffect(() => {}, [workouts]);
    const deleteWorkout = (index) => {
      const newWorkouts = [...workouts];
      newWorkouts.splice(index, 1);
      setSavedWorkouts(newWorkouts);
    };
    const EditWorkout = (cardWorkout, index) => {
      const newWorkouts = [...workouts];
      newWorkouts[index] = cardWorkout;
      setSavedWorkouts(newWorkouts);
    };
  
    return (
      <ScrollView style={{ flex: 1 }}>
        {workouts != null &&
          workouts.length > 0 &&
          workouts.map((workout, index) => {
            return (
              <WorkoutCard
                index={index}
                workout={workout}
                EditWorkout={EditWorkout}
                deleteWorkout={deleteWorkout}
              />
            );
          })}
      </ScrollView>
    );
  };

export default SavedWorkouts;
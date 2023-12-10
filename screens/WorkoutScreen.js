import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const WorkoutScreen = () => {
  return (
    <ScrollView style={styles.container}>
        <Text>Workout Screen</Text>
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

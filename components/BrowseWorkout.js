import { useState } from "react";
import React from "react";
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
import WorkoutApi from "../APIs/WorkoutAPI";

const BrowseWorkout = ({ searchTerm, setSearchTerm }) => {
    const [showApi, setShowApi] = useState(false);
  
    return (
      <View>
        {/* Button to toggle displaying the API data */}
        <TouchableOpacity onPress={() => setShowApi(!showApi)}>
          <Text>{showApi ? 'Hide API Data' : 'Show API Data'}</Text>
        </TouchableOpacity>
  
        {/* Render WorkoutApi component conditionally based on showApi state */}
        {showApi && <WorkoutApi />}
      </View>
    );
  };

export default BrowseWorkout;
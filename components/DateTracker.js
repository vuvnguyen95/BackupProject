import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';

const DateTracker = ({ month, year }) => {
  const navigation = useNavigation();

  const onAccountPress = () => {
    navigation.navigate('SettingsStack', { screen: 'SelectProfile', params: { section: 'Profile' } });
  };

  return (
    <View style={styles.dateTrackerContainer}>
      <Text style={styles.monthYearText}>{`${month} ${year}`}</Text>
      <TouchableOpacity onPress={onAccountPress} style={styles.accountButton}>
        <Text style={styles.accountButtonText}>👤</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

export function settingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  dateTrackerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  monthYearText: {
    fontSize: 24,
  },
  accountButton: {
    
  },
  accountButtonText: {
    
  },
});
export default DateTracker;
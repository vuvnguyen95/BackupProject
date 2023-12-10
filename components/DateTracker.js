import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DateTracker = ({ month, year, onAccountPress }) => {
  return (
    <View style={styles.dateTrackerContainer}>
      <Text style={styles.monthYearText}>{`${month} ${year}`}</Text>
      <TouchableOpacity onPress={onAccountPress} style={styles.accountButton}>
        <Text style={styles.accountButtonText}>👤</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    // Style your account button
  },
  accountButtonText: {
    // Style your account button text
  },
});
export default DateTracker;
import { StyleSheet } from 'react-native';
import MainNavigator from './navigators/MainNavigator';
import TabNavigator from './navigators/TabNavigation';

export default function App() {
  return (
      <TabNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

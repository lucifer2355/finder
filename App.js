import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './src/screens/HomeScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={[
        styles.screen,
        { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter },
      ]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;

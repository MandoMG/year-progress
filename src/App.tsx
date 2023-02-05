/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import HorizontalGraphBarComponent from './components/HorizontalGraphBar';
import useTimeCalculator from './hooks/useTimeCalculator';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { currentMonthProgress, currentWorkdayProgress, currentYearProgress } = useTimeCalculator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#303040' : Colors.lighter,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View style={{ backgroundColor: '#ABABAB', margin: 20, borderRadius: 20 }}>
        <View style={{ padding: 20 }}>
          <HorizontalGraphBarComponent title='Year Progress' percentage={currentYearProgress || 0} />
          <HorizontalGraphBarComponent title='Month Progress' percentage={currentMonthProgress || 0} />
          <HorizontalGraphBarComponent title='Workday Progress' percentage={currentWorkdayProgress || 0} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

import React from 'react';
import { StatusBar } from 'react-native';
import { BagProvider } from './context/BagContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <BagProvider>
      <StatusBar barStyle="light-content" />
      <AppNavigator />
    </BagProvider>
  );
}

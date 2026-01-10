import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function AppNavigator({ children }) {
  return <NavigationContainer>{children}</NavigationContainer>;
}

import React from 'react';
import { View, Text } from 'react-native';

export default function BatteryCard({ level = 100 }) {
  return (
    <View>
      <Text>Battery: {level}%</Text>
    </View>
  );
}

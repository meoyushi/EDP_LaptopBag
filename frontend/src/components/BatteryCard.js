import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { BagContext } from '../context/BagContext';
import { COLORS } from '../utils/constants';

export default function BatteryCard() {
  const { bagData, isDarkMode } = useContext(BagContext);
  const colors = COLORS[isDarkMode ? 'dark' : 'light'];
  const { batteryPercent } = bagData;

  const getBatteryColor = () => {
    if (batteryPercent >= 50) return colors.success;
    if (batteryPercent >= 20) return colors.warning;
    return colors.danger;
  };

  return (
    <View style={[styles.card, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
      <Text style={[styles.title, { color: colors.text }]}>Battery</Text>
      <View style={styles.batteryContainer}>
        <View style={[styles.batteryCircle, { borderColor: getBatteryColor() }]}>
          <Text style={[styles.percent, { color: getBatteryColor() }]}>{batteryPercent}%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 20,
    margin: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  batteryContainer: {
    alignItems: 'center',
  },
  batteryCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  percent: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

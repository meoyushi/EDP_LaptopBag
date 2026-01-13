import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { BagContext } from '../context/BagContext';
import { COLORS } from '../utils/constants';

export default function LaptopStatusCard() {
  const { bagData, isDarkMode } = useContext(BagContext);
  const colors = COLORS[isDarkMode ? 'dark' : 'light'];

  return (
    <View style={[styles.card, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
      <Text style={[styles.title, { color: colors.text }]}>Laptop Status</Text>
      <Text style={[styles.status, { color: bagData.laptopInside ? colors.success : colors.danger }]}>
        {bagData.laptopInside ? 'Laptop Inside 🟢' : 'Laptop Not Inside 🔴'}
      </Text>
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
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
  },
});
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BagContext } from '../context/BagContext';
import { COLORS } from '../utils/constants';

export default function LocationPreviewCard() {
  const { bagData, isDarkMode } = useContext(BagContext);
  const navigation = useNavigation();
  const colors = COLORS[isDarkMode ? 'dark' : 'light'];

  return (
    <View style={[styles.card, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
      <Text style={[styles.title, { color: colors.text }]}>Location</Text>
      <Text style={[styles.address, { color: colors.textSecondary }]}>{bagData.location.address}</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate('Location')}
      >
        <Text style={styles.buttonText}>View on Map</Text>
      </TouchableOpacity>
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
  address: {
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
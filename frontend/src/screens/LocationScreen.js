import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { BagContext } from '../context/BagContext';
import { COLORS } from '../utils/constants';
import MapViewComponent from '../components/MapViewComponent';

export default function LocationScreen() {
  const { bagData, isDarkMode } = useContext(BagContext);
  const colors = COLORS[isDarkMode ? 'dark' : 'light'];

  const handleRefresh = () => {
    // Mock refresh, in real app fetch new location
    console.log('Refreshing location...');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <MapViewComponent />
      <View style={[styles.overlay, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
        <Text style={[styles.address, { color: colors.text }]}>{bagData.location.address}</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={handleRefresh}
        >
          <Text style={styles.buttonText}>Refresh Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 12,
    padding: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  address: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

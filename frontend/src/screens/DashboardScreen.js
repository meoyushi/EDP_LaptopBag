import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BagContext } from '../context/BagContext';
import { COLORS } from '../utils/constants';
import LaptopStatusCard from '../components/LaptopStatusCard';
import BatteryCard from '../components/BatteryCard';
import LocationPreviewCard from '../components/LocationPreviewCard';

export default function DashboardScreen() {
  const { isDarkMode } = useContext(BagContext);
  const navigation = useNavigation();
  const colors = COLORS[isDarkMode ? 'dark' : 'light'];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Smart Productivity Bag</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={[styles.settingsIcon, { color: colors.primary }]}>⚙️</Text>
        </TouchableOpacity>
      </View>
      <LaptopStatusCard />
      <BatteryCard />
      <LocationPreviewCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsIcon: {
    fontSize: 24,
  },
});

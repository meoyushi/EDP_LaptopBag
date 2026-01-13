import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, Alert } from 'react-native';
import { useContext } from 'react';
import { BagContext } from '../context/BagContext';
import { COLORS } from '../utils/constants';

export default function SettingsScreen() {
  const { bagData, isDarkMode, toggleDarkMode } = useContext(BagContext);
  const colors = COLORS[isDarkMode ? 'dark' : 'light'];

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Logout', onPress: () => console.log('Logged out') },
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.card, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
        <Text style={[styles.title, { color: colors.text }]}>User Profile</Text>
        <Text style={[styles.info, { color: colors.textSecondary }]}>Name: {bagData.user.name}</Text>
        <Text style={[styles.info, { color: colors.textSecondary }]}>Email: {bagData.user.email}</Text>
      </View>

      <View style={[styles.card, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
        <View style={styles.settingRow}>
          <Text style={[styles.settingText, { color: colors.text }]}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
      </View>

      <TouchableOpacity
        style={[styles.logoutButton, { backgroundColor: colors.danger }]}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  card: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 18,
  },
  logoutButton: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

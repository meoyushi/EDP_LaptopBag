import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BagContext = createContext(null);

const mockData = {
  batteryPercent: 75,
  laptopInside: true,
  location: {
    lat: 37.7749,
    lng: -122.4194,
    address: 'San Francisco, CA'
  },
  user: {
    name: 'John Doe',
    email: 'john.doe@example.com'
  }
};

export const BagProvider = ({ children }) => {
  const [bagData, setBagData] = useState(mockData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load theme from storage
    AsyncStorage.getItem('isDarkMode').then((value) => {
      if (value !== null) {
        setIsDarkMode(JSON.parse(value));
      }
    });
  }, []);

  const toggleDarkMode = async () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    await AsyncStorage.setItem('isDarkMode', JSON.stringify(newMode));
  };

  const updateBagData = (newData) => {
    setBagData({ ...bagData, ...newData });
  };

  return (
    <BagContext.Provider value={{ bagData, updateBagData, isDarkMode, toggleDarkMode }}>
      {children}
    </BagContext.Provider>
  );
};

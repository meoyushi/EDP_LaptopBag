import React, { createContext } from 'react';

export const BagContext = createContext(null);

export const BagProvider = ({ children }) => (
  <BagContext.Provider value={{}}>{children}</BagContext.Provider>
);

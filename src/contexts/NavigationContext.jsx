import React, { createContext, useState, useContext } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [referrer, setReferrer] = useState(null);

  const updateReferrer = path => {
    setReferrer(path);
  };

  return (
    <NavigationContext.Provider value={{ referrer, updateReferrer }}>
      {children}
    </NavigationContext.Provider>
  );
};

import React, { createContext, useState, useContext } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [referrer, setReferrer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const updateReferrer = path => {
    setReferrer(path);
  };

  const updateSearchQuery = query => {
    setSearchQuery(query);
  };

  return (
    <NavigationContext.Provider
      value={{ referrer, updateReferrer, searchQuery, updateSearchQuery }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

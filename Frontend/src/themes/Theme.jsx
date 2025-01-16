import React, { createContext, useState, useContext } from 'react';

// Create ThemeContext
const ThemeContext = createContext();

// Theme provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primaryColor: '#cc003f', // red color for primary
    secondaryColor: '#ffffff', // White color for secondary
  });

  const changeTheme = (primary, secondary) => {
    setTheme({ primaryColor: primary, secondaryColor: secondary });
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;

import React, { createContext, useState } from 'react';

// Create a context
const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <MyContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext; // You can choose either named or default export

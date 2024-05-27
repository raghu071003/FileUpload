import React, { createContext, useState } from 'react';

// Create a context
const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username , setUsernameContext] = useState("")

  return (
    <MyContext.Provider value={{ isLoggedIn, setIsLoggedIn,setUsernameContext,username}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext; // You can choose either named or default export

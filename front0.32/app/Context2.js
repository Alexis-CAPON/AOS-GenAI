"use client"
import { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [loginId, setLoginId] = useState(null);

  return (
    <LoginContext.Provider value={{ loginId, setLoginId }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin2() {
  return useContext(LoginContext);
}

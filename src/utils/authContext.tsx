"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
interface User {
  email: string;
  password: string;
}

interface SignupData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}
interface AuthContextType {
  user: User | null;
  login: (user: User) => boolean;
  logout: () => void;
  signup: (signupData: SignupData) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (user: User): boolean => {
    const signupDataString = sessionStorage.getItem("signupData");
    const signupData = signupDataString ? JSON.parse(signupDataString) : null;

    if (
      user?.email === signupData?.email &&
      user?.password === signupData?.password
    ) {
      setUser(user);
      sessionStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  const signup = (signupData: SignupData) => {
    sessionStorage.setItem("signupData", JSON.stringify(signupData));
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, signup, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

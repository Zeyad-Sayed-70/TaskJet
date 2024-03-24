"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { getUserData } from "@/redux/user/slice";
import { fetchUD } from "@/redux/auth/slice";

// Define a type for the auth context
type AuthContextType = {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
};

// Create the context with an undefined default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Auth provider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Check local storage for auth token on initial load
  useEffect(() => {
    const token = window.localStorage.getItem("auth-token");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  // Redirect if user is already authenticated and tries to access login/register
  useEffect(() => {
    // If there is an authToken, redirect from login/register to the home page
    if (authToken && (pathname === "/login" || pathname === "/register")) {
      router.push("/");
    }
    // If there isn't an authToken, redirect from the home page to the login page
    // else if (!authToken && pathname === "/") {
    //   router.push("/login");
    // }
  }, [authToken, pathname, router]);

  // Value to be passed to the provider
  const authValue = {
    authToken,
    setAuthToken,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

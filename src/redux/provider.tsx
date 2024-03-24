"use client";
import { Provider as AppProvider } from "react-redux";
import { store } from "./store";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <AppProvider store={store}>{children}</AppProvider>;
};

export default Provider;

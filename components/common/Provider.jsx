import { createContext, useContext, useRef, useState } from "react";

export const GlobalInfo = createContext();

export function useGlobalInfoProvider() {
  return useContext(GlobalInfo);
}
// eslint-disable-next-line react/prop-types
export function GlobalInformation({ children }) {
  const [activeTab, setActiveTab] = useState("ISP");

  const value = { activeTab, setActiveTab };
  return <GlobalInfo.Provider value={value}>{children}</GlobalInfo.Provider>;
}

import { createContext, useContext, useRef, useState } from "react";
export const GlobalInfo = createContext();
export function useGlobalInfoProvider() {
  return useContext(GlobalInfo);
}
// eslint-disable-next-line react/prop-types
export function GlobalInformation({ children }) {
  const [activeTab, setActiveTab] = useState("ISP");
  const [amountValue, setAmountValue] = useState(1);

  const value = { activeTab, setActiveTab, amountValue, setAmountValue };
  return <GlobalInfo.Provider value={value}>{children}</GlobalInfo.Provider>;
}

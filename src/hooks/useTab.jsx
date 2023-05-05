import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
export const Tabcontext = createContext(null);

export function TabSwitcher({ children }) {
  const [cuurentTab, setcurrentTab] = useState(0);
  const handleTabChange = (value) => {
    setcurrentTab(value);
  };

  const contextValue = {
    cuurentTab,
    handleTabChange,
  };

  return (
    <Tabcontext.Provider value={contextValue}>{children}</Tabcontext.Provider>
  );
}

export function useTab() {
  const context = useContext(Tabcontext);
  if (!context) {
    // throw new Error("Tab context is not set");
    return false;
  }
  return { ...context };
}

TabSwitcher.propTypes = {
  children: PropTypes.node.isRequired,
};

import { createContext, useState } from "react";

export const MobileContext = createContext({
  mobileContext: false,
  setMobileMenuOpen: () => false
});

export const MobileProvider = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const value = { mobileMenuOpen, setMobileMenuOpen };
  return (
    <MobileContext.Provider value={value}>
      {children}
    </MobileContext.Provider>
  )
}
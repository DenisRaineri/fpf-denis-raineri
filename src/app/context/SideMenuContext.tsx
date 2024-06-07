'use client';
import React, { createContext, useState, useCallback } from 'react';

type SideMenuContextType = {
  isSideMenuOpen: boolean;
  onToggle: () => void;
};

const SideMenuContext = createContext<SideMenuContextType>(
  {} as SideMenuContextType,
);

function SideMenuProvider({ children }: React.PropsWithChildren<object>) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const onToggle = useCallback(() => {
    setIsSideMenuOpen((state) => !state);
  }, []);
  return (
    <SideMenuContext.Provider value={{ isSideMenuOpen, onToggle }}>
      {children}
    </SideMenuContext.Provider>
  );
}

export { SideMenuContext, SideMenuProvider };

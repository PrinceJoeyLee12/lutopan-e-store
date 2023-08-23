import React, { useContext, useState } from 'react';

const SideMenuContext = React.createContext<any>({});
const SideMenuUpdateContext = React.createContext<any>({});

export function useSideMenu() {
  return useContext(SideMenuContext);
}

export function useSideMenuUpdate() {
  return useContext(SideMenuUpdateContext);
}

export function SideMenuProvider({ children }: any) {
  const [sideMenuOptions, setSideMenuOptions] = useState({
    options: [],
    side: '',
    pageName: '',
  });

  const setSideMenu = (menuOptions: any) => {
    setSideMenuOptions(menuOptions);
  };

  return (
    <SideMenuContext.Provider value={sideMenuOptions}>
      <SideMenuUpdateContext.Provider value={setSideMenu}>
        {children}
      </SideMenuUpdateContext.Provider>
    </SideMenuContext.Provider>
  );
}

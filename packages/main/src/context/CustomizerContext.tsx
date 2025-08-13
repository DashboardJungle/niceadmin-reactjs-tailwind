import React, { createContext, useState, ReactNode, useEffect } from 'react';
import config from './config';

// Define the shape of the context state
interface CustomizerContextState {
  activeDir: string;
  setActiveDir: (dir: string) => void;
  activeMode: string;
  setActiveMode: (mode: string) => void;
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
  activeLayout: string;
  setActiveLayout: (layout: string) => void;
  isCardShadow: boolean;
  setIsCardShadow: (shadow: boolean) => void;
  isLayout: string;
  setIsLayout: (layout: string) => void;
  isBorderRadius: number;
  setIsBorderRadius: (radius: number) => void;
  isCollapse: string;
  setIsCollapse: (collapse: string) => void;
  isLanguage: string;
  setIsLanguage: (lang: string) => void;
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (value: boolean) => void;
  isProfileDrawerOpen: boolean;
  setIsProfileDrawerOpen: (value: boolean) => void;
}

// Create the context
export const CustomizerContext = createContext<CustomizerContextState | any>(undefined);

// Utility function to persist to localStorage
const usePersistedState = <T,>(key: string, defaultValue: T): [T, (val: T) => void] => {
  const [state, setState] = useState<T>(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? (JSON.parse(saved) as T) : defaultValue;
  });

  const setPersistedState = (val: T) => {
    setState(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  return [state, setPersistedState];
};

// Define the type for the children prop
interface CustomizerContextProps {
  children: ReactNode;
}

export const CustomizerContextProvider: React.FC<CustomizerContextProps> = ({ children }) => {
  // Persistent states
  const [activeDir, setActiveDir] = usePersistedState('activeDir', config.activeDir);
  const [activeMode, setActiveMode] = usePersistedState('activeMode', config.activeMode);
  const [activeTheme, setActiveTheme] = usePersistedState('activeTheme', config.activeTheme);
  const [activeLayout, setActiveLayout] = usePersistedState('activeLayout', config.activeLayout);
  const [isCardShadow, setIsCardShadow] = usePersistedState('isCardShadow', config.isCardShadow);
  const [isLayout, setIsLayout] = usePersistedState('isLayout', config.isLayout);
  const [isBorderRadius, setIsBorderRadius] = usePersistedState('isBorderRadius', config.isBorderRadius);
  const [isCollapse, setIsCollapse] = usePersistedState('isCollapse', config.isCollapse);
  const [isLanguage, setIsLanguage] = usePersistedState('isLanguage', config.isLanguage);

  // Temporary UI states (not persisted)
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);

  // Set attributes on DOM when relevant values change
  useEffect(() => {
    document.documentElement.setAttribute('class', activeMode);
    document.documentElement.setAttribute('dir', activeDir);
    document.documentElement.setAttribute('data-color-theme', activeTheme);
    document.documentElement.setAttribute('data-layout', activeLayout);
    document.documentElement.setAttribute('data-boxed-layout', isLayout);
    document.documentElement.setAttribute('data-sidebar-type', isCollapse);
  }, [activeMode, activeDir, activeTheme, activeLayout, isLayout, isCollapse]);

  return (
    <CustomizerContext.Provider
      value={{
        activeDir,
        setActiveDir,
        activeMode,
        setActiveMode,
        activeTheme,
        setActiveTheme,
        activeLayout,
        setActiveLayout,
        isCardShadow,
        setIsCardShadow,
        isLayout,
        setIsLayout,
        isBorderRadius,
        setIsBorderRadius,
        isCollapse,
        setIsCollapse,
        isLanguage,
        setIsLanguage,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        isProfileDrawerOpen,
        setIsProfileDrawerOpen,
      }}
    >
      {children}
    </CustomizerContext.Provider>
  );
};

import { createContext } from "react";


export enum ThemeModes_Enum {
    LIGHT = "LIGHT",
    DARK = "DARK",
}


interface ThemeContextProps {
  themeMode: ThemeModes_Enum;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeModes_Enum>>;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
    themeMode: ThemeModes_Enum.LIGHT,
    setThemeMode: () => {},
    toggleTheme: () => {},
});
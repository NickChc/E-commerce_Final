import { createContext } from "react";


export enum ThemeModes_Enum {
    LIGHT = "LIGHT",
    DARK = "DARK",
}


interface ThemeContextProps {};

export const ThemeContext = createContext<ThemeContextProps>({});
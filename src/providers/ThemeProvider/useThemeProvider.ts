import { useContext } from "react";
import { ThemeContext } from "@src/providers/ThemeProvider";


export function useThemeProvider() {
    const { ...data } = useContext(ThemeContext);

    return { ...data };
}
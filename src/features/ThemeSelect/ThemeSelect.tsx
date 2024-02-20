import { SThemeSelect } from "@src/features/ThemeSelect";
import { DarkModeIcon, LightModeIcon } from "@src/assets/icons";
import { useThemeProvider } from "@src/providers/ThemeProvider";
import { ThemeModes_Enum } from "@src/providers/ThemeProvider";

export function ThemeSelect() {
  const { themeMode, toggleTheme } = useThemeProvider();
  return (
    
      <SThemeSelect onClick={toggleTheme}>
        {themeMode === ThemeModes_Enum.LIGHT ? (
          <DarkModeIcon />
        ) : (
          <LightModeIcon />
        )}
      </SThemeSelect>

  );
}

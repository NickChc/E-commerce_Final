import { SThemeSelect } from "@src/features/ThemeSelect";
import { DarkModeIcon } from "@src/assets/icons/DarkModeIcon";
import { LightModeIcon } from "@src/assets/icons/LightModeIcon";
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

import React, {
  useEffect, useState, useMemo,
} from 'react';
import ThemeContext, { themes } from './ThemeContext';

export interface IThemeContextWrapperProps {
    children: React.ReactNode
}

export default function ThemeContextWrapper({ children }: IThemeContextWrapperProps) {
  const [theme, setTheme]: [string, Function] = useState(themes.dark);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('white-content');
        break;
      case themes.dark:
      default:
        document.body.classList.remove('white-content');
    }
  }, [theme]);

  const valueForThemeProvider = useMemo(() => ({ theme, changeTheme }), [theme]);

  return (
    <ThemeContext.Provider value={valueForThemeProvider}>
      {children}
    </ThemeContext.Provider>
  );
}

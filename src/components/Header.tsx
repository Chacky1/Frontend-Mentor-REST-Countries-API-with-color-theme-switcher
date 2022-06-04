import * as React from 'react';
import { BsMoon, BsMoonFill } from 'react-icons/bs';
import { useContext } from 'react';
import ThemeContext, { themes } from '../contexts/ThemeContext';

export default function Header() {
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleClickTheme = () => {
    if (theme === themes.light) {
      changeTheme(themes.dark);
    } else {
      changeTheme(themes.light);
    }
  };

  return (
    <>
      <h1>Where in the world ?</h1>
      <button type="button" onClick={handleClickTheme}>
        {theme === themes.light && (
        <p>
          <BsMoon />
          {' '}
          Dark Mode
        </p>
        )}
        {theme === themes.dark && (
        <p>
          <BsMoonFill />
          {' '}
          Light Mode
        </p>
        )}
      </button>
    </>
  );
}

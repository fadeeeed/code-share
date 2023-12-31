import React, { useState } from "react";
import "./theme-provider.scss";
import "../../themes/light-theme.scss";
import "../../themes/dark-theme.scss";

interface ChildrenProp {
  children: React.JSX.Element | React.JSX.Element[];
}
const ThemeProvider = ({ children }: ChildrenProp) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  console.log({ isDarkTheme });
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`app ${isDarkTheme ? "dark" : "light"}`}>
      {/* <button className="theme-button" onClick={toggleTheme}>
          Toggle Theme
        </button> */}
      {children}
    </div>
  );
};

export default ThemeProvider;

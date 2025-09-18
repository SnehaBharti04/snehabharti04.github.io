import React from "react";
import { useTheme } from "./ThemeContext";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
    </button>
  );
};

export default ThemeToggle;
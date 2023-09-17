import React from "react";
import { useThemeContext } from "../context/theme-context";

const ToggleTheme = () => {
  const [, dispatch] = useThemeContext();

  console.log("ToggleTheme : render");

  return (
    <button onClick={() => dispatch({ type: "toggleTheme" })}>
      Toggle Theme
    </button>
  );
};

export default ToggleTheme;

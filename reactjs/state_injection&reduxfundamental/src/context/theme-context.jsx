import { createContext, useReducer } from "react";
import { useContext } from "react";

export const ThemeContext = createContext({
  empty: true,
});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      console.error("Unknown action type");
  }
};

const initialState = {
  theme: "light",
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const themeContextValue = [state, dispatch];
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

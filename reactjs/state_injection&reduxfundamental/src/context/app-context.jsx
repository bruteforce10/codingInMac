import { createContext, useReducer } from "react";
import { useEffect, useContext } from "react";

export const AppContext = createContext({
  empty: true,
});

export const useAppContext = () => {
  return useContext(AppContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateUser":
      return { ...state, user: action.payload };
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      console.error("Unknown action type");
  }
};

const initialState = {
  user: {},
  theme: "light",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = {
      name: "Jhon Doe",
      avatar: "https://i.pravatar.cc/300",
    };

    dispatch({ type: "updateUser", payload: user });
  }, []);

  const appContextValue = [state, dispatch];
  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

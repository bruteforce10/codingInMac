import React from "react";
import "./App.css";
// import Reducer from "./components/Reducer";

import Navbar from "./components/Navbar";
import Setting from "./components/Setting";
import DisplayTheme from "./components/DisplayTheme";
import ToggleTheme from "./components/ToggleTheme";
import { AppProvider } from "./context/app-context";
import { ThemeProvider } from "./context/theme-context";

const AppStateManagementInjection = () => {
  return (
    <div>
      {/* <Reducer /> */}
      <AppProvider>
        <ThemeProvider>
          <Navbar />
          <Setting />
          <DisplayTheme />
          <ToggleTheme />
        </ThemeProvider>
      </AppProvider>
    </div>
  );
};

export default AppStateManagementInjection;

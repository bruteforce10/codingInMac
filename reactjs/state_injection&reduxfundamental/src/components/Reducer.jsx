import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      console.error("Unknown action type");
  }
};

const initialState = {
  count: 0,
  theme: "light",
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        -
      </button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        +
      </button>
      <span>{state.theme}</span>
      <button onClick={() => dispatch({ type: "toggleTheme" })}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Reducer;

import React from "react";

const Button = (props) => {
  if (props.loading) {
    return (
      <button type="submit" className="btn disable">
        Loading...
      </button>
    );
  }
  return (
    <button type="submit" className="btn">
      {props.title}
    </button>
  );
};

export default Button;

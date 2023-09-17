import React from "react";
import { motion, useAnimation } from "framer-motion";

function Box5() {
  const control = useAnimation();

  return (
    <div className="box-container">
      <button
        onClick={() => {
          control.start({
            x: 500,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move Left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "50%",
            transition: {
              duration: 1,
            },
          });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "0%",
            transition: {
              duration: 1,
            },
          });
        }}
      >
        Square
      </button>
      <button onClick={() => control.stop()}>Stop</button>
      <motion.div animate={control} className="box" />
    </div>
  );
}

export default Box5;

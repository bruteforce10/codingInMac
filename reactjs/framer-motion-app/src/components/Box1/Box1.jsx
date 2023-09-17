import React, { useState } from "react";
import { motion } from "framer-motion";

function Box1() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: isAnimating ? "60rem" : 0,
          opacity: isAnimating ? 1 : 0.5,
          scale: isAnimating ? 1.1 : 1,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{ x: 0, opacity: 0.2 }}
        transition={{
          // type: "tween",
          //   duration: 1,
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
        onClick={() => setIsAnimating(!isAnimating)}
      ></motion.div>
    </div>
  );
}

export default Box1;

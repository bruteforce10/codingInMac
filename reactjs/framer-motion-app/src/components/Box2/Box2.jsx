import React from "react";
import { motion } from "framer-motion";

function Box2() {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        dragConstraints={{ right: 20, left: -20, top: 5, bottom: 5 }}
        drag
        // atau bisa
        // drag="x"
      />
    </div>
  );
}

export default Box2;

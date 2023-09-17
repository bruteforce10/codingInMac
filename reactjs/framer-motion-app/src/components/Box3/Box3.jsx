import React, { useState } from "react";
import { motion } from "framer-motion";

function Box3() {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      //   sudah ditambah before children jadi animasi parent duluan
      //   transition: {
      //     delay: 0.5,
      //   },
    },
  };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate="visible"
        initial="hidden"
        whileInView={{ x: 0 }}
        variants={boxVariant}
      >
        {[1, 2, 3].map((box, index) => {
          return (
            <motion.li
              key={index}
              variants={listVariant}
              className="boxItem"
            ></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Box3;

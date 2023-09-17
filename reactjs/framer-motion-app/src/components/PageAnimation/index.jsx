import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Route, Router, Routes } from "react-router-dom";
import imageOne from "../../1.png";
import imageTwo from "../../2.png";

const SlideShow = ({ image }) => {
  return (
    <AnimatePresence>
      <motion.img
        style={{ position: "absolute", top: "0" }}
        key={image}
        src={image}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      />
    </AnimatePresence>
  );
};

const Page1 = () => {
  const [image, setImage] = useState(imageOne);
  return (
    <motion.div
      className="page-container-1"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ scaleY: 0 }}
    >
      <h4>Halaman Page 1</h4>
      <Link className="link-page" to={"/page2"}>
        Go to Page 2
      </Link>
      <SlideShow image={image} />
      <button onClick={() => setImage(imageTwo)}>Slide 1</button>
      <button onClick={() => setImage(imageOne)}>Slide 2</button>
    </motion.div>
  );
};

const Page2 = () => {
  return (
    <motion.div
      className="page-container-2"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ scaleY: 0 }}
    >
      <h4>Halaman Page 2</h4>
      <Link className="link-page" to={"/"}>
        Go to Page 1
      </Link>
    </motion.div>
  );
};

function PageAnimation() {
  return (
    <AnimatePresence
      mode="wait"
      // initial={false}
    >
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </AnimatePresence>
  );
}

export default PageAnimation;

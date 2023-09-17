import Typed from "typed.js";
import { useRef, useEffect } from "react";

export const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["BTC", "SASS", "BTB"],
      typeSpeed: 120,
      backSpeed: 140,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALIYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center py-4">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <span
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
            ref={el}
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 md:pl-4 pl-2">
          Monitor your data analytic to increase revenue for BTB, BTC, & SASS
          Platform
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md text-[black] font-medium my-6 mx-auto py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

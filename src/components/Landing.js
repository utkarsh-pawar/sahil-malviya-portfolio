import React, { useState, useEffect } from "react";
import "../App.css";
import { motion } from "framer-motion";
import image from "../assets/marco-segatto--8D5zVdPxpA-unsplash.jpg";

let text1 = ["Hello.", "About"];
let text2 = ["I am", "Work"];
let text3 = ["Sahil", "Contact"];

const Landing = () => {
 
  const [index, setIndex] = useState(true);
  const [height, setHeight] = useState(0);

  const textVariant = {
    initial: {
      opacity: 1,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  let count;
  if (index) {
    count = 0;
  } else {
    count = 1;
  }

  useEffect(() => {
    setHeight(window.screen.availWidth)
    console.log(height);
  }, []);

  return (
    <div
      className="landing"
      onClick={() => {
        setIndex((prevIndex) => !prevIndex);
      }}
      style={{ background: `url(${image})`, height: `100vh` }}
    >
      {index ? (
        <div className="landing-card">
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial="initial"
              animate="animate"
              transition={{ ease: [0.17, 0.67, 0.83, 0.67], delay: 0.1 }}
              variants={textVariant}
            >
              <h1 className="landing-heading white-text">{text1[count]}</h1>
            </motion.div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial="initial"
              animate="animate"
              transition={{ ease: [0.17, 0.67, 0.83, 0.67], delay: 0.5 }}
              variants={textVariant}
            >
              <h1 className="landing-heading ">{text2[count]}</h1>
            </motion.div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial="initial"
              animate="animate"
              transition={{ ease: [0.17, 0.67, 0.83, 0.67], delay: 0.9 }}
              variants={textVariant}
            >
              <h1 className="landing-heading ">{text3[count]}</h1>
            </motion.div>
          </div>
        </div>
      ) : (
        <motion.div className="landing-card">
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial="initial"
              animate="animate"
              transition={{ ease: [0.17, 0.67, 0.83, 0.67], delay: 0.1 }}
              variants={textVariant}
            >
              <h1 className="landing-heading white-text">{text1[count]}</h1>
            </motion.div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial="initial"
              animate="animate"
              transition={{ ease: [0.17, 0.67, 0.83, 0.67], delay: 0.5 }}
              variants={textVariant}
            >
              <h1 className="landing-heading ">{text2[count]}</h1>
            </motion.div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial="initial"
              animate="animate"
              transition={{ ease: [0.17, 0.67, 0.83, 0.67], delay: 0.9 }}
              variants={textVariant}
            >
              <h1 className="landing-heading ">{text3[count]}</h1>
            </motion.div>
          </div>
        </motion.div>
      )}
      <div className="popup-text">Tap anywhere</div>
    </div>
  );
};

export default Landing;

import React from 'react';
import ReactDOM from 'react-dom';
import { motion, useScroll, useTransform, useMotionValueEvent, frame } from 'framer-motion';
import { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// Check if DOM Element is created

let domNode = document.getElementById('hp-framer-svg');
let root = createRoot(domNode);

// LandingPage
const LandingPage = () => {
  // Set the current image to the index
  const [currentImage, setCurrentImage] = useState(0);
  // Ref to container
  const scrollCupContainer = useRef(null);

  // Initiate scroll progress
  const { scrollYProgress: scrollYProgressTarget } = useScroll({
    target: scrollCupContainer,
    offset: ['start start', 'end end'],
  });
  // get viewport height
  const windowHeight = window.innerHeight;
  // Move image linear to scroll (1 viewport height)
  let scrollCupScroll = useTransform(scrollYProgressTarget, [0, 1], [0, windowHeight]);

  // Calculate frame slots (when each image should show between scroll Y Progression)
  const frameSlots = [];
  for (let i = 0; i <= 28; i++) {
    const frameSlot = i * (1 / 28);
    frameSlots.push(frameSlot);
  }

  const x = useMotionValueEvent(scrollYProgressTarget, 'change', (latest) => {
    frameSlots.map((frame, index) => {
      if (frame <= latest) {
        setCurrentImage(index);
      }
    });
  });

  return (
    <>
      <div ref={scrollCupContainer} className="scroll--cup">
        <h1>helen pickard</h1>
        <h1>ceramics</h1>
        <motion.div className="scroll--cup__img--container" style={{ y: scrollCupScroll }}>
          {[...Array(29)].map((e, i) => (
            <img
              className={`scroll--cup__img ${currentImage === i ? 'active' : ''}`}
              src={`/wp-content/plugins/hp-framer-svg/src/cup-images/cup${i}.png`}
            />
          ))}
        </motion.div>
      </div>
      <div className="viewport__placeholder--100vh"></div>
      <div className="viewport__placeholder--100vh"></div>
    </>
  );
};

const LandingPageModal = () => {
  return (
    <div className="hp--framer--svg">
      <div className="hp--framer--svg__svg--container">
        <motion.svg
          className="hp--framer--svg__svg"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 86.88 90.12"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, strokeLinecap: 'round' }}
            transition={{
              duration: 1.5,
              ease: 'easeOut',
              delay: 0.5,
            }}
            strokeWidth={4}
            strokeDasharray="0 1"
            stroke="#000"
            // strokeLinecap="round"
            strokeMiterlimit={10}
            fill="none"
            d="M84.38,72.11c-3.87,8.61-45.56,32.15-74-4C-3.53,50.44-.11,11.39,29.38,4.11c24.05-5.94,49.4,4.64,49.61,29.4.16,18.57-11.04,32.46-29.62,32.62-13.93.12-25.32-11.08-25.44-25.01-.09-10.45,8.31-18.99,18.76-19.08,7.84-.07,14.24,6.23,14.31,14.07.05,5.88-4.67,10.68-10.55,10.73"
          />
        </motion.svg>
      </div>
      <div className="hp--framer--svg__text--container">
        <h1 className="hp--framer--svg__title">helen pickard</h1>
        <h3 className="hp--framer--svg__subtitle">ceramics</h3>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <LandingPage />
      <LandingPageModal />
    </>
  );
};

// Only render if DOM
root.render(<App />);

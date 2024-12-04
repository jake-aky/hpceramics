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

  {
    /* <motion.div className="scroll--cup__img--container" style={{ y: scrollCupScroll }}>
  {[...Array(29)].map((e, i) => (
    <img
      className={`scroll--cup__img ${currentImage === i ? 'active' : ''}`}
      src={`/wp-content/plugins/hp-framer-svg/src/cup-images/cup${i}.png`}
    />
  ))}
</motion.div>; */
  }

  return (
    <div className="scroll--cup" ref={scrollCupContainer}>
      <div className="scroll--cup__container">
        <div className="scroll--cup__item">
          <motion.div className="scroll--cup__img--container" style={{ y: scrollCupScroll }}>
            {[...Array(29)].map((e, i) => (
              <img
                className={`scroll--cup__img ${currentImage === i ? 'active' : ''}`}
                src={`/wp-content/plugins/hp-framer-svg/src/cup-images/cup${i}.png`}
              />
            ))}
          </motion.div>
        </div>
        <div className="scroll--cup__item">h1</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <LandingPage />
    </>
  );
};

console.log('framer-loaded');
// Only render if DOM

root.render(<App />);

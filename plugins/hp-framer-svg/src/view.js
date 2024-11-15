import React from 'react';
import ReactDOM from 'react-dom';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import cup1 from './cup-images/cup1.png';
import cup2 from './cup-images/cup2.png';
import cup3 from './cup-images/cup3.png';
import cup4 from './cup-images/cup4.png';
import cup5 from './cup-images/cup5.png';
import cup6 from './cup-images/cup6.png';
import cup7 from './cup-images/cup7.png';
import cup8 from './cup-images/cup8.png';
import cup9 from './cup-images/cup9.png';
import cup10 from './cup-images/cup10.png';
import cup11 from './cup-images/cup11.png';
import cup12 from './cup-images/cup12.png';
import cup13 from './cup-images/cup13.png';
import cup14 from './cup-images/cup14.png';
import cup15 from './cup-images/cup15.png';
import cup16 from './cup-images/cup16.png';
import cup17 from './cup-images/cup17.png';
import cup18 from './cup-images/cup18.png';
import cup19 from './cup-images/cup19.png';
import cup20 from './cup-images/cup20.png';
import cup21 from './cup-images/cup21.png';
import cup22 from './cup-images/cup22.png';
import cup23 from './cup-images/cup23.png';
import cup24 from './cup-images/cup24.png';
import cup25 from './cup-images/cup25.png';
import cup26 from './cup-images/cup26.png';
import cup27 from './cup-images/cup27.png';
import cup28 from './cup-images/cup28.png';
import cup29 from './cup-images/cup29.png';

// Check if DOM Element is created

let domNode = document.getElementById('hp-framer-svg');
let root = createRoot(domNode);
const App = () => {
  const paperContainer = useRef(null);
  const { scrollYProgress: scrollYProgressTarget } = useScroll({
    target: paperContainer,
    offset: ['start start', 'end end'],
  });

  const [currentImage, setCurrentImage] = useState(1);
  const handleCurrentImage = (i) => {
    // index * (halfTheTimePeriodOfScroll/numberOfImages) + halfTheTimePeriodOfScroll  - This is because scroll progress is being calculated by 0.5 to 1 not 0 to 1
    const currentFrame = i * (1 / 29);
    if (currentFrame <= 0) {
      setCurrentImage(1);
    } else if (currentFrame >= 1) {
      setCurrentImage(29);
    } else {
      setCurrentImage(i);
    }
  };

  const windowHeight = window.innerHeight;

  // Paper Scroll Animation Values
  let paperScroll = useTransform(scrollYProgressTarget, [0, 1], [0, 2 * windowHeight]);

  return (
    <>
      <div ref={paperContainer} className="paper">
        <motion.div className="paper__img--container" style={{ y: paperScroll }}>
          {[...Array(29)].map((e, i) => (
            <CupImage
              i={i}
              scrollYProgressTarget={scrollYProgressTarget}
              handleCurrentImage={handleCurrentImage}
              currentImage={currentImage}
            />
          ))}
        </motion.div>
      </div>
      <div className="viewport__placeholder--100vh"></div>
      <div className="viewport__placeholder--100vh"></div>
    </>
    // <div className="hp--framer--svg">
    //   <div className="hp--framer--svg__svg--container">
    //     <motion.svg
    //       className="hp--framer--svg__svg"
    //       id="Layer_1"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 86.88 90.12"
    //     >
    //       <motion.path
    //         initial={{ pathLength: 0 }}
    //         animate={{ pathLength: 1, strokeLinecap: 'round' }}
    //         transition={{
    //           duration: 1.5,
    //           ease: 'easeOut',
    //           delay: 0.5,
    //         }}
    //         strokeWidth={4}
    //         strokeDasharray="0 1"
    //         stroke="#000"
    //         // strokeLinecap="round"
    //         strokeMiterlimit={10}
    //         fill="none"
    //         d="M84.38,72.11c-3.87,8.61-45.56,32.15-74-4C-3.53,50.44-.11,11.39,29.38,4.11c24.05-5.94,49.4,4.64,49.61,29.4.16,18.57-11.04,32.46-29.62,32.62-13.93.12-25.32-11.08-25.44-25.01-.09-10.45,8.31-18.99,18.76-19.08,7.84-.07,14.24,6.23,14.31,14.07.05,5.88-4.67,10.68-10.55,10.73"
    //       />
    //     </motion.svg>
    //   </div>
    //   <div className="hp--framer--svg__text--container">
    //     <h1 className="hp--framer--svg__title">helen pickard</h1>
    //     <h3 className="hp--framer--svg__subtitle">ceramics</h3>
    //   </div>
    // </div>
  );
};

const CupImage = ({ i, scrollYProgressTarget, handleCurrentImage, currentImage }) => {
  // index * (halfTheTimePeriodOfScroll/numberOfImages) + halfTheTimePeriodOfScroll  - This is because scroll progress is being calculated by 0.5 to 1 not 0 to 1
  const frameSlot = i * (1 / 29);
  const x = useMotionValueEvent(scrollYProgressTarget, 'change', (latest) => {
    if (frameSlot <= latest) {
      handleCurrentImage(i);
    }
  });
  return (
    <img
      className={`paper__img ${currentImage === i ? 'active' : ''}`}
      src={`/wp-content/plugins/hp-framer-svg/src/cup-images/cup${i}.png`}
    />
  );
};

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});
// Only render if DOM
root.render(<App />);

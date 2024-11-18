import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { createRoot } from 'react-dom/client';

// Check if DOM Element is created

let domNode = document.getElementById('svg-modal');
let root = createRoot(domNode);

const App = () => {
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

// Only render if DOM
root.render(<App />);

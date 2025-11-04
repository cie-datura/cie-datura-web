"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPathsPrimary from "./SvgPathPrimary";
import svgPathsSecondary from "./SvgPathSecondary";

export default function App() {
  const [isPrimary, setIsPrimary] = useState(true);

  const toggleButton = () => {
    setIsPrimary(!isPrimary);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="relative">
        <AnimatePresence mode="wait">
          {isPrimary ? (
            <motion.button
              key="primary"
              onClick={toggleButton}
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="css-j9f0op css-vf8mzy cursor-pointer hover:scale-105 transition-transform"
              data-name="button-primary"
            >
              <div className="css-30ud2n css-roiesn" data-name="Vector">
                <div className="css-gs60ek css-roiesn css-wixxpz">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 81 80"
                  >
                    <motion.path
                      d={svgPathsPrimary.p3d994700}
                      fill="#FD6068"
                      id="Vector"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </svg>
                </div>
              </div>
              <div className="css-8zrmd9 css-d0dz4n css-fw2ecv css-tzu0k9">
                <p className="css-8zr56v css-wwciga">MORE</p>
              </div>
            </motion.button>
          ) : (
            <motion.button
              key="secondary"
              onClick={toggleButton}
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="css-j9f0op css-vf8mzy cursor-pointer hover:scale-105 transition-transform"
              data-name="button-secondary"
            >
              <div className="css-g12nv8 css-roiesn" data-name="Vector">
                <div className="css-gs60ek css-roiesn css-wixxpz">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 80 80"
                  >
                    <motion.path
                      d={svgPathsSecondary.pb21c980}
                      fill="#FADE71"
                      id="Vector"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </svg>
                </div>
              </div>
              <div className="css-8jezf7 css-8zrmd9 css-szzkzx css-tzu0k9">
                <p className="css-8zr56v css-wwciga">MORE</p>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

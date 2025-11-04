import { motion } from "motion/react";
import { svgPathsPrimary, svgPathsSecondary } from "../svg-paths";

interface ButtonProps {
  variant: "primary" | "secondary";
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  animate?: boolean;
}

export default function Button({ 
  variant, 
  children, 
  onClick, 
  className = "", 
  animate = true 
  
}: ButtonProps) {
  const isPrimary = variant === "primary";
  const svgPath = isPrimary ? svgPathsSecondary.pb21c980 : svgPathsPrimary.p3d994700;
  const fillColor = isPrimary ? "#e8b82e" : "#242e64";
  const viewBox = isPrimary ? "0 0 80 80" : "0 0 81 80";

  const buttonContent = (
    <button
      onClick={onClick}
      className={`css-j9f0op css-vf8mzy cursor-pointer hover:scale-115 transition-transform ${className}`}
      data-name={`button-${variant}`}
    >
      <div className={isPrimary ? "css-g12nv8 css-roiesn" : "css-30ud2n css-roiesn"} data-name="Vector">
        <div className="css-gs60ek css-roiesn css-wixxpz">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox={viewBox}
          >
            {animate ? (
              <motion.path
                d={svgPath}
                fill={fillColor}
                id="Vector"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            ) : (
              <path d={svgPath} fill={fillColor} id="Vector" />
            )}
          </svg>
        </div>
      </div>
      <div className={isPrimary 
        ? "css-8jezf7 css-8zrmd9 css-szzkzx css-tzu0k9" 
        : "css-8zrmd9 css-d0dz4n css-fw2ecv css-tzu0k9"
      }>
        {children && (
          <p className="css-8zr56v css-wwciga">{children}</p>
        )}
      </div>
    </button>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {buttonContent}
      </motion.div>
    );
  }

  return buttonContent;
}
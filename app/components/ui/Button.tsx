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
  const cssClasses = isPrimary ? "css-g12nv8 css-roiesn" : "css-30ud2n css-roiesn";

  return (
    <button
      onClick={onClick}
      className={`css-j9f0op css-vf8mzy cursor-pointer transition-transform ${className}`}
      data-name={`button-${variant}`}
    >
      <div className={cssClasses} data-name="Vector">
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
      
      {/* Contenu par défaut si fourni */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            {children}
          </div>
        </div>
      )}
    </button>
  );
}
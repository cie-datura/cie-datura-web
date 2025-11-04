"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { svgPathsPrimary } from "./svg-paths";

interface DownloadButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function DownloadButton({
  href,
  children,
}: DownloadButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      download
      className="inline-block"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="css-j9f0op css-vf8mzy cursor-pointer transition-transform relative scale-75"
        data-name="download-button"
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
                d={svgPathsPrimary.p3d994700}
                id="Vector"
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: 1, 
                  fill: isHovered ? "#242e64" : "#e8b82e"
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </div>
        
        {/* Contenu du bouton */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.p 
              className="text-sm font-bold"
              animate={{ 
                color: isHovered ? "#e8b82e" : "#242e64"
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {children}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

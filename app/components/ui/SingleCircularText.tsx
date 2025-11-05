"use client";
import { motion } from "motion/react";

interface SingleCircularTextProps {
  text: string;
  radius?: number;
  duration?: number;
  className?: string;
}

export function SingleCircularText({
  text,
  radius = 100,
  duration = 20,
}: 
SingleCircularTextProps) {
  const characters = text.split("");

  return (
    <motion.div
      className={`absolute inset-0`}
      animate={{ rotate: 360 }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {characters.map((char, index) => {
        const angle = (index * 360) / characters.length;

        return (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 text-navy font-bold text-[12px] select-none"
            style={{
              transform: `rotate(${angle}deg) translateY(-${radius}px)`,
              transformOrigin: "0 0",
            }}
          >
            {char}
          </span>
        );
      })}
    </motion.div>
  );
}

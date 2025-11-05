import { motion } from "motion/react";

export function CircularText() {
  const text = "TIMOTHÉE HUDRISIER ~ TIMOTHÉE HUDRISIER ~ ";
  const characters = text.split("");

  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {characters.map((char, index) => {
          const angle = (index * 360) / characters.length;
          const radius = 180;
          
          return (
            <span
              key={index}
              className="absolute left-1/2 top-1/2"
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
    </div>
  );
}

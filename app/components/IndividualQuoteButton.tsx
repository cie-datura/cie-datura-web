"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Button from "./ui/Button";
import { Citation } from "../data/citations";

interface IndividualQuoteButtonProps {
  quote: Citation;
  index: number;
}

export default function IndividualQuoteButton({ quote, index }: IndividualQuoteButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Extraire le nom de l'auteur (avant le tiret)
  const authorName = quote.author.split(' - ')[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      className="w-full max-w-sm md:w-64 lg:w-72"
    >
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            key="primary"
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="relative w-full scale-90 hover:scale-95 transition-transform">
              <Button
                variant="primary"
                onClick={toggleExpanded}
                animate={false}
                className="w-full"
              />
              {/* Texte centré par-dessus l'étoile */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-xl font-bold text-navy text-center max-w-[70%]">
                  {authorName}
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="secondary"
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="relative w-full scale-90 hover:scale-105 transition-transform">
              <Button
                variant="secondary"
                onClick={toggleExpanded}
                animate={false}
                className="w-full"
              />
              {/* Contenu de la citation par-dessus l'hexagone */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-8">
                <div className="text-center max-w-[90%] max-h-[90%] overflow-hidden flex flex-col justify-center">
                  <blockquote className="text-[11px] leading-tight mb-1 text-white font-medium">
                    "{quote.text}"
                  </blockquote>
                  <cite className="text-[9px] font-bold text-white not-italic">
                    — {authorName}
                  </cite>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
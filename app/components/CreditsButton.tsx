"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Button from "./ui/Button";

export default function CreditsButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded((v) => !v);

  const credits = [
    {
      role: "Graphisme",
      name: "Marie LEPOETRE",
      href: "https://www.marielepoetre.com/",
    },
    {
      role: "Développement du site",
      name: "Louis SANSON",
      href: "https://www.louissanson.dev/",
    },
    { role: "Photos", name: "Fred Spark et Hervé Villieu", href: null },
    { role: "Vidéo", name: "Frédéric Ascherfeld", href: null },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
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
              {/* Label centré */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-xl font-bold text-navy text-center max-w-[70%]">
                  Crédits
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
              {/* keep the button below the overlay but clickable */}
              <Button
                variant="secondary"
                onClick={toggleExpanded}
                animate={false}
                className="w-full relative z-10"
              />

              {/* overlay ABOVE the button visually, but not blocking clicks */}
              <div className="absolute inset-0 z-20 flex items-center justify-center p-6 pointer-events-none">
                <div className="text-center max-w-[90%] max-h-[90%] overflow-hidden flex flex-col justify-center space-y-2">
                  {credits.map((credit, index) => (
                    <div key={index} className="text-white">
                      <div className="text-[10px] font-medium text-white/80">
                        {credit.role} :
                      </div>
                      {credit.href ? (
                        <a
                          href={credit.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-bold hover:underline transition-all pointer-events-auto"
                        >
                          {credit.name}
                        </a>
                      ) : (
                        <span className="text-[11px] font-bold cursor-default">
                          {credit.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

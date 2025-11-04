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

  // Texte court pour le bouton primary (premiers mots de la citation)
  const shortText = quote.text.split(' ').slice(0, 4).join(' ') + '...';

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
            <Button
              variant="primary"
              onClick={toggleExpanded}
              animate={false}
              className="w-full scale-90 hover:scale-95 transition-transform"
            >
              <span className="text-xs font-medium px-1 text-center">
                {shortText}
              </span>
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="secondary"
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            {/* Bouton secondary avec contenu personnalisé */}
            <button
              onClick={toggleExpanded}
              className="css-j9f0op css-vf8mzy cursor-pointer hover:scale-115 transition-transform w-full relative scale-90"
              data-name="button-secondary"
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
                      d="M40.0941 0.778002C41.6431 0.207101 43.2913 -0.0541347 44.9428 0.009313C46.5946 0.0727619 48.2184 0.459389 49.7193 1.14746L63.9584 7.67741C66.9472 9.06418 69.2719 11.5555 70.4371 14.6193L79.8043 39.2625C80.3822 40.7828 80.6519 42.4013 80.5965 44.0248C80.5411 45.6484 80.1613 47.2451 79.4812 48.7221L73.03 62.886C72.3568 64.3844 71.3879 65.7334 70.1802 66.8534C68.9724 67.9734 67.5501 68.8417 65.9983 69.4067L40.4694 78.9538C37.3386 80.0963 33.8795 79.9634 30.8454 78.5843L16.6295 72.0451C15.1426 71.3682 13.8044 70.4069 12.6925 69.2157C11.5806 68.0243 10.7164 66.6269 10.1497 65.1036L0.782604 40.4606C-0.36314 37.3865 -0.24704 33.9894 1.10586 31.0009L7.55791 16.8367C8.23985 15.3378 9.21286 13.9875 10.4219 12.8631C11.631 11.7388 13.0521 10.8626 14.6034 10.2848L40.0941 0.778002Z"
                      fill="#242e64"
                      id="Vector"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </svg>
                </div>
              </div>
              
              {/* Contenu de la citation */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center max-w-[90%] max-h-[90%] overflow-hidden flex flex-col justify-center">
                  <blockquote className="text-[11px] leading-tight mb-1 text-white font-medium">
                    "{quote.text}"
                  </blockquote>
                  <cite className="text-[9px] font-bold text-white not-italic">
                    — {quote.author.split(' - ')[0]}
                  </cite>
                </div>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
"use client"
import IndividualQuoteButton from "./IndividualQuoteButton";
import { citations } from "../data/citations";

export default function QuoteButton() {
  return (
    <section className="py-16 xl:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-6xl font-chosence font-lightbold text-center mb-12 text-navy uppercase tracking-wider">
          LE PUBLIC EN PARLE
        </h2>

        {/* Citations avec boutons individuels */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center md:items-start gap-4 md:gap-6 max-w-6xl mx-auto">
          {citations.map((citation, index) => (
            <IndividualQuoteButton
              key={citation.id}
              quote={citation}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
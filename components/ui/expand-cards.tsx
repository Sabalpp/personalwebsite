"use client";

import { useState } from "react";

interface ExpandCard {
  src: string;
  logo?: string;
  label: string;
}

interface ExpandOnHoverProps {
  cards: ExpandCard[];
  defaultExpanded?: number;
}

const ExpandOnHover = ({ cards, defaultExpanded = 1 }: ExpandOnHoverProps) => {
  const [expandedImage, setExpandedImage] = useState(defaultExpanded);

  const getImageWidth = (index: number) =>
    index === expandedImage ? "24rem" : "5rem";

  return (
    <div className="mx-auto flex w-fit items-center justify-center gap-1">
      {cards.map((card, idx) => {
        const isExpanded = idx + 1 === expandedImage;
        return (
          <div
            key={idx}
            className="relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ease-in-out"
            style={{
              width: getImageWidth(idx + 1),
              height: "24rem",
            }}
            onMouseEnter={() => setExpandedImage(idx + 1)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-full w-full object-cover brightness-[0.6]"
              src={card.src}
              alt={card.label}
            />
            {card.logo && (
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
                style={{ opacity: isExpanded ? 1 : 0.4 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.logo}
                  alt={`${card.label} logo`}
                  className="h-24 w-24 object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] transition-all duration-500"
                  style={{
                    transform: isExpanded ? "scale(1)" : "scale(0.6)",
                  }}
                />
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-5 pt-16">
              <p
                className="font-display text-base font-bold uppercase tracking-wide text-white transition-opacity duration-300"
                style={{ opacity: isExpanded ? 1 : 0 }}
              >
                {card.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpandOnHover;

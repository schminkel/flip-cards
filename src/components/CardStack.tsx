import React, {useState} from "react";
import {motion} from "framer-motion";
import CardFlip from "./CardFlip.tsx";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
                            items,
                            offset,
                            scaleFactor,
                          }: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset ?? 10;
  const SCALE_FACTOR = scaleFactor ?? 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  const back = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards]; // create a copy of the array
      newArray.unshift(newArray.pop()!); // move the last element to the front
      return newArray;
    });
  }

  const next = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards]; // create a copy of the array
      newArray.push(newArray.shift()!); // move the first element to the end
      return newArray;
    });
  }

  return (
      <div className="flex flex-col">
        <div className="relative h-64 w-80 md:h-60 md:w-96">
          {cards.map((card, index) => {
            return (
                <motion.div
                    key={card.id}
                    className="absolute bg-transparent h-64 w-80 md:h-60 md:w-96 rounded-md flex flex-col justify-between"
                    style={{
                      transformOrigin: "top center",
                    }}
                    animate={{
                      top: index * -CARD_OFFSET,
                      scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                      zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                    }}
                >
                  <CardFlip card={card} length={cards.length}/>
                </motion.div>
            );
          })}

        </div>
        <div className="flex justify-center pt-6">
          <button
              onClick={back}
              className="flex-none pt-2 pb-2 pl-6 pr-6 mt-4 bg-white dark:bg-black rounded-md border border-neutral-200 dark:border-white/[0.1] dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors duration-300 ease-in-out active:scale-95"
          >
            ← Back
          </button>
          <div className="grow"></div>
          <button
              onClick={next}
              className="flex-none pt-2 pb-2 pl-6 pr-6 mt-4 bg-white dark:bg-black rounded-md border border-neutral-200 dark:border-white/[0.1] dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300 ease-in-out active:scale-95"
          >
            Next →
          </button>
        </div>
      </div>
  );
};

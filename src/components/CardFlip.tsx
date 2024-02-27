import React, {useState} from "react";
import {motion} from "framer-motion";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

const CardFlip = ({card, length}: { card: Card, length:number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
      <button
          className="flip-card w-full h-full rounded-md text-left"
          onClick={handleFlip}
      >
        <motion.div
            className="flip-card-inner w-[100%] h-[100%]"
            initial={false}
            animate={{rotateY: isFlipped ? 180 : 360}}
            transition={{duration: 0.1, animationDirection: "forward"}}
            onAnimationComplete={() => setIsAnimating(false)}
        >
          {/* Front of the card */}
          <div
              className="flip-card-front flex flex-col w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4 bg-white dark:bg-black hover:bg-neutral-50 hover:text-neutral-900 transition-colors duration-300 ease-in-out"
          >
            <div className="grow font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div className="inline-flex items-center justify-center w-full">
              {/*<hr className="w-full h-px my-0 bg-gray-200 border-0 dark:bg-gray-700"/>*/}
              <span
                  className="absolute px-3 text-xs font-medium text-gray-900 -translate-x-1/2 left-1/2 dark:text-white dark:bg-gray-900">{card.id} / {length}</span>
            </div>

          </div>

          {/* Back of the card */}
          <div
              className="flip-card-back hatched-background flex flex-col w-[100%] h-[100%] bg-cover border-[1px] text-black rounded-lg p-4 hover:bg-neutral-50 hover:text-neutral-900 transition-colors duration-300 ease-in-out"
          >
            <div className="grow font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div className="inline-flex items-center justify-center w-full">
              {/*<hr className="w-full h-px my-0 bg-gray-200 border-0 dark:bg-gray-700"/>*/}
              <span
                  className="absolute px-3 text-xs font-medium text-gray-900 -translate-x-1/2 left-1/2 dark:text-white dark:bg-gray-900">back side</span>
            </div>
          </div>

        </motion.div>
      </button>
  );
};

export default CardFlip;

import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {useAtom} from "jotai/index";
import {cardsAtom} from "./CardDeck.tsx";

const CardFlip = ({card, length}: { card: Card, length: number }) => {

  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // @ts-ignore - cards is not used
  const [cards, setCards] = useAtom<Card[]>(cardsAtom);

  useEffect(() => {
    const focusTrickOnMobile = document.getElementById('focusTrickOnMobile');
    if (focusTrickOnMobile) {
      focusTrickOnMobile.focus();
    }
  }, [isNavigating]);

  const back = () => {
    if (isFlipped) setIsFlipped(false);
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards]; // create a copy of the array
      newArray.unshift(newArray.pop()!); // move the last element to the front
      return newArray;
    });
    setIsNavigating(!isNavigating);
  }

  const next = () => {
    if (isFlipped) setIsFlipped(false);
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards]; // create a copy of the array
      newArray.push(newArray.shift()!); // move the first element to the end
      return newArray;
    });
    setIsNavigating(!isNavigating);
  }

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
      <>
        <button
            className="flip-card w-full h-full rounded-md cursor-pointer"
        >
          <motion.div
              className="flip-card-inner w-[100%] h-[100%]"
              initial={false}
              animate={{rotateY: isFlipped ? 180 : 360}}
              transition={{duration: 0.1, animationDirection: "forward"}}
              onAnimationComplete={() => setIsAnimating(false)}
          >
            {/* Front of the CARD*/}
            <div
                className="relative flip-card-front flex flex-col w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4 bg-white transition-colors duration-300 ease-in-out"
            >
              {/* Content */}
              <div className="grow font-normal text-neutral-700 flex justify-center items-center">
                {card.front}
              </div>
              {/* Footer Page Number */}
              <div className="inline-flex items-center justify-center w-full">
              <span
                  className="absolute px-3 text-xs font-medium text-gray-900 -translate-x-1/2 left-1/2">{card.id} / {length}</span>
              </div>
              {/* LEFT */}
              <div
                  className="group absolute top-0 left-0 w-1/4 h-full hover:bg-gray-50 opacity-80 rounded-lg cursor-pointer text-black"
                  onClick={back}>
                <div
                    className="hidden group-hover:flex group-hover:items-center group-hover:justify-center group-hover:w-full group-hover:h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                  </svg>
                </div>
              </div>
              {/* MIDDLE */}
              <div
                  className="group absolute top-0 left-1/4 w-1/2 h-full hover:bg-gray-50 opacity-90 rounded-lg cursor-pointer text-black"
                  onClick={handleFlip}>
                <div
                    className="hidden group-hover:flex group-hover:items-center group-hover:justify-center group-hover:w-full group-hover:h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
                  </svg>
                </div>
              </div>
              {/* RIGHT */}
              <div
                  className="group absolute top-0 right-0 w-1/4 h-full hover:bg-gray-50 opacity-80 rounded-lg cursor-pointer text-black"
                  onClick={next}>
                <div
                    className="hidden group-hover:flex group-hover:items-center group-hover:justify-center group-hover:w-full group-hover:h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                  </svg>
                </div>
              </div>
            </div>


            {/* Back of the card */}
            <div
                className="relative flip-card-back hatched-background flex flex-col w-[100%] h-[100%] bg-cover border-[1px] text-black rounded-lg p-4 hover:bg-neutral-50 hover:text-neutral-900 transition-colors duration-300 ease-in-out"
            >
              {/* Content */}
              <div
                  className="grow font-normal text-neutral-700 flex justify-center items-center">
                {card.back}
              </div>
              {/* Footer Back Side */}
              <div className="inline-flex items-center justify-center w-full">
              <span
                  className="absolute px-3 text-xs font-medium text-gray-900 -translate-x-1/2 left-1/2">back side</span>
              </div>
              {/* LEFT */}
              <div
                  className="group absolute top-0 left-0 w-1/4 h-full hover:bg-gray-50 opacity-80 rounded-lg cursor-pointer text-black"
                  onClick={back}>
                <div
                    className="hidden group-hover:flex group-hover:items-center group-hover:justify-center group-hover:w-full group-hover:h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                  </svg>
                </div>
              </div>
              {/* MIDDLE */}
              <div
                  className="group absolute top-0 left-1/4 w-1/2 h-full hover:bg-gray-50 opacity-90 rounded-lg cursor-pointer text-black"
                  onClick={handleFlip}>
                <div
                    className="hidden group-hover:flex group-hover:items-center group-hover:justify-center group-hover:w-full group-hover:h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
                  </svg>
                </div>
              </div>
              {/* RIGHT */}
              <div
                  className="group absolute top-0 right-0 w-1/4 h-full hover:bg-gray-50 opacity-80 rounded-lg cursor-pointer text-black"
                  onClick={next}>
                <div
                    className="hidden group-hover:flex group-hover:items-center group-hover:justify-center group-hover:w-full group-hover:h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                  </svg>
                </div>
              </div>
            </div>

          </motion.div>
        </button>
      </>
  );
};

export default CardFlip;

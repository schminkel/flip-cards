import {motion} from "framer-motion";
import CardFlip from "./CardFlip.tsx";
import {useAtom} from "jotai/index";
import {cardsAtom} from "./CardDeck.tsx";

export const CardStack = () => {
  const CARD_OFFSET = 2;
  const SCALE_FACTOR = 0.02;

  // @ts-ignore - setCards is not used
  const [cards, setCards] = useAtom<Card[]>(cardsAtom);

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
      </div>
  );
};

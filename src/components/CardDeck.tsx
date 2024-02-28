//import {atom} from 'jotai';
import {CardStack} from "./CardStack";
import * as data from './../data/cardsEnglischBeginner.json';
import {atomWithStorage} from "jotai/utils";

export const cardsAtom = atomWithStorage<Card[]>("CardsStore", data.cardsEnglischBeginner);

export function CardDeck() {
  return (
      <>
        <div className="flex items-center justify-center w-full p-12 font-medium text-3xl">
          Flip Cards
        </div>
        <div className="pt-16 flex items-center justify-center w-full">
          <CardStack/>
        </div>
        <button className="mt-8 focus:ring" id="focusTrickOnMobile">123</button>
      </>
  );
}

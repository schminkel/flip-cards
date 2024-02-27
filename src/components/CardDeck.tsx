import {CardStack} from "./CardStack";
import * as data from './../data/cardsEnglischBeginner.json';

export function CardDeck() {
  return (
      <>
        <div className="flex items-center justify-center w-full p-12 font-medium text-3xl">
          Flip Cards
        </div>
        <div className="pt-16 flex items-center justify-center w-full">
          <CardStack items={data.cardsEnglischBeginner}/>
        </div>
      </>
  );
}

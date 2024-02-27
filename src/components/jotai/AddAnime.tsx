import {useAtomValue, useSetAtom} from "jotai/index";
import {animeAtom, progressAtom} from "./JotaiTesting.tsx";
import {DeleteAnime} from "./DeleteAnime.tsx";

export const AddAnime = () => {

  const setAnime = useSetAtom(animeAtom)
  const progress = useAtomValue(progressAtom)

  return (
      <div className="flex flex-row">
        <button
            className="p-3 mr-4 border-2 text-black rounded-lg bg-gray-100 hover:bg-gray-300"
            onClick={() => {
              setAnime((anime: MovieStore[]) => [
                ...anime,
                {
                  title: Math.random().toString(36).substring(2, 12),
                  year: Math.floor(Math.random() * 23) + 1998,
                  watched: Math.random() > 0.5
                }
              ])
            }}>
          Add Movie
        </button>
        <DeleteAnime/>
        <div className="p-4 w-44">
          Progress: {(progress * 100).toFixed(2)}%
        </div>
      </div>
  )
}

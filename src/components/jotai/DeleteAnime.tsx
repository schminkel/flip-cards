import {useSetAtom} from "jotai/index";
import {animeAtom} from "./JotaiTesting.tsx";

export const DeleteAnime = () => {

  const setAnime = useSetAtom(animeAtom)

  return (
      <div className="flex flex-row">
        <button
            className="p-3 border-2 text-black rounded-lg bg-gray-100 hover:bg-gray-300"
            onClick={() => {
              setAnime(() => [])
            }}>
          Reset
        </button>
      </div>
  )
}

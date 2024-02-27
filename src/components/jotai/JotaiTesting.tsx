import {atom} from 'jotai'
import {atomWithStorage} from 'jotai/utils'
import {AnimeList} from "./AnimeList.tsx";
import {AddAnime} from "./AddAnime.tsx";

export const animeAtom = atomWithStorage<MovieStore[]>("MovieStore", []);

export const progressAtom = atom((get) => {
  const anime = get(animeAtom)
  return anime.filter((item) => item.watched).length / anime.length
})

export const AnimeApp = () => {
  return (
      <div className="flex flex-col items-center justify-center w-full">
        <AddAnime/>
        <div className="mb-4"/>
        <AnimeList/>
      </div>
  )
}

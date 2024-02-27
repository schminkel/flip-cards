import {useAtomValue} from "jotai/index";
import {animeAtom} from "./JotaiTesting.tsx";

export const AnimeList = () => {

  const anime = useAtomValue(animeAtom)

  return (
      <ul>
        {anime.map((item: { title: string, year: number, watched: boolean }) => (
            <li key={item.title}>{item.title} | {item.year} | {item.watched ? 'watched' : 'not watched'}</li>
        ))}
      </ul>
  )
}

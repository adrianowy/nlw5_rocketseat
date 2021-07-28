import { GetStaticProps } from "next"
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { api } from '../services/api'
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString"

interface Episode {
  id: string;
  title: string;
  members: string;
  // ...
}

interface HomeProps {
  episodes: Episode[]
}


export default function Home(props: HomeProps) {

  return (
    <h1>home Page</h1>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'publushed_at',
      _order: 'desc'
    }
  });

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {locale: ptBR}),
      duration: Number(episodes.file.duration),
      durationAsString: convertDurationToTimeString(Number(episodes.file.duration)),
      url: episode.file.url,
    }
  })

  return {
    props: {
      episodes: episodes
    },
    revalidate: 60 * 60 * 8,
  }
}
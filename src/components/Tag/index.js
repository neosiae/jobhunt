import * as S from './styles'
import { useQueries } from '../../contexts/queries'

export default function Tag({ name, query }) {
  const [queries, setQueries] = useQueries()

  const onClick = () => setQueries([...queries, query])

  return <S.Tag onClick={onClick}>{name}</S.Tag>
}

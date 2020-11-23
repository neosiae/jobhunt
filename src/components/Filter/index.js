import { useQueries } from '../../contexts/queries'
import * as S from './styles'
import removeIcon from '../../assets/images/icon-remove.svg'

export default function Filter({ name, query }) {
  const [queries, setQueries] = useQueries()

  const onClick = () =>
    setQueries(
      queries.filter((prevQuery) => {
        const key = Object.keys(query)[0]
        if (prevQuery[key] !== query[key]) return true
        return false
      })
    )

  return (
    <S.Container>
      <S.Filter>{name}</S.Filter>
      <S.Icon src={removeIcon} onClick={onClick} />
    </S.Container>
  )
}

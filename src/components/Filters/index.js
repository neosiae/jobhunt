import Filter from '../Filter'
import { useQueries } from '../../contexts/queries'
import * as S from './styles'

export default function Filters() {
  const [queries, setQueries] = useQueries()

  const onClick = () => setQueries([])

  return (
    <>
      {queries.length > 0 ? (
        <S.Container>
          <S.Flex>
            {queries.map((query, index) => {
              const name = query[Object.keys(query)[0]]

              return <Filter key={index} name={name} query={query} />
            })}
          </S.Flex>
          <S.Clear onClick={onClick}>Clear</S.Clear>
        </S.Container>
      ) : null}
    </>
  )
}

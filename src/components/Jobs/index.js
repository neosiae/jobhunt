import Job from '../Job'
import * as S from './styles'
import { useQueries } from '../../contexts/queries'

export default function Jobs({ jobs }) {
  const [queries] = useQueries()
  const filtersVisible = queries.length > 0

  return (
    <S.Container filtersVisible={filtersVisible}>
      {jobs
        ? jobs
            .filter((job) =>
              queries.every((query) => {
                const key = Object.keys(query)[0]

                if (Array.isArray(job[key])) {
                  return job[key].includes(query[key])
                } else {
                  return job[key] === query[key]
                }
              })
            )
            .map((job) => <Job key={job.id} job={job} />)
        : null}
    </S.Container>
  )
}

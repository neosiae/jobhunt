import Job from '../Job'
import * as S from './styles'

export default function Jobs({ jobs }) {
  return (
    <S.Container>
      {jobs ? jobs.map((job) => <Job key={job.id} job={job} />) : null}
    </S.Container>
  )
}

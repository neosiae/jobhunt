import React from 'react'

import Job from '../Job'
import * as S from './styles'
import { useQueries } from '../../contexts/queries'

export default function Jobs() {
  const [data, setData] = React.useState(null)
  const [queries] = useQueries()
  const filtersVisible = queries.length > 0

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('data.json')
      const json = await response.json()
      setData(json)
    }

    fetchData()
  }, [])

  return (
    <S.Container filtersVisible={filtersVisible}>
      {data
        ? data
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

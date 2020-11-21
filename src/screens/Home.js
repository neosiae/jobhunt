import React from 'react'

import Header from '../components/Header'
import Container from '../components/Container'
import Jobs from '../components/Jobs'

export default function Home() {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('data.json')
      const json = await response.json()
      setData(json)
    }

    fetchData()
  }, [])

  return (
    <div>
      <Header />
      <Container>
        <Jobs jobs={data} />
      </Container>
    </div>
  )
}

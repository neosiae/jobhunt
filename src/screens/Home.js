import Header from '../components/Header'
import Container from '../components/Container'
import Jobs from '../components/Jobs'
import Filters from '../components/Filters'
import { QueriesProvider } from '../contexts/queries'

export default function Home() {
  return (
    <div>
      <QueriesProvider>
        <Header />
        <Container>
          <Filters />
          <Jobs />
        </Container>
      </QueriesProvider>
    </div>
  )
}

import React from 'react'

const QueriesContext = React.createContext()

export function QueriesProvider({ children }) {
  const [queries, setQueries] = React.useState([])

  return (
    <QueriesContext.Provider value={[queries, setQueries]}>
      {children}
    </QueriesContext.Provider>
  )
}

export function useQueries() {
  const context = React.useContext(QueriesContext)
  return context
}

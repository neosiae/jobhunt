import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 1rem;
  padding: 1rem 0 0;
  border-top: 1px solid hsl(180, 14%, 71%);
  @media (min-width: 992px) {
    border-top: none;
  }
`

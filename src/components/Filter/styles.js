import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  margin-right: 1rem;
`

export const Filter = styled.span`
  background-color: hsl(180, 31%, 95%);
  padding: 0.5rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: hsl(180, 29%, 50%);
  font-size: 0.8rem;
  font-weight: 700;
  display: inline-block;
`

export const Icon = styled.img`
  background-color: hsl(180, 29%, 50%);
  padding: 0.5rem;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  &:hover {
    background-color: hsl(180, 15%, 14%);
    cursor: pointer;
  }
`

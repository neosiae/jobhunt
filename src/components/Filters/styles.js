import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 1.5rem;
  background-color: #fff;
  display: flex;
  padding: 1rem 0 0 1rem;
  position: relative;
  top: -31px;
  box-shadow: 0px 10px 20px 0px rgba(133, 142, 123, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1440px) {
    margin: 0 5.5rem;
  }
`

export const Clear = styled.span`
  margin-bottom: 1rem;
  padding-right: 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: hsl(180, 29%, 50%);
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`

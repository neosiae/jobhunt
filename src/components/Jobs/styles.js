import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${(props) =>
    props.filtersVisible
      ? css`
          margin-top: 1.5rem;
        `
      : css`
          margin-top: 3.5rem;
        `}
  padding: 0 1.5rem;
  @media (min-width: 992px) {
    ${(props) =>
      props.filtersVisible
        ? css`
            margin-top: 0.5rem;
          `
        : css`
            margin-top: 3rem;
          `}
  }
  @media (min-width: 1440px) {
    padding: 0 5.5rem;
  }
`

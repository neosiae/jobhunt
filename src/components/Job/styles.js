import styled, { css } from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  margin-bottom: 2.5rem;
  border-radius: 5px;
  box-shadow: 0px 10px 20px 0px rgba(133, 142, 123, 0.2);
  ${(props) =>
    props.isFeatured &&
    css`
      border-left: 0.4rem solid hsl(180, 29%, 50%);
    `}
  @media (min-width: 992px) {
    padding: 1.5rem 1rem;
  }
`

export const LogoWrapper = styled.div`
  position: relative;
`

export const Logo = styled.img`
  width: 50px;
  position: absolute;
  top: -25px;
  margin-left: 1rem;
  @media (min-width: 992px) {
    position: static;
    width: 85px;
  }
`

export const InfoWrapper = styled.div`
  padding: 2.2rem 1rem 1rem 1rem;
  @media (min-width: 992px) {
    padding: 0;
    margin-left: 1rem;
  }
`

export const CompanyWrapper = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  @media (min-width: 992px) {
    font-size: 0.9rem;
  }
`

export const Company = styled.span`
  color: hsl(180, 29%, 50%);
  margin-right: 1rem;
`

export const New = styled.span`
  font-size: 0.7rem;
  background-color: hsl(180, 29%, 50%);
  color: #fff;
  border-radius: 1rem;
  padding: 0.3rem 0.5rem;
  margin-right: 0.5rem;
`

export const Featured = styled.span`
  font-size: 0.7rem;
  color: #fff;
  background-color: hsl(180, 15%, 14%);
  padding: 0.3rem 0.5rem;
  border-radius: 1rem;
`

export const Position = styled.div`
  font-size: 0.9rem;
  margin-top: 1.1rem;
  color: hsl(180, 15%, 14%);
  &:hover {
    color: hsl(180, 29%, 50%);
    cursor: pointer;
  }
  @media (min-width: 992px) {
    font-size: 1.1rem;
  }
`

export const MetaInfo = styled.div`
  margin-top: 1rem;
  font-weight: 400;
  color: hsl(180, 8%, 52%);
`

export const Dot = styled.span`
  margin-left: 0.3rem;
  margin-right: 0.3rem;
`

export const FlexCenter = styled.div`
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
  }
`

export const FlexCenterFullWidth = styled.div`
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    flex: 1;
  }
`

import styled from 'styled-components'

import bgHeaderMobile from '../../assets/images/bg-header-mobile.svg'
import bgHeaderDesktop from '../../assets/images/bg-header-desktop.svg'

export const Header = styled.header`
  height: 156px;
  background: hsl(180, 29%, 50%) url(${bgHeaderMobile});
  @media (min-width: 375px) {
    background: hsl(180, 29%, 50%) url(${bgHeaderDesktop});
  }
`

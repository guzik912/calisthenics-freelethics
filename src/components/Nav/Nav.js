import styled, { css } from 'styled-components';
import { device } from '../../mediaQueries/mediaQueries';

export const Nav = styled.nav`
  position:fixed;
  bottom:0;
  left:50%;
  transform: translateX(-50%);
  width: 85%;
  height: 10%;
  display:flex;
  align-items:stretch;
  justify-content: space-around;
  background: ${({theme}) => theme.bgcLightPrimary};
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  z-index:10;
  
  @media ${device.tablet} {
    width:70%;
  }

  @media ${device.laptop} {
    width:65%;
  }

  ${({navTop}) => navTop && css`
    top:0;
    height:7.5%;
    width:90%;
    background: ${({theme}) => theme.bgcDarkSecondary};
    border: 1px solid #222;
    border-radius: 0 0 10px 10px;

    @media ${device.tablet} {
      width:80%;
    }
  `}
`;


export default Nav;
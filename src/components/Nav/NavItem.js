import styled, { css } from 'styled-components';

const NavItem = styled.li`
  list-style: none;
  font-size: ${({theme}) => theme.fontSize.xs};
  border-bottom: 3px solid transparent;
  display:flex;
  align-items:center;
  justify-content:center;

  ${({icon}) => icon && css`
  width: 45px;
  background-image: url(${({icon}) => icon});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position:center;
  `};
`;

export default NavItem;
import React from 'react';
import { StyledHeader, Logo } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      {/* <Logo></Logo> */}
      <img src="../../../assets/emblem.jpg" alt="Emblem of Ukraine" />
    </StyledHeader>
  );
};

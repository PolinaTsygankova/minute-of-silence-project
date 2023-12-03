import React from 'react';
import { StyledHeader, Image } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      {/* <Logo></Logo> */}
      <Image src="/public/deploy-status.png" alt="Emblem of Ukraine" />
    </StyledHeader>
  );
};

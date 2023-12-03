import React from 'react';
import { StyledHeader, Image } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Image
        src="https://images.prom.ua/4057400177_w640_h640_4057400177.jpg"
        alt="Emblem of Ukraine"
      />
    </StyledHeader>
  );
};

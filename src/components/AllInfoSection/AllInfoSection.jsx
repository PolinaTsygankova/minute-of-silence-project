import React from 'react';
import { StyledAllInfoSection, Title, Wrapper } from './AllInfoSection.styled';

export const AllInfoSection = () => {
  return (
    <StyledAllInfoSection>
      <Title>Рекомендовано до перегляду</Title>

      <Wrapper>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-H3fv4jvS2k?si=oDqlNElR1hOz_m_r"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowfullscreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/deIlRc32j8g?si=3iKAzJLFHirU4E5I"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowfullscreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8hu7WMWCDBA?si=4tZvtt7p_OkwhJjW"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowfullscreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KTgGHQ4vUgc?si=G2GttPJvEu1To9uQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowfullscreen
        ></iframe>
      </Wrapper>
    </StyledAllInfoSection>
  );
};

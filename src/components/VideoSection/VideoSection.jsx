import React from 'react';
import {
  StyledVideoSection,
  StyledIframe,
  SubTitle,
  Title,
} from './VideoSection.styled';

export const VideoSection = () => {
  return (
    <StyledVideoSection>
      <Title>Вшануємо пам'ять загиблих</Title>

      <StyledIframe
        src="https://www.youtube.com/embed/7eg_IlqflAc?si=dgCzOevMlJyJ2Im2"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowfullscreen
      ></StyledIframe>

      <SubTitle>
        З метою вшанування світлої пам’яті, громадянської відваги і
        самовідданості, сили духу, стійкості та героїчного подвигу воїнів,
        полеглих під час виконання бойових завдань із захисту державного
        суверенітету та територіальної цілісності України, мирних громадян, які
        загинули унаслідок збройної агресії російської федерації проти України,
        постановляю: започаткувати проведення щоденно о 9 годині 00 хвилин
        загальнонаціональної хвилини мовчання за співвітчизниками, загиблими
        внаслідок збройної агресії російської федерації проти України, яку
        оголошувати у всіх засобах масової інформації незалежно від форми
        власності.
      </SubTitle>
      <SubTitle>
        В.О. Зеленський, Указ Президента України № 143 від 16 березня 2022 року
      </SubTitle>
    </StyledVideoSection>
  );
};

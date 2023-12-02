import { Wrapper } from './App.styled';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Container } from './Container/Container';

export const App = () => {
  return (
    <Wrapper>
      {/* <Container> */}
      <Header />
      <Hero />

      {/* </Container> */}
    </Wrapper>
  );
};

import { Wrapper } from './App.styled';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
// import { Container } from './Container/Container';
import { VideoSection } from './VideoSection/VideoSection';

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <VideoSection />
    </Wrapper>
  );
};

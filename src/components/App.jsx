import { Wrapper } from './App.styled';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
// import { Container } from './Container/Container';
import { VideoSection } from './VideoSection/VideoSection';
import { AllInfoSection } from './AllInfoSection/AllInfoSection';
import { Footer } from './AllInfoSection/Footer/Footer';

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <VideoSection />
      <AllInfoSection />
      <Footer />
    </Wrapper>
  );
};

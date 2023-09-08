import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import PictureGrid from './components/PictureGrid';
import Testimonials from './components/Testimonials';
import Tiles from './components/Tiles';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Tiles />
        <Testimonials />
        <PictureGrid />
        <Footer />
      </main>
    </>
  );
}

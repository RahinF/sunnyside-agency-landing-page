import Footer from './components/Footer';
import Hero from './components/Hero';
import PictureGrid from './components/PictureGrid';
import Testimonials from './components/Testimonials';
import Tiles from './components/Tiles';

export default function Home() {
  return (
    <main>
      <h1>home</h1>
      <Hero />
      <Tiles />
      <Testimonials />
      <PictureGrid />
      <Footer />
    </main>
  );
}

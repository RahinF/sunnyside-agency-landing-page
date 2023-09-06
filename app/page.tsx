import Footer from './components/Footer';
import Hero from './components/Hero';
import PictureGrid from './components/PictureGrid';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <main>
      <h1>home</h1>
      <Hero />
      <Testimonials />
      <PictureGrid />
      <Footer />
    </main>
  );
}

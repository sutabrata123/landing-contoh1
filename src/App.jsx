import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 pt-16">
      {/* Navbar di atas */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Pricing />
        <CTA />
      </main>

      {/* Footer di bawah */}
      <Footer />
    </div>
  );
}

export default App;
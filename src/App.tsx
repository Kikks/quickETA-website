import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full flex-col">
        <Header />
        <Features />
        <Testimonials />
        <Pricing />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}

export default App;

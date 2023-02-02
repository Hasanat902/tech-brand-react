import './App.css';
import About from './components/About';
import AllInOne from './components/AllInOne';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Support from './components/Support';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Support></Support>
      <AllInOne></AllInOne>
      <Pricing></Pricing>
    </>
  );
}

export default App;

import './App.css';
import Homepage from './pages/Homepage';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import LeadMagnetCalculator from './components/LeadMagnetCalculator';


function App() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-6">
        <Homepage />
        <LeadMagnetCalculator />
        <Portfolio />
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

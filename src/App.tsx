import './App.css';
import Homepage from './pages/Homepage';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-6">
        <Homepage />
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

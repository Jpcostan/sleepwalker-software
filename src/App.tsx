import './App.css';
import Homepage from './pages/Homepage';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-6">
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

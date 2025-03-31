import './App.css';
import Homepage from './pages/Homepage';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Homepage />
      <Portfolio />
        <div id="contact">
          <Contact />
        </div>
      
    </>
  );
}

export default App;

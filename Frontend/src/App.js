import './App.css';
import About from './components/About';
import Feedback from './components/Feedback';
import Home from './components/Home';
import Product from './components/Product';
import Service from './components/Service';
function App() {
  return (
    <div>
         <Home/>
         <About/>
         <Product/>
         <Service/>
         <Feedback/>
    </div>
  );
}

export default App;

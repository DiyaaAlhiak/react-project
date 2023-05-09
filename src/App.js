
import './App.css';
import CompNavbar from './components/Navbar/CompNavbar';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CompConnectors from './components/Connectors/CompConnectors'
import Compticket from './components/ticket/Compticket'

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <CompNavbar/>
      <div className='container'>
    <Routes >
       <Route path='/' exact Component={Home}/>
       <Route path='CompConnectors' exact Component={CompConnectors}/>
       <Route path='Compticket' exact Component={Compticket}/>
   </Routes>
      </div>
  </div>
 </BrowserRouter>
 
  );
}

export default App;

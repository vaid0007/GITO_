
import './App.css';

import {BrowserRouter,Routes, Route} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Admision from './Pages/Admision';
import Thankupage from './Pages/Thankupage';

function App() {
  return (
    <div>
      <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/admision' element={<Admision/>}></Route>
      <Route path='/thankupage' element={<Thankupage/>}></Route>
    </Routes>

    <Footer/>

    
    </BrowserRouter>

    
    
     
    </div>
  );
}

export default App;

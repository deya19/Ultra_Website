import './App.css';
import React, { Component } from 'react'
import{BrowserRouter ,Route ,Routes} from 'react-router-dom'
import Index from './components/index';
import Contact from './components/Contact';
import Navbar from './components/Navbar';



 class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;
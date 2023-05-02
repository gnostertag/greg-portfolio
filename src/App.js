import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
// import video from 'public/videos/video-1.mp4'
function App() {
  return (
   <>
    <Router>
      <div className='App'>
        
      </div>

    <Navbar/>
    <Routes>
       <Route path='/' exact element={<Home/>} />
    </Routes>
    
 
    </Router>
   </>
    
  );
}
// path='/Home' exact element={<Home/>}
export default App;

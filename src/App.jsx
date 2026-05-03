import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import Body from './Body';
import Login from './Login';
import Profile from './Profile';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {

  return (
   <>

      <BrowserRouter basename="/">
         <Routes>
          <Route path="/" element={<Body />} >
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
          </Route>
         </Routes>
      </BrowserRouter>
     {/* <Navbar />
     <Body />
     <Footer /> */}
   </>
  
   
  )
}
export default App

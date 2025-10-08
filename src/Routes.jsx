import React from 'react'
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router"; 
import { Home_page } from './pages/Home_page';
import Navbar from './components/Navbar';
import AboutPage from './pages/About';

export const Routes = () => {
  return (
   <BrowserRouter>
   <Navbar />
    <RouterRoutes>
        <Route path="/" element={< Home_page /> } />
        <Route path='/about' element={<AboutPage />} />
    </RouterRoutes>
    </BrowserRouter>
    
  )
}

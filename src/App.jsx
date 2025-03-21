//modules
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import LandingPage from './components/Landing'
import AuthPage from './components/Auth'
import ProfileCreation from './components/ProfileCreate'
import Profile from './components/Profile'
import SwipeMatch from './components/Matching'
import EditProfilePage from './components/EditProfilePage'
import DeleteProfilePage from './components/DeleteProfilePage'
import AboutUs from './components/AboutUs'
import Features from './components/Features'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/profileCreate' element={<ProfileCreation />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/match' element={<SwipeMatch />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/profile/delete" element={<DeleteProfilePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
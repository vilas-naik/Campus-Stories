//modules
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import LandingPage from './components/Landing'
import AuthPage from './components/Auth'
import ProfileCreation from './components/ProfileCreate'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/profile' element={<ProfileCreation />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
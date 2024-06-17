import React from 'react'
import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import FileUpload from './components/FileUpload'
import DisplayData from './pages/DisplayData'
import Header from './pages/Header'


const App = () => {
  return (
    <section>
      <nav className='fixed w-full bg-white'>
        <Header />
      </nav>

      <div className='bg-[#ebf2f9] w-full h-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/upload' element={<FileUpload />} />
          <Route path='/display_data' element={<DisplayData />} />
        </Routes>
      </div>

    </section>
  )
}

export default App
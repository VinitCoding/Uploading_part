import React from 'react'
import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import FileUpload from './components/FileUpload'

const App = () => {
  return (
    <div className='bg-[#F5FAFF] w-screen h-screen'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/upload' element={<FileUpload />}/>
      </Routes>
    </div>
  )
}

export default App
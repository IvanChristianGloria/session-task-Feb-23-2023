import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Signup from './Components/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/contact-us' element={<Contact/>}/>
                    <Route path='/about-us' element={<About/>}/>
                    <Route path='/about-us' element={<About/>}/>
                    <Route path='/sign-up' element={<Signup/>}/>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )

} 

export default Router
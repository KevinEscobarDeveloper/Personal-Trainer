import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../layout/public/Footer'
import { Header } from '../layout/public/Header'
import { Inicio } from '../layout/public/Inicio'
import { Menu } from '../layout/public/Menu'
import { PublicLayout } from '../layout/public/PublicLayout'

export const Routing = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path='/inicio' index element={<Inicio/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

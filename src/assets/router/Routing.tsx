import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { PublicLayout } from '../layout/public/PublicLayout'

export const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PublicLayout/>}/>
        </Routes>
    </BrowserRouter>
  )
}

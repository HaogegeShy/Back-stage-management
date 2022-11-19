import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import {About,Home} from '../pages'



export const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)



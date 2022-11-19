import React,{lazy, Suspense} from 'react'
import {Navigate } from 'react-router-dom'
import {Spin} from 'antd'
const About=lazy(()=> import('../pages/about/About'))
const Home=lazy(()=> import('../pages/home/Home'))
const Page1=lazy(()=> import('../pages/page1/page1'))
const Page2=lazy(()=> import('../pages/page2/page2'))

const lazyFunction=(component:JSX.Element)=>
  <Suspense fallback={
    <Spin size='large' style={{
      marginTop: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
    }}/>}>
    {component}
  </Suspense>

export const routerList=[
  {
    path:'/',
    element:lazyFunction(<Navigate to="/page1"/>),
  },
  {
    path:'/',
    element:lazyFunction(<Home/>),
    children:[
      {
        path:'/page1',
        element:lazyFunction(<Page1/>)
      },
      {
        path:'/page2',
        element:lazyFunction(<Page2/>)
      },
    ]
  },
  {
    path:'/about',
    element:lazyFunction(<About/>)
  },
  
]




import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import About from './components/About.jsx';
import MenuByname from './components/MenuByname';
import Singlemenu from './Singlemenu';
import Chicken from './components/Chicken';
import Herosection from './components/Herosection';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
   children:[
    {path:'/',
    element:<Herosection></Herosection>
    },
      {
        path:'/menu',
        loader:() => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Menu></Menu>

    },
    {
      path:'/about',
      element:<About></About>
    },
  
    {
      path:'/menubyname',
      loader:() => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=beef`),
      element:<MenuByname></MenuByname>
    },
    {
      path:'/chicken',
      loader:() => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`),
      element:<Chicken></Chicken>
    },
    {
      path:'/menubyname/:id',
      loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`),
      element:<Singlemenu></Singlemenu>
    },
    {
      path:'/chicken/:id',
      loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`),
      element:<Singlemenu></Singlemenu>
    }
  ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

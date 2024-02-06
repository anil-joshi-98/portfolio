import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { About, Contact, Github, Home } from './components';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Home/>  
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'github',
        element:<Github/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)

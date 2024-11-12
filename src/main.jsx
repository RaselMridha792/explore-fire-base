import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import MainLayout from './components/MainLayout.jsx'
import Login from './components/Login.jsx'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <App></App>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}>

    </RouterProvider>
  </StrictMode>,
)

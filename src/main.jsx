import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from "./componenets/Home/Home"
import About from './componenets/About/About'
import Contact from './componenets/Contact/Contact'
import User from './componenets/User/User'

// METHOD 1 OF ROUTING
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// METHOD 2 & EASY METHOD OF ROUTING
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element= {<Layout />}>
      <Route path='' element= {<Home />}/>
      <Route path='about' element= {<About />}/>
      <Route path='contact' element= {<Contact />}/>
      <Route path= 'user/:userid' element={<User />}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AdminPannel from './components/AdminPannel.jsx'
import AddProduct from './components/AddProduct.jsx'
import ViewData from './components/ViewData.jsx'
import UpdateProduct from './components/UpdateProduct.jsx'
import ClientApp from './ClientApp.jsx'
import Home from './client/Home.jsx'
import AdminLogin from './components/AdminLogin.jsx'
import Protected from './components/Protected.jsx'
import Cart from './client/cart.jsx'
import ClientLogin from './client/ClientLogin.jsx'
import ClientRegister from './client/ClientRegister.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    {/* client home card */}
    <Route path='/' element={<ClientApp/>}>
    <Route path='' element={<Home/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/clientLogin' element={<ClientLogin/>} />
    <Route path='/clientSignup' element={<ClientRegister/>} />

    </Route>
            {/* components */}
    <Route path='/admin' element={<App/>}>
    <Route path='' element={
      <Protected>
        <AdminPannel/>
      </Protected>
    }/>
    <Route path='/admin/addProduct' element={
      <Protected>
        <AddProduct/>
      </Protected>
    } />
    <Route path='/admin/viewData/:id' element={<ViewData/>} />
    <Route path='/admin/updateData/:id' element={<UpdateProduct/>} />
    <Route path='/admin/adminLogin' element={<AdminLogin/>} />
    </Route>

    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
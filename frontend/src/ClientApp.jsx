import React from 'react'
import ClientNavbar from './client/ClientNavbar'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './context/UserContaxtProvider2'


export default function ClientApp() {
  return (
    <UserContextProvider>
    <ClientNavbar/>
      <Outlet/>
    </UserContextProvider>
  )
}
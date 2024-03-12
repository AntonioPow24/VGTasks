import React from 'react'
import { Outlet } from 'react-router-dom'
import UserContextProvider from '../context/UserContext'
import SideBarContextProvider from '../context/SideBarContext'

export default function PublicLayout() {
  return (
    <>
        <UserContextProvider>
          <SideBarContextProvider>
            
            <Outlet/>
          </SideBarContextProvider>
        </UserContextProvider>

    </>
  )
}

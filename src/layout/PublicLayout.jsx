import React from 'react'
import { Outlet } from 'react-router-dom'
import UserContextProvider from '../context/UserContext'
import SideBarContextProvider from '../context/SideBarContext'
import DarkThemeContextProvider from '../context/DarkThemeContext'

export default function PublicLayout() {



  return (
    <>
        <UserContextProvider>
          <SideBarContextProvider>

            <DarkThemeContextProvider>

              <Outlet/>

            </DarkThemeContextProvider>
            
          </SideBarContextProvider>
        </UserContextProvider>

    </>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import { Provider } from 'react-redux'
import store from './store'
export default function AppLayout() {
  return (
    <Provider store={store}>

      
        <NavBar/>
        <main>
      <Outlet/>

        </main>
    
    </Provider>
  )
}

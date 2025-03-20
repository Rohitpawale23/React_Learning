import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


// This is the actual layout of our website which does not changes
// omly the content inside the heder and footer will chnages
//  and it feels like we are moved to another page 

// Here outlet is used to change the conetent dynamically

function Layout() {
  return (
    <>
    <Header />

    <Outlet/>

    <Footer />
    </>
  )
}

export default Layout
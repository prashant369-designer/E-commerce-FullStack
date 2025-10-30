import React from 'react'
import FirstNavbar from "../components/common/FirstNavbar";
import SecondNavbar from "../components/common/SecondNavbar";
import ThirdNavbar from "../components/common/ThirdNavbar";
import Subscribe from "../components/home/Subscribe"
import Footer from "../components/common/Footer";

function WebLayout({ children }) {
  return (
    <>
      <FirstNavbar/>
      <SecondNavbar/>
      <ThirdNavbar/>
      <main className="h-full">{children}</main>
      <Subscribe/>
      <Footer/>
   </>
  )
}

export default WebLayout

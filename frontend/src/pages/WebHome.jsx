import React from 'react'
import FirstNavbar from "../components/common/FirstNavbar"
import SecondNavbar from "../components/common/SecondNavbar"
import ThirdNavbar from "../components/common/ThirdNavbar"
import HeroBanner from "../components/home/Herobanner"
import Category from "../components/home/Categories"
import Marquee from "../components/home/Marquee"
import ElementorContainer from "../components/home/Elementor-Container"
import Products from '../components/home/Products'
import WeekDeal from '../components/home/WeekDeal'
import Collection from '../components/home/Collection'
import LatestProduct from '../components/home/LatestProduct'
import CmsBanner from "../components/home/CmsBanner"
import FeatureProduct from '../components/home/FeatureProduct'
import Inspire from '../components/home/Inspire'
import CustomerReview from '../components/home/CurstomerReview'
import Discount from "../components/home/Discount"
import LatestBlog from '../components/home/LatestBlog'
import Partner from "../components/home/Partner"
import Subscribe from '../components/home/Subscribe'
import Footer from "../components/common/Footer"
import ScrollToTop from "../components/common/ScrolltoTop";


function WebHome() {
  return (
   <>
   <FirstNavbar/>
   <SecondNavbar/>
   <ThirdNavbar/>
   <HeroBanner/>
   <Category/>
   <Marquee/>
   <ElementorContainer/>
   <Products/>
   <WeekDeal/>
   <Collection/>
   <LatestProduct/>
   <CmsBanner/>
   <FeatureProduct/>
   <Inspire/>
   <CustomerReview/>
   <Discount/>
   <LatestBlog/>
   <Partner/>
   <Subscribe/>
   <Footer/>
   <ScrollToTop/>
   </>

  )
}

export default WebHome

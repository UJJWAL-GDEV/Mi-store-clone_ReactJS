// import React from 'react'
import "./Stylesheets/App.css"
import PreNavbar from './Components/PreNavbar'
import Navbar from './Components/Navbar.jsx'
import NavOptions from './Components/NavOptions.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Slider from './Components/Slider'
import data from "./data.json"
import Offers from './Components/Offers.jsx'
import Heading from './Components/Heading.jsx'
import StarProducts from './Components/StarProducts.jsx'
import HotAccessoriesMenu from './Components/HotAccessoriesMenu.jsx'
import HotAccessories from './Components/HotAccessories.jsx'
import ProductReviews from './Components/ProductReviews.jsx'
import Videos from './Components/Videos.jsx'
import Banner from './Components/Banner.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptops={data.laptop} fitnessAndLifestyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
      <Slider slides={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCTS"/>
      <StarProducts starProducts={data.starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu />

      <Routes>
      <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/> } />

      <Route exact path="/smartDevices" element={<HotAccessories smartDevices={data.hotAccessories.smartDevice} smartDevicesCover={data.hotAccessoriesCover.smartDevice} />} />

      <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />

      <Route exact path="/lifeStyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />

      <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>

      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS"/>
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS"/>
      <Banner slides={data.banner.end} />
      <Footer footer={data.footer} />
    </Router>
  )
}



export default App

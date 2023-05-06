import React from 'react'
import {Link} from 'react-router-dom'
import '../Stylesheets/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <div className="hotAccessoriesMenu">
      <Link className="hotAccessoriesLink" to="/music">Music Store</Link>
      <Link className="hotAccessoriesLink" to="/smartDevices">Smart Devices</Link>
      <Link className="hotAccessoriesLink" to="/home">Home</Link>
      <Link className="hotAccessoriesLink" to="/lifeStyle">Lifestyle</Link>
      <Link className="hotAccessoriesLink" to="/mobileAccessories">Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu

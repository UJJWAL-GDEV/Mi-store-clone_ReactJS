import React from 'react'
import '../Stylesheets/HotAccessories.css'
import HotItemCard from './HotItemCard.jsx'

const HotAccessories = ({music, musicCover, smartDevices, smartDevicesCover, home, homeCover, lifeStyle, lifeStyleCover, mobileAccessories, mobileAccessoriesCover}) => {
  return (
    <div className="hotAccessories">

      <div>
        <img src={musicCover || smartDevicesCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="musicCover" />
      </div>

      <div>
        {
             music ? music.map((item, index) => (
                <HotItemCard key={index} name={item.name} image={item.image} price={item.price} index={index} />
            )) : null ||
      
            ( smartDevices && smartDevices.map((item, index) => (
                <HotItemCard key={index} name={item.name} image={item.image} price={item.price} index={index} />
            )) ) ||
 
            ( home && home.map((item, index) => (
                <HotItemCard key={index} name={item.name} image={item.image} price={item.price} index={index} />
            )) ) ||

            ( lifeStyle && lifeStyle.map((item, index) => (
                <HotItemCard key={index} name={item.name} image={item.image} price={item.price} index={index} />
            )) ) ||

            ( mobileAccessories && mobileAccessories.map((item, index) => (
                <HotItemCard key={index} name={item.name} image={item.image} price={item.price} index={index} />
            )) )
        }

        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />

      </div>
      
    </div>
  )
}

export default HotAccessories

import React, {useState, useEffect} from 'react'
import '../Stylesheets/NavOptions.css'
import NavCard from './NavCard.jsx'

const NavOptions = ({miPhones, redmiPhones, tv, laptops, fitnessAndLifestyle, home, audio, accessories}) => {

  const [miPhonesToggle, setMiPhonesToggle] = useState(false);
  const [redmiPhonesToggle, setRedmiPhonesToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopsToggle, setLaptopsToggle] = useState(false);
  const [fitnessAndLifestyleToggle, setFitnessAndLifestyleToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);


  useEffect(() => {
    if(window.location.pathname === "/miphones"){
      return setMiPhonesToggle(true);
    }
    if(window.location.pathname === "/redmiphones"){
      return setRedmiPhonesToggle(true);
    }
    if(window.location.pathname === "/tv"){
      return setTvToggle(true);
    }
    if(window.location.pathname === "/laptops"){
      return setLaptopsToggle(true);
    }
    if(window.location.pathname === "/lifestyle"){
      return setFitnessAndLifestyleToggle(true);
    }
    if(window.location.pathname === "/home"){
      return setHomeToggle(true);
    }
    if(window.location.pathname === "/audio"){
      return setAudioToggle(true);
    }
    if(window.location.pathname === "/accessories"){
      return setAccessoriesToggle(true);
    }
  }, [])


  return (
    <div className="navOptions" >
      {
        miPhonesToggle ? miPhones.map((item, index) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
        )) : null ||

        redmiPhonesToggle ? redmiPhones.map((item, index) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
        )) : null ||

        tvToggle ? tv.map((item, index) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
        )) : null ||

        laptopsToggle ? laptops.map((item, index) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
        )) :null ||

        fitnessAndLifestyleToggle ? fitnessAndLifestyle.map((item, index) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
        )) :null ||

        homeToggle ? home.map((item, index) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
        )) : null ||

        audioToggle ? audio.map((item, index) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
        )) : null ||

        accessoriesToggle ? accessories.map((item, index) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
        )) : null
      }
    </div>
  )
}

export default NavOptions

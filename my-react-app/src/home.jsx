import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from './Components/Navbar'

function Home (){
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <button onClick = {() => navigate('about')}> Go to About</button>
     <button onClick = {() => navigate('navbar')}> Go to Navbar</button>
     </>
  )
}
export default Home
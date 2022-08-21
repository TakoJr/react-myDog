import React from 'react'
import DogHome from './DogHome.png'

const Home = () => {
  return (
    <div className='home'>
        <h1 className='home-title'>Welcome to the house of Dogs!</h1>
        <img className='home-img' src={DogHome} alt='DogHomeImage'></img>
        <p>A dog website made by Teo Yu Chang, 7573959</p>
    </div>
  )
}

export default Home  
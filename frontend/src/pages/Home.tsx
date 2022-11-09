import React from 'react'
import HomeProfile from '../components/HomeProfile'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
        <Navbar />
        <div className='container'>
            <div className='row mt-5'>
                <HomeProfile />
            </div>
        </div>
    </div>
  )
}

export default Home
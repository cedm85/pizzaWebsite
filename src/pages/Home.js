import React from 'react'
import {Link} from 'react-router-dom'
import bannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home" style={{backgroundImage: `url(${bannerImage})`}}>
        <div className='headerContainer'>
            <h1>SAVOR THE SLICE</h1>
            <p>Pizza To Fit Any Taste</p>
            <Link to='/menu'>
                <button>SEE OUR MENU</button>
            </Link>
        </div>
    </div>
  )
}

export default Home

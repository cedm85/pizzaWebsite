import React, {useState} from 'react'
import '../styles/Navbar.css'
import Logo from '../assets/pizzaLogo.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [openLinks, setOpenLinks]=useState(false);
    const toogle = () => {
        setOpenLinks(!openLinks)
    }

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? 'open' : 'close'}>
            <img alt='' src={Logo}/>
                <div className='hiddenLinks'>
                    <Link to="/">Home </Link>
                    <Link to="/menu">Menu </Link>
                    <Link to="/about">About </Link>
                    <Link to="/contact">Contact </Link>
                </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home </Link>
            <Link to="/menu">Menu </Link>
            <Link to="/about">About </Link>
            <Link to="/contact">Contact </Link>
            <button onClick={toogle}>
            <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}

export default Navbar
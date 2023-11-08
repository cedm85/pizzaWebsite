import React from 'react'
import '../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
const currentYear =  new Date().getFullYear();

  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href="https://www.instagram.com/litos_delgadillo/" target="_blank" rel="noreferrer"> <InstagramIcon/></a>
        <a href="https://www.linkedin.com/in/carlos-delgadillo-876a7b74/" target="_blank" rel="noreferrer"> <LinkedInIcon/></a>
        </div>
        <p>&copy; {currentYear} Savor The Slice Pizzeria Copyright</p>
    </div>
  )
}

export default Footer
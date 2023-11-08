import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${MultiplePizzas})`}} >
        </div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Welcome to Savor the Slice, where pizza isn't just food; 
                it's an experience. We are more than just a pizzeria; 
                we are a passion-driven, family-owned business dedicated to crafting the perfect 
                slice of happiness for our beloved pizza enthusiasts.</p>

            <p>Our story began with a dream, a passion for creating mouthwatering, authentic pizza, 
                and a love for bringing people together. Savor the Slice was founded by the Smith family, 
                whose Italian heritage and deep-rooted appreciation for the art of pizza-making 
                have been passed down through generations. Our menu is designed to cater to all tastes, 
                with a range of vegetarian, gluten-free, and vegan options. </p>

            <p>When you visit Savor the Slice, you're not just enjoying a meal; 
                you're stepping into a cozy, welcoming atmosphere where you're part of the family. 
                Our friendly staff is here to make your experience unforgettable, from the moment 
                you walk through our doors to the last satisfying bite of your pizza. Join us at Savor 
                the Slice and discover the magic of pizza done right. Whether you dine in, take out, 
                or have it delivered to your doorstep, we promise that every bite will transport your 
                taste buds to Italy, and every visit will leave you craving more. Thank you for choosing 
                Savor the Slice, where we're not just making pizza; we're making memories.</p>
        </div>
    </div>
  )
}

export default About
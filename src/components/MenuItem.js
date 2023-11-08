import React, {useState} from 'react'
import '../styles/MenuItem.css'

function MenuItem({image, name, price, overview, ingredients}) {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
      setModal(!modal)
  }
  
  if (modal){
      document.body.classList.add('active-modal')
  } else{
      document.body.classList.remove('active-modal')
  }

  return (
    <div className='menuItem' onClick={toggleModal}>
        <div style={{backgroundImage: `url(${image})`}} ></div>
        <h1>{name}</h1>
        <p>${price}</p>
       
        {modal && (
        <div className='modal'>
            <div className='overlay'></div>
            <div className='modal-content'>
                <h1 style={{marginLeft:'0px'}}>{name}</h1>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h2>Ingredients</h2>
                <p>{ingredients}</p>

                <button className='close-modal' onClick={toggleModal}>X</button>
            </div>
        </div>)}
    </div>
  )
}

export default MenuItem
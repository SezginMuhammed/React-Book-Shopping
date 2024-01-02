import React from 'react'
import '../Style/Navbar.css'
import {FaShoppingCart} from "react-icons/fa";


const Navbar = ({setShow ,size}) => {

  return (
    <nav  className='nav'>
      
        <span  className ="name" onClick={()=>setShow(true)}>Book-Store</span>
        <div className='sepet' onClick={()=>setShow(false)}>
          <span className='sepet1'><FaShoppingCart/></span>
          <span className='sepet2'>{size}</span>
        </div>
        
    </nav>
  )
}

export default Navbar

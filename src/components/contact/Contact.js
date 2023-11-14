import React from 'react'
import {MdOutlineCall , MdLocationPin} from "react-icons/md";
import "./Contact.css";

const Contact = () => {
  return (
    <div className='Contact'>
        <div className='ContactDiv1'>
            <MdOutlineCall size={60} />
            <div className='ContactInfo'>
                <h3>Telefon</h3>
                <h2>(+90) 322 346 26 25</h2>
            </div>
        </div>

        <div className='ContactDiv2'>
            <MdLocationPin size={60} />
            <div  className='ContactInfo'>
                <h3>Adres</h3>
                <h2>Mobilyacılar Sitesi, 1998 Sk. No:4</h2>
            </div>
        </div>
      
    </div>
  )
}

export default Contact

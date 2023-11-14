import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import {AiOutlineClockCircle , AiOutlineMail} from 'react-icons/ai';
import './NavContact.css';
import logo from '../../images/logo.png';

const NavContact = () => {
  return (
    <div className='NavContact'>


    <div className='NavContactPhone'>  
        <div>
            <BiPhoneCall size={32}  />
        </div>

        <div className='NavContactInfo'>
            <h3>Telefon</h3>
            <h5>(+90) 322 346 26 25</h5>
        </div>

    </div>
    
    <div className='NavContantHours'>

        <div><AiOutlineClockCircle size={32}/></div>

        <div className='NavContactInfo'> 
        <h3>	Çalışma Saatleri</h3>
         <h5>   08.00 - 18.00</h5>  
         </div>
    </div>

    <div className='NavContactMail'>
        <div><AiOutlineMail size={32}/></div>
        <div className='NavContactInfo' >
            <h3>Email</h3>
            <h5>info@yalcinlarpalet.com</h5>
        </div>

    </div>



    </div>
  )
}

export default NavContact

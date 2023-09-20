import { Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from "react";

const Header = ({handlemenubar}) => {
    
    return (
        <div className="bg-orange-600 shadow-sm shadow-white text-white p-4 flex gap-4 text-xl justify-start items-center ">
            <div onClick={handlemenubar}><AiOutlineMenu></AiOutlineMenu></div>
       
            <Link to='/'>Home</Link>
         
           
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
            
        </div>
    );
};

export default Header;
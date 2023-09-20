import React, { useState } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Herosection from './Herosection';

const Home = () => {
    const [openitem, setOpenitem] = useState(false);
const handlemenubar =()=>{
    setOpenitem(!openitem)
  
}
    return (
        <div>
            <Header handlemenubar={handlemenubar}></Header>
            <div className='flex gap-4'>
            <Sidebar openitem={openitem}></Sidebar>
           
            <Outlet></Outlet>
            </div>
           
        </div>
    );
};

export default Home;
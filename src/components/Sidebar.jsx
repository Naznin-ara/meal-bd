import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({openitem}) => {
    console.log(openitem)
    return (<>
    <div className={``}>
    <div className={`${!openitem?'-translate-x-[1000px]':'translate-x-0'} duration-700 flex flex-col bg-orange-600 w-[200px] min-h-screen rounded-b-lg`}>
            <Link to='/menubyname' className='text-center mt-4 text-xl hover:bg-orange-400 font-bold text-white border-b-2 border-white border-t-2 p-2'>Beef</Link>
            <Link to='/chicken' className='text-center mt-4 text-xl hover:bg-orange-400 font-bold text-white border-b-2 border-white p-2'>Chicken</Link>
        </div>
    </div>
        
    </>
        
    );
};

export default Sidebar;
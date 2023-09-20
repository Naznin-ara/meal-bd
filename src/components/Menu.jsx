import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Menu = () => {
    const menus = useLoaderData();
    const allmenu = menus.categories;
    // console.log(allmenu)
    return (
        <div className='grid grid-cols-3 gap-4 mt-10 w-[80%]'>
            {
                allmenu.map(item => <div key={item.idCatagory} className="card  text-white border-2 border-orange-500 shadow-md shadow-white">
                <figure><img src={item.strCategoryThumb} /></figure>
                <div className="card-body">
                  <h2 className="card-title">{item.strCategory}</h2>
                  <p>{item.strCategoryDescription.slice(0,70)}...</p>
                  <div className="card-actions justify-end">
                    <button className="btn bg-orange-600 text-white border-none hover:text-black">Order now</button>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default Menu;
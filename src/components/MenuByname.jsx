import { Link, useLoaderData } from 'react-router-dom';

const MenuByname = () => {
    const datas = useLoaderData();
    const data = datas.meals;
    console.log(data)
    return (
        <div className='grid grid-cols-3 mt-4 gap-4 p-6 '>
            {
                data.map(item=> <div key={item.idMeal}>
                    <div className="card text-white bg-transparent border border-orange-400 shadow-orange-400 shadow-md  h-[400px]">
   <figure className="p-4">
    <img src={item.strMealThumb} alt="Shoes" className="rounded-xl pt-4 w-[300px] h-[200px]" />
   </figure>
   <div className="card-body items-center text-center">
    <h2 className="card-title">{item.strMeal}</h2>
    <div className="card-actions">
        <Link to={item.idMeal}> <button className="btn bg-orange-500 mt-4 text-white hover:text-black">See Details</button></Link>
     
    </div>
     </div>
    </div>

    </div>)
            }
        </div>
    );
};

export default MenuByname;
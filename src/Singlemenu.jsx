import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Singlemenu = () => {
    const datas = useLoaderData();
    const data = datas.meals[0];
    const navigate = useNavigate();

  const handlebtn = ()=>{
    navigate(-1)
  }
    return (
        <div className='flex justify-center items-center gap-6 mt-6 mx-auto'>
        
          <div className='flex flex-col justify-center items-center'>
            <img src={data.strMealThumb} alt="" className='w-[400px] h-[300px] rounded-lg'/>
            <h1 className='text-center text-white text-xl mt-2'>{data.strMeal}</h1>
            <button className="btn bg-orange-500 mt-4 text-white hover:text-black" onClick={handlebtn}>Go back</button>
          </div>
          <div className='border border-orange-400 w-[400px] h-[450px] rounded-md shadow-md shadow-orange-300'>
                 <h1 className='text-center text-xl font-medium text-white my-4'>Ingredients</h1>
          <ol className='list-decimal text-white px-12'>
            <li>{data?.strIngredient1} : {data?.strMeasure1} </li>
            <li>{data?.strIngredient2} : {data?.strMeasure2}</li>
            <li>{data?.strIngredient3} : {data?.strMeasure3}</li>
            <li>{data?.strIngredient4} : {data?.strMeasure4}</li>
            <li>{data?.strIngredient5} : {data?.strMeasure5}</li>
            <li>{data?.strIngredient6} : {data?.strMeasure6}</li>
            <li>{data?.strIngredient7} : {data?.strMeasure7}</li>
            <li>{data?.strIngredient8} : {data?.strMeasure8}</li>
            <li>{data?.strIngredient9} : {data?.strMeasure9}</li>
            <li>{data?.strIngredient10} : {data?.strMeasure10}</li>
            <li>{data?.strIngredient11} : {data?.strMeasure11}</li>
            <li>{data?.strIngredient12} : {data?.strMeasure12}</li>
        

          </ol>
          <h1 className='mt-2 text-xl text-white pl-6 text-center underline '> <a href={data?.strSource||'Not found'} className='text-white hover:text-orange-500'>Click here for recipe</a>
          </h1>
          </div>
        </div>
    );
};

export default Singlemenu;
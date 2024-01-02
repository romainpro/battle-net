import { useState } from 'react';
import json from '../../json/Carrousel.json';
import { Typographi } from '../../design/Typographi/Typographi';

export const Carrousel = () => {

    const [currentId,setCurrentId]=useState<number>(0)

    const handleUp=()=>{
        setCurrentId((prevId)=>(prevId +1)% json.image.length)
    };

    const handlePrev=()=>{
        setCurrentId((prevId)=> (prevId -1 + json.image.length)%json.image.length);
    };

  return (
    <div className=' w-[1600px] h-[360px] overflow-hidden mx-auto'>
    <div className=' flex  '>
       <div className=' flex items-center'>
        <button className=' absolute left-60 top-56 z-40  bg-background-900 h-20 w-9 rounded-md text-text-100 hover:bg-background-800 hover:border-2' onClick={handleUp}><Typographi variant='h5'>{"<"}</Typographi></button>
        <img className='relative' src={json.image[currentId].img} alt="" />
       <button  className=' absolute right-60 top-56 z-40  bg-background-900 h-20 w-9 rounded-md text-text-100 hover:bg-background-800 hover:border-2 ' onClick={handlePrev}><Typographi variant='h5'>{">"}</Typographi></button>
       </div>
      
    </div>
    </div>
  );
};

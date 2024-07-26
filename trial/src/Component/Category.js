// src/components/Category.js
import React, { useEffect, useState } from 'react';

const Category = () => {
  const [count , setCount] = useState(0)
  const [counts , setCounts] = useState(0)
  const [time , settime] = useState(0)
  const [times , settimes] = useState(0)

  function handleClick(){   
      setCount(count + 3)
  }
  useEffect(()=>{
      if(count < 321){
      setTimeout(()=>setCount(count + 1), 5)
      }
  })
  useEffect(()=>{
      if(counts <35){
      setTimeout(()=>setCounts(counts + 1), 5)
      }
  })
  useEffect(()=>{
    if(time <1400){
    setTimeout(()=>settime(time + 1), 1)
    }
})
useEffect(()=>{
  if(times <15){
  setTimeout(()=>settimes(times + 1), 5)
  }
})
  

  return (
    <div className='classes'>
    <section className='card'> 
 <button className='button1' onClick={handleClick} ><h2 className='h2'>
 {count}<br /><span className='spans'>Amazing Courses</span></h2></button>
 <button className='button1' onClick={handleClick}><h2 className='h2'>
 {counts}<br /><span className='spans'>Talented Instractors</span></h2></button>
   <button className='button1' onClick={handleClick}><h2 className='h2'>
   {time}<br /><span className='spans'>Skilled student</span></h2></button>
   <button className='button1' onClick={handleClick}><h2 className='h2'>
   {times}<br /><span className='spans'>Category</span></h2></button>
   </section>

 </div>
  );
};

export default Category;
